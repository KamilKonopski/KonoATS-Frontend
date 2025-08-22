import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../../common/components/Button/Button";
import CheckBox from "../../common/components/Form/CheckBox/CheckBox";
import FormContainer from "../../common/components/Form/FormContainer/FormContainer";
import InputField from "../../common/components/Form/InputField/InputField";

import { Paths } from "../../common/constants/paths";
import type { LoginFormValues } from "../../common/types/form";
import { useLoginMutation } from "../../services/api/auth/authApi";

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      remember: false,
    },
  });
  const [login, { error }] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data).unwrap();
      navigate(Paths.DASHBOARD);
    } catch (e: any) {
      console.error("Błąd logowania: ", e);
    }
  };

  const isMock = import.meta.env.VITE_USE_MOCK === "true";

  return isMock ? (
    <button
      type="button"
      className=" mt-3 bg-primary hover:bg-primary-hover rounded-md h-10 px-6 text-base font-medium transition-colors duration-150 cursor-pointer"
      onClick={async () => {
        try {
          await login({
            email: "demo@konoats.com",
            password: "demo123",
            remember: false,
          }).unwrap();
          navigate(Paths.DASHBOARD);
        } catch (e) {
          console.error("Błąd logowania Demo:", e);
        }
      }}
    >
      Zaloguj jako Demo
    </button>
  ) : (
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
          />
          <InputField
            type="password"
            labelName="Hasło"
            inputId="password"
            placeholder="Wpisz swoje hasło..."
            register={register}
          />
          {error ? <p className="text-red-500 mt-2">Błąd logowania</p> : null}
          <div className="flex justify-between items-center">
            <CheckBox checkId="remember-password" labelName="Zapamiętaj mnie" register={register} />
            <a href="#">Nie pamiętasz hasła?</a>
          </div>
          <Button />
        </form>
      </FormContainer>
    </>
  );
};

export default LoginPage;
