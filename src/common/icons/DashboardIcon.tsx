interface DashboardIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const DashboardIcon = ({
  size = 24,
  color = "currentColor",
  className,
}: DashboardIconProps) => (
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
    <rect x="3" y="3" width="7" height="9" />
    <rect x="14" y="3" width="7" height="5" />
    <rect x="14" y="12" width="7" height="9" />
    <rect x="3" y="16" width="7" height="5" />
  </svg>
);

export default DashboardIcon;
