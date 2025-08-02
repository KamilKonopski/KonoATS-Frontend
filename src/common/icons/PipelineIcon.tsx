interface PipelineIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const PipelineIcon = ({
  size = 24,
  color = "currentColor",
  className,
}: PipelineIconProps) => (
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
    <path d="M3 6h18M3 12h12M3 18h6" />
  </svg>
);
export default PipelineIcon;
