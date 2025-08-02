import { NavLink } from "react-router-dom";

import Icon from "../../../common/icons/Icon";

import type { IconName } from "../../../common/types/icon";

interface NavigationItemProps {
  to: string;
  icon: IconName;
  label: string;
}

const NavigationItem = ({ to, icon, label }: NavigationItemProps) => (
  <li className="text-[18px] w-full py-0.5">
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex gap-8 items-center px-4 py-2 rounded-lg transition-all ${
          isActive ? "bg-primary text-white" : "text-text hover:bg-bg-muted"
        }`
      }
    >
      <Icon name={icon} /> {label}
    </NavLink>
  </li>
);

export default NavigationItem;
