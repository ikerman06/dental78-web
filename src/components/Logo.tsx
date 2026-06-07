interface LogoProps {
  size?: number;
  color?: string;
}

export default function Logo({ size = 40, color = "#777777" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="3" fill="none" />
      {/* Abstract D-shape — precision geometry, no tooth icon */}
      <path
        d="M34 28 L34 72 L50 72 C62 72 70 64 70 50 C70 36 62 28 50 28 Z"
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
      <line x1="34" y1="50" x2="62" y2="50" stroke={color} strokeWidth="2" opacity="0.4" />
    </svg>
  );
}
