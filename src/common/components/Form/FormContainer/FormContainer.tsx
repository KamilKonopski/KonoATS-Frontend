interface FormContainerProps {
  children: React.ReactNode;
}

const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <div className="max-w-md min-w-[400px] mx-auto mt-16 p-6 bg-bg-muted rounded-xl shadow-md">
      {children}
    </div>
  );
};

export default FormContainer;
