interface CandidatesIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const CandidatesIcon = ({
  size = 24,
  color = "currentColor",
  className,
}: CandidatesIconProps) => (
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
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a7.5 7.5 0 0113 0" />
  </svg>
);
export default CandidatesIcon;
