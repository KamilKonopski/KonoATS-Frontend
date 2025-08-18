interface BaseButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
}

const BaseButton = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
}: BaseButtonProps) => {
  const styles = {
    primary: "bg-primary text-text px-4 py-2 rounded-lg hover:bg-primary-hover",
    secondary: "bg-bg-muted text-text px-4 py-2 rounded-lg hover:bg-color-contrast",
    danger: "bg-red-600 text-text px-4 py-2 rounded-lg hover:bg-red-700",
  };

  return (
    <button type={type} onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
};

export default BaseButton;
