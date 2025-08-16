import Card from "../../../../common/components/Card/Card";

import type { IActivityCard } from "../../types/activityCard";

interface ActivityCardProps {
  card: IActivityCard;
}

const ActivityCard = ({ card }: ActivityCardProps) => {
  return (
    <Card
      cardBgColor={card.cardColor}
      className="flex justify-center items-center rounded-2xl p-6 w-full md:w-[48%] lg:w-[30%] xl:w-1/6"
    >
      <div className="flex items-center justify-center rounded-full w-12 h-12 bg-white/30 mr-3">
        {card.cardIcon}
      </div>
      <div className="flex flex-col">
        <p className="text-3xl font-bold">{card.cardNumber}</p>
        <p className="text-[15px]">{card.cardName}</p>
      </div>
    </Card>
  );
};

export default ActivityCard;
