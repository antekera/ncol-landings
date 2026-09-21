import Image from "next/image";

type NoticiascolLogoProps = {
  className?: string;
  priority?: boolean;
};

export function NoticiascolLogo({
  className,
  priority = false,
}: NoticiascolLogoProps) {
  return (
    <Image
      src="/brand/noticiascol-logo.svg"
      alt="Noticiascol.com"
      width={677}
      height={113}
      className={className}
      priority={priority}
    />
  );
}
