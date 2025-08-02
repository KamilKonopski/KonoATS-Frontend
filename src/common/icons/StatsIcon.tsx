interface StatsIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const StatsIcon = ({
  size = 24,
  color = "currentColor",
  className,
}: StatsIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 20V10M12 20V4M20 20v-6" />
  </svg>
);
export default StatsIcon;
