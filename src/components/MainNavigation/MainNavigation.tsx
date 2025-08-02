import NavigationItem from "./NavigationItem/NavigationItem";

import { navItems } from "./navItems";

const MainNavigation = () => {
  return (
    <>
      <header className="flex gap-2.5 items-center text-4xl">
        <div className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center">
          <img src="/pwa-192x192.png" alt="logo KonoATS" />
        </div>
        <h1>KonoATS</h1>
      </header>
      <nav className="py-8 bg-bg text-text">
        <ul className="flex md:flex-col gap-6">
          {navItems.map(({ to, icon, label }) => (
            <NavigationItem key={to} to={to} icon={icon} label={label} />
          ))}
        </ul>
      </nav>
      <p className="self-center mt-auto">v0.1.0</p>
    </>
  );
};

export default MainNavigation;
