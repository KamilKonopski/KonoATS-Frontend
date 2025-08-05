import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../common/components/Button/Button";
import CheckBox from "../../common/components/Form/CheckBox/CheckBox";
import FormContainer from "../../common/components/Form/FormContainer/FormContainer";
import InputField from "../../common/components/Form/InputField/InputField";

import { Paths } from "../../common/constants/paths";
import { login } from "../../store/auth/authApi";
import type { RootState } from "../../store/store";
import type { LoginFormValues } from "../../common/types/form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      remember: false,
    },
  });
  const dispatch = useDispatch();
  const authError = useSelector((state: RootState) => state.auth.error);
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormValues) => {
    dispatch(login(data));
    navigate(Paths.DASHBOARD);
  };

  return (
    <>
      <header className="flex gap-2.5 items-center text-4xl">
        <div className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center">
          <img src="/pwa-192x192.png" alt="logo KonoATS" />
        </div>
        <h1>KonoATS</h1>
      </header>
      <FormContainer>
        <h2 className="text-center text-lg">Cześć! Zaloguj się do KonoATS</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-col">
          <InputField
            type="text"
            labelName="Email"
            inputId="email"
            placeholder="Wpisz swój email..."
            register={register}
            error={errors.email?.message}
          />
          <InputField
            type="password"
            labelName="Hasło"
            inputId="password"
            placeholder="Wpisz swoje hasło..."
            register={register}
            error={errors.password?.message}
          />
          {authError && <p className="text-red-500 mt-2">{authError}</p>}
          <div className="flex justify-between items-center">
            <CheckBox
              checkId="remember-password"
              labelName="Zapamiętaj mnie"
              register={register}
            />
            <a href="#">Nie pamiętasz hasła?</a>
          </div>
          <Button />
        </form>
      </FormContainer>
    </>
  );
};

export default LoginPage;
