import LogoCom from "@/components/brand/noticiascol-logo-plain";

type NoticiascolLogoProps = {
  className?: string;
};

export function NoticiascolLogo({ className }: NoticiascolLogoProps) {
  return (
    <LogoCom
      alt="Noticiascol.com"
      width={600}
      height={72}
      className={className}
    />
  );
}
