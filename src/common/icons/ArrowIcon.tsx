import type { ArrowDirection } from "../types/icon";

interface ArrowIconProps {
  direction?: ArrowDirection;
  className?: string;
}

const ArrowIcon = ({ direction = "right", className = "" }: ArrowIconProps) => {
  const rotation = {
    right: "rotate-0",
    down: "rotate-90",
    left: "rotate-180",
    up: "-rotate-90",
  }[direction];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-4 ${rotation} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
};

export default ArrowIcon;
