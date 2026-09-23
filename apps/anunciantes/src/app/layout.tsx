import type { Metadata, Viewport } from "next";
import { Manrope, Martel } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import { AnalyticsClickTracker } from "@/components/analytics/analytics-click-tracker";
import "./globals.css";

const googleAnalyticsId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-K1W6F17K5W";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const martel = Martel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-martel",
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anunciantes.noticiascol.com"),
  title: {
    default: "Noticiascol para Anunciantes",
    template: "%s | Noticiascol para Anunciantes",
  },
  description:
    "Soluciones publicitarias y contenido patrocinado para conectar tu marca con la audiencia de Noticiascol.",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#1b75bb",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${martel.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <AnalyticsClickTracker />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.gtag = function(){window.dataLayer.push(arguments);};
window.gtag('js', new Date());
window.gtag('config', '${googleAnalyticsId}');`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
