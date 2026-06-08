interface LogoProps {
  size?: number;
  color?: string;
}

export default function Logo({ size = 40, color = "#777777" }: LogoProps) {
  return (
    <img
      src="/LOGO DENTAL78.png"
      alt="Dental 78"
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
    />
  );
}
