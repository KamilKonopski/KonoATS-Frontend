import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-5 items-center justify-center w-full h-screen">
      <p className="text-6xl">404</p>
      <p className="text-lg">Ups! Nie znaleziono strony.</p>
      <button
        onClick={() => navigate("/dashboard")}
        className="mt-3 bg-primary hover:bg-primary-hover rounded-md h-10 px-6 text-base font-medium transition-colors duration-150 cursor-pointer"
      >
        Powrót do strony głównej
      </button>
    </section>
  );
};

export default NotFoundPage;
