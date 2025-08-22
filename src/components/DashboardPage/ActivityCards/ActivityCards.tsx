import { CandidateStatus } from "../../../common/constants/candidateStatus";
import { OffertStatus } from "../../../common/constants/offertStatus";
import MailingIcon from "../../../common/icons/MailingIcon";
import OffersIcon from "../../../common/icons/OffertsIcon";
import StatsIcon from "../../../common/icons/StatsIcon";
import UserIcon from "../../../common/icons/UserIcon";
import { useGetAllCandidatesQuery } from "../../../services/api/candidates/candidatesApi";
import { useGetAllOffertsQuery } from "../../../services/api/offerts/offertsApi";

import type { IActivityCard } from "../types/activityCard";

import ActivityCard from "./ActivityCard/ActivityCard";

const ActivityCards = () => {
  const { data: allOfferts } = useGetAllOffertsQuery({});
  const activeOfferts = allOfferts?.filter((offert) => offert.status === OffertStatus.OPEN);
  const { data: allCandidates } = useGetAllCandidatesQuery();
  const newCandidates = allCandidates?.filter(
    (candidate) => candidate.status === CandidateStatus.NEW
  );
  const qualifyCandidates = allCandidates?.filter(
    (candidate) =>
      candidate.status === CandidateStatus.OFFERT || candidate.status === CandidateStatus.HIRED
  );

  const activityCards: IActivityCard[] = [
    {
      cardName: "Aktywne oferty",
      cardNumber: activeOfferts?.length || 0,
      cardIcon: <OffersIcon />,
      cardColor: "bg-purple-500",
    },
    {
      cardName: "Nowi kandydaci",
      cardNumber: newCandidates?.length || 0,
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
      cardNumber: qualifyCandidates?.length || 0,
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
