import ButtonLink from "../../../common/components/ButtonLink/ButtonLink";
import Card from "../../../common/components/Card/Card";
import type { CandidateStatus } from "../../../common/constants/candidateStatus";
import { Paths } from "../../../common/constants/paths";
import { useGetAllCandidatesQuery } from "../../../services/api/candidates/candidatesApi";
import type { IPipelineStatus } from "../types/pipelineStatus";
import { pipelineConfig } from "./config/pipelineConfig";
import SingleStatus from "./SingleStatus/SingleStatus";

const PipelineCard = () => {
  const { data: allCandidates = [] } = useGetAllCandidatesQuery();
  const total = allCandidates.length;

  const pipelineStatuses: IPipelineStatus[] = pipelineConfig.map((config) => {
    const matchingCandidates = allCandidates.filter((candidate) =>
      config.statuses.includes(candidate.status as CandidateStatus)
    );

    return {
      id: config.id,
      statusName: config.label,
      statusColor: config.color,
      statusPercent: total > 0 ? (matchingCandidates.length / total) * 100 : 0,
      candidates: matchingCandidates.length,
    };
  });

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
