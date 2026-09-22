"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AD_DEMO_ARTICLE_URL,
  AD_DEMO_CLOSE_MESSAGE,
  AD_DEMO_READY_MESSAGE,
  getAdDemoUrl,
} from "@/config/ad-demo";
import {
  ADVERTISING_FORMATS,
  type AdSlotId,
} from "@/data/advertising";

type AdDemoContextValue = {
  openDemo: (slot: AdSlotId) => void;
};

const AdDemoContext = createContext<AdDemoContextValue | null>(null);
const SLOT_IDS = new Set(ADVERTISING_FORMATS.map(({ id }) => id));

function isAdSlotId(value: string | null): value is AdSlotId {
  return value !== null && SLOT_IDS.has(value as AdSlotId);
}

export function AdDemoProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const savedScrollRef = useRef(0);
  const previousOverflowRef = useRef("");
  const [slot, setSlot] = useState<AdSlotId | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const openDemo = useCallback((nextSlot: AdSlotId) => {
    triggerRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    savedScrollRef.current = window.scrollY;
    setIsLoading(true);
    setSlot(nextSlot);

    const url = new URL(window.location.href);
    url.searchParams.set("slot", nextSlot);
    window.history.replaceState(window.history.state, "", url);
  }, []);

  const closeDemo = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    const initialSlot = new URLSearchParams(window.location.search).get("slot");
    if (!isAdSlotId(initialSlot)) return;

    const frame = requestAnimationFrame(() => {
      savedScrollRef.current = window.scrollY;
      setIsLoading(true);
      setSlot(initialSlot);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!slot || !dialogRef.current || dialogRef.current.open) return;

    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current.showModal();
    requestAnimationFrame(() => closeButtonRef.current?.focus());
  }, [slot]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = previousOverflowRef.current;
    };
  }, []);

  useEffect(() => {
    const expectedOrigin = new URL(AD_DEMO_ARTICLE_URL).origin;
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin !== expectedOrigin ||
        event.source !== iframeRef.current?.contentWindow
      ) {
        return;
      }

      if (event.data?.type === AD_DEMO_CLOSE_MESSAGE) closeDemo();
      if (
        event.data?.type === AD_DEMO_READY_MESSAGE &&
        event.data?.slot === slot
      ) {
        setIsLoading(false);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [closeDemo, slot]);

  useEffect(() => {
    if (!slot || !isLoading) return;
    const timeout = window.setTimeout(() => setIsLoading(false), 15000);
    return () => window.clearTimeout(timeout);
  }, [isLoading, slot]);

  const handleClosed = () => {
    setSlot(null);
    setIsLoading(false);
    document.body.style.overflow = previousOverflowRef.current;

    requestAnimationFrame(() => {
      window.scrollTo({ top: savedScrollRef.current, behavior: "instant" });
      triggerRef.current?.focus({ preventScroll: true });
    });
  };

  const contextValue = useMemo(() => ({ openDemo }), [openDemo]);
  const format = slot
    ? ADVERTISING_FORMATS.find(({ id }) => id === slot)
    : null;

  return (
    <AdDemoContext.Provider value={contextValue}>
      {children}
      <dialog
        id="ad-demo-dialog"
        ref={dialogRef}
        aria-labelledby="ad-demo-title"
        aria-describedby="ad-demo-description"
        className="ad-demo-dialog"
        onCancel={(event) => {
          event.preventDefault();
          closeDemo();
        }}
        onClose={handleClosed}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDemo();
        }}
      >
        <div className="ad-demo-panel">
          <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border bg-surface px-4 py-3 sm:px-5">
            <div className="min-w-0">
              <p className="text-[0.6rem] font-extrabold tracking-[0.12em] text-brand-blue uppercase">
                Demostración real
              </p>
              <h2
                id="ad-demo-title"
                className="truncate font-serif text-base font-extrabold text-brand-navy sm:text-lg"
              >
                {format?.name ?? "Ubicación publicitaria"}
              </h2>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeDemo}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 border border-brand-navy px-3 py-2 text-xs font-extrabold text-brand-navy hover:bg-surface-muted"
            >
              <span aria-hidden="true">×</span>
              Cerrar
            </button>
          </header>

          <div className="relative min-h-0 flex-1 bg-[#dfe5eb]">
            {slot ? (
              <iframe
                ref={iframeRef}
                key={slot}
                title={`Noticia real con el formato ${format?.name ?? slot} resaltado`}
                src={getAdDemoUrl(slot)}
                className="size-full border-0 bg-white"
                sandbox="allow-scripts allow-same-origin allow-popups"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : null}

            {isLoading ? (
              <div
                className="absolute inset-0 grid place-items-center bg-surface"
                role="status"
                aria-live="polite"
              >
                <div className="text-center">
                  <span
                    className="mx-auto block size-8 animate-spin rounded-full border-2 border-brand-blue border-t-brand-orange motion-reduce:animate-none"
                    aria-hidden="true"
                  />
                  <span className="mt-3 block text-sm font-bold text-brand-navy">
                    Cargando la noticia y su ubicación…
                  </span>
                </div>
              </div>
            ) : null}
          </div>

          <p
            id="ad-demo-description"
            className="shrink-0 border-t border-border bg-surface px-4 py-2 text-[0.68rem] leading-5 text-muted-foreground sm:px-5"
          >
            El espacio seleccionado se resalta temporalmente. Esta vista no
            registra impresiones, clics ni visitas editoriales.
          </p>
        </div>
      </dialog>
    </AdDemoContext.Provider>
  );
}

type AdDemoButtonProps = {
  slot: AdSlotId;
  children?: ReactNode;
  className?: string;
};

export function AdDemoButton({
  slot,
  children = "Ver ejemplo",
  className = "",
}: AdDemoButtonProps) {
  const context = useContext(AdDemoContext);

  if (!context) {
    throw new Error("AdDemoButton debe utilizarse dentro de AdDemoProvider");
  }

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-controls="ad-demo-dialog"
      onClick={() => context.openDemo(slot)}
      className={className}
    >
      {children}
    </button>
  );
}
