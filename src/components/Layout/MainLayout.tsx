import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainNavigation from "../MainNavigation/MainNavigation";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] md:grid-rows-[1fr_auto] grid-rows-[auto_1fr_auto] min-h-screen text-base">
      <section className="py-4 px-2 md:h-full flex md:flex-col">
        <MainNavigation />
      </section>
      <main className="h-full bg-contrast">
        <Header />
        <Outlet />
      </main>
      <footer className="col-span-1 md:col-span-2 text-xs text-center py-2">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
