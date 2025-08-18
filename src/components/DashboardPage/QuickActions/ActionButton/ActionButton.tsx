interface ActionButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const ActionButton = ({ label, onClick, variant = "primary" }: ActionButtonProps) => {
  const baseStyles =
    "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition duration-200 text-sm";

  const variants = {
    primary: "bg-primary text-text hover:bg-primary-hover shadow-md",
    secondary: "bg-bg-muted text-text hover:bg-contrast shadow-sm",
  };

  return (
    <button type="button" onClick={onClick} className={`${baseStyles}, ${variants[variant]}`}>
      <span>{label}</span>
    </button>
  );
};

export default ActionButton;
