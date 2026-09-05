interface VALogoProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function VALogo({ size = 48, color = 'currentColor', className = '' }: VALogoProps) {
  const viewBoxWidth = 485;
  const viewBoxHeight = 320;
  const calculatedWidth = size * (viewBoxWidth / viewBoxHeight);

  return (
    <svg
      width={calculatedWidth}
      height={size}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Visionary Architects logo"
      role="img"
    >
      {/* Left thick stroke (V left leg) */}
      <path
        d="M 35 25 L 88 25 L 213 295 L 160 295 Z"
        fill={color}
      />

      {/* Middle double thin lines (V right leg / A left leg) */}
      <path
        d="M 162 295 L 275 25"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="square"
      />
      <path
        d="M 176 295 L 289 25"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="square"
      />

      {/* Right thick stroke (A right leg) */}
      <path
        d="M 275 25 L 328 25 L 453 295 L 400 295 Z"
        fill={color}
      />
    </svg>
  );
}

