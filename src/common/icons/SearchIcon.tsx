interface SearchIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const SearchIcon = ({ size = 24, color = "currentColor", className }: SearchIconProps) => (
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
    <circle cx="11" cy="11" r="8" />
    <line x1="16" y1="16" x2="20" y2="20" />
  </svg>
);

export default SearchIcon;
