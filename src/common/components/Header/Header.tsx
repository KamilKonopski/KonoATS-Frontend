import { useLocation } from "react-router-dom";

import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import UserMenu from "./UserMenu/UserMenu";

import { getTitle } from "../../utils/getTitle";

const Header = () => {
  const { pathname } = useLocation();
  const title = getTitle(pathname);

  return (
    <header className="bg-contrast-muted flex items-center justify-between h-20 px-8">
      <h2 className="text-3xl font-heading">{title}</h2>
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <p>Cześć, Ania</p>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
