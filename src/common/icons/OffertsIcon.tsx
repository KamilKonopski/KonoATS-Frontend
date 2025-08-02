interface OffersIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const OffersIcon = ({
  size = 24,
  color = "currentColor",
  className,
}: OffersIconProps) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    viewBox="0 0 24 24"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
);

export default OffersIcon;
