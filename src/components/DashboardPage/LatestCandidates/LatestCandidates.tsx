import ButtonLink from "../../../common/components/ButtonLink/ButtonLink";
import Card from "../../../common/components/Card/Card";
import Table from "../../../common/components/Table/Table";
import { Paths } from "../../../common/constants/paths";
import { useGetRecentlyAddedCandidatesQuery } from "../../../services/api/candidates/candidatesApi";
import type { ICandidate } from "../types/candidateCard";
import SingleCandidate from "./SingleCandidate/SingleCandidate";

const LatestCandidates = () => {
  const { data: recentlyAddedCandidates } = useGetRecentlyAddedCandidatesQuery();
  const latestCandidates: ICandidate[] =
    recentlyAddedCandidates?.map((candidate) => ({
      id: candidate.id,
      fullname: `${candidate.firstName} ${candidate.lastName}`,
      applied: candidate.createdAt,
      cvFile: candidate.cvFile,
    })) ?? [];

  return (
    <Card className="p-5 min-w-[350px]">
      <h2 className="text-3xl font-bold">Najnowsi Kandydaci</h2>
      <Table>
        <div className="flex flex-wrap justify-between text-text-muted border-b-2 pb-2 border-primary">
          <p className="flex-1">Imię i nazwisko</p>
          <p className="flex-1">Aplikował</p>
          <p className="flex-1">CV</p>
        </div>
        {latestCandidates.map((candidate) => (
          <SingleCandidate key={candidate.id} candidate={candidate} />
        ))}
      </Table>
      <ButtonLink to={Paths.CANDIDATES}>Pokaż wszystkich kandydatów</ButtonLink>
    </Card>
  );
};

export default LatestCandidates;
