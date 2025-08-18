import ButtonLink from "../../../common/components/ButtonLink/ButtonLink";
import Card from "../../../common/components/Card/Card";
import { Paths } from "../../../common/constants/paths";
import type { IPipelineStatus } from "../types/pipelineStatus";
import SingleStatus from "./SingleStatus/SingleStatus";

const PipelineCard = () => {
  const pipelineStatuses: IPipelineStatus[] = [
    { id: 1, statusName: "Nowi", statusColor: "bg-blue-700", statusPercent: 60, candidates: 6 },
    {
      id: 2,
      statusName: "Screening",
      statusColor: "bg-blue-900",
      statusPercent: 40,
      candidates: 4,
    },
    {
      id: 3,
      statusName: "Rozmowa/Zadanie",
      statusColor: "bg-blue-400",
      statusPercent: 20,
      candidates: 2,
    },
    {
      id: 4,
      statusName: "Zatrudnieni",
      statusColor: "bg-green-600",
      statusPercent: 10,
      candidates: 1,
    },
  ];
  return (
    <Card className="p-5 min-w-[350px]">
      <h2 className="text-3xl font-bold">Pipeline</h2>
      <article className="flex flex-col gap-3 my-5">
        {pipelineStatuses.map((status) => (
          <SingleStatus key={status.id} status={status} />
        ))}
      </article>
      <ButtonLink to={Paths.PIPELINE}>Pokaż pełny pipeline</ButtonLink>
    </Card>
  );
};

export default PipelineCard;
