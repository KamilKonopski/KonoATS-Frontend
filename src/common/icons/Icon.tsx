import DashboardIcon from "./DashboardIcon";
import OffersIcon from "./OffertsIcon";
import PipelineIcon from "./PipelineIcon";
import CandidatesIcon from "./CandidatesIcon";
import MailingIcon from "./MailingIcon";
import StatsIcon from "./StatsIcon";
import SettingsIcon from "./SettingsIcon";
import UserIcon from "./UserIcon";

import type { IconName } from "../types/icon";

interface IconProps {
  name?: IconName;
  size?: number;
  color?: string;
  className?: string;
}

const icons: Record<IconName, React.FC<IconProps>> = {
  dashboard: DashboardIcon,
  offerts: OffersIcon,
  pipeline: PipelineIcon,
  candidates: CandidatesIcon,
  mailing: MailingIcon,
  stats: StatsIcon,
  settings: SettingsIcon,
  user: UserIcon,
};

const Icon = ({
  name = "dashboard",
  size = 24,
  color = "currentColor",
  className,
}: IconProps) => {
  const IconComponent = icons[name];
  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;
