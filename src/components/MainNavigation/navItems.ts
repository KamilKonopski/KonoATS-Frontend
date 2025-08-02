import { Paths } from "../../common/constants/paths";

import { type IconName } from "../../common/types/icon";

export const navItems: {
  to: Paths;
  icon: IconName;
  label: string;
}[] = [
  { to: Paths.DASHBOARD, icon: "dashboard", label: "Dashboard" },
  { to: Paths.OFFERS, icon: "offerts", label: "Oferty" },
  { to: Paths.CANDIDATES, icon: "candidates", label: "Kandydaci" },
  { to: Paths.PIPELINE, icon: "pipeline", label: "Pipeline" },
  { to: Paths.MAILING, icon: "mailing", label: "Mailing" },
  { to: Paths.STATS, icon: "stats", label: "Statystyki" },
];
