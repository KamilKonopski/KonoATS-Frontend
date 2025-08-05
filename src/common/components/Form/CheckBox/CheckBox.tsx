import type { UseFormRegister } from "react-hook-form";
import type { LoginFormValues } from "../../../types/form";

interface CheckBoxProps {
  checkId: string;
  labelName: string;
  register: UseFormRegister<LoginFormValues>;
}

const CheckBox = ({ checkId, labelName, register }: CheckBoxProps) => {
  return (
    <div className="flex gap-2 my-2.5">
      <input type="checkbox" id={checkId} {...register("remember")} />
      <label htmlFor={checkId}>{labelName}</label>
    </div>
  );
};

export default CheckBox;
