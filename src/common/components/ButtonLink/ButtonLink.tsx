import { Link } from "react-router-dom";
import ArrowIcon from "../../icons/ArrowIcon";

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const ButtonLink = ({ to, children, className = "" }: ButtonLinkProps) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center 
    px-4 py-2
    text-primary
    text-sm font-medium
    transition-colors
    hover:bg-primary-hover/10 
    hover:text-primary-hover
    focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
};

export default ButtonLink;
