import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";

const AuthLayout = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full">
      <Outlet />
      <footer className="mt-5">
        <Footer />
      </footer>
    </section>
  );
};

export default AuthLayout;
