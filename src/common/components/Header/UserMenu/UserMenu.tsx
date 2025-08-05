import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "../../../../store/auth/authApi";
import { Paths } from "../../../constants/paths";
import Icon from "../../../icons/Icon";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        e.target instanceof Node &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="w-9 h-9 rounded-full bg-violet-500 text-text flex items-center justify-center hover:opacity-90"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Icon name="user" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-bg shadow-lg rounded-md z-50 overflow-hidden">
          <NavLink
            to={Paths.PROFILE}
            className="block w-full px-4 py-2 text-left hover:bg-bg-muted"
            onClick={() => setOpen(false)}
          >
            Profil
          </NavLink>
          <NavLink
            to={Paths.SETTINGS}
            className="block w-full px-4 py-2 text-left hover:bg-bg-muted"
            onClick={() => setOpen(false)}
          >
            Ustawienia
          </NavLink>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-red-500 hover:bg-bg-muted"
          >
            Wyloguj
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
