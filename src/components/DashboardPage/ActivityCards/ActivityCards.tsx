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
      cardColor: "purple-500",
    },
    {
      cardName: "Nowi kandydaci",
      cardNumber: 12,
      cardIcon: <UserIcon />,
      cardColor: "blue-400",
    },
    {
      cardName: "Zaplanowane rozmowy",
      cardNumber: 3,
      cardIcon: <MailingIcon />,
      cardColor: "emerald-500",
    },
    {
      cardName: "Zakwalifikowani",
      cardNumber: 7,
      cardIcon: <StatsIcon />,
      cardColor: "orange-400",
    },
  ];
  return (
    <div className="flex gap-5 w-full justify-center mt-5 px-5 sm:px-[20px] md:px-[40px] xl:px-[60px] flex-wrap">
      {activityCards.map((card) => (
        <ActivityCard key={card.cardName} card={card} />
      ))}
    </div>
  );
};

export default ActivityCards;
