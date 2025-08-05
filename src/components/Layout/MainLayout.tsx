import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import MainNavigation from "../MainNavigation/MainNavigation";
import Header from "../../common/components/Header/Header";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] md:grid-rows-[1fr_auto] grid-rows-[auto_1fr_auto] gap-4 h-screen">
      <section className="py-4 px-2 md:h-full md:overflow-y-auto flex md:flex-col">
        <MainNavigation />
      </section>
      <main className="h-full overflow-y-auto bg-contrast">
        <Header />
        <Outlet />
      </main>
      <footer className="p-4 col-span-1 md:col-span-2 flex justify-center">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
