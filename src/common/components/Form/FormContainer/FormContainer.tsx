interface FormContainerProps {
  children: React.ReactNode;
  className?: string;
}

const FormContainer = ({ children, className = "" }: FormContainerProps) => {
  return (
    <div className={`min-w-[400px] p-6 bg-bg-muted rounded-xl shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default FormContainer;
