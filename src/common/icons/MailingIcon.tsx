interface MailingIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const MailingIcon = ({
  size = 24,
  color = "currentColor",
  className,
}: MailingIconProps) => (
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
    <path d="M4 4h16v16H4z" />
    <path d="M4 4l8 8 8-8" />
  </svg>
);
export default MailingIcon;
