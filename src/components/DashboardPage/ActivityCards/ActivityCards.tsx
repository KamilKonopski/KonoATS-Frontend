import MailingIcon from "../../../common/icons/MailingIcon";
import OffersIcon from "../../../common/icons/OffertsIcon";
import StatsIcon from "../../../common/icons/StatsIcon";
import UserIcon from "../../../common/icons/UserIcon";

import type { IActivityCard } from "../types/activityCard";

import ActivityCard from "./ActivityCard/ActivityCard";

const ActivityCards = () => {
  const activityCards: IActivityCard[] = [
    {
      cardName: "Aktywne oferty",
      cardNumber: 5,
      cardIcon: <OffersIcon />,
      cardColor: "bg-purple-500",
    },
    {
      cardName: "Nowi kandydaci",
      cardNumber: 12,
      cardIcon: <UserIcon />,
      cardColor: "bg-blue-400",
    },
    {
      cardName: "Zaplanowane rozmowy",
      cardNumber: 3,
      cardIcon: <MailingIcon />,
      cardColor: "bg-emerald-500",
    },
    {
      cardName: "Zakwalifikowani",
      cardNumber: 7,
      cardIcon: <StatsIcon />,
      cardColor: "bg-orange-400",
    },
  ];
  return (
    <div className="flex gap-5 w-full justify-center mt-5 flex-wrap">
      {activityCards.map((card) => (
        <ActivityCard key={card.cardName} card={card} />
      ))}
    </div>
  );
};

export default ActivityCards;
