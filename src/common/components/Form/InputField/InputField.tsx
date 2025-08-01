import type { UseFormRegister, FieldValues, Path } from "react-hook-form";

type InputFieldProps<TFormValues extends FieldValues> = {
  labelName: string;
  inputId: Path<TFormValues>;
  placeholder?: string;
  type?: string;
  error?: string;
  register?: UseFormRegister<TFormValues>;
};

const InputField = <TFormValues extends FieldValues>({
  labelName,
  inputId,
  placeholder,
  type = "text",
  error,
  register,
}: InputFieldProps<TFormValues>) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={inputId} className="text-sm font-medium">
        {labelName}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        className="p-2 rounded-md border border-gray-300"
        {...(register ? register(inputId) : {})}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default InputField;
