import ButtonLink from "../../../common/components/ButtonLink/ButtonLink";
import Card from "../../../common/components/Card/Card";
import ListHeader from "../../../common/components/ListItem/ListHeader/ListHeader";
import ListItem from "../../../common/components/ListItem/ListItem";
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
      <ListItem>
        <ListHeader columns={["Imię i nazwisko", "Aplikował", "CV"]} />
        {latestCandidates.map((candidate) => (
          <SingleCandidate key={candidate.id} candidate={candidate} />
        ))}
      </ListItem>
      <ButtonLink className="rounded-md px-4 py-2" to={Paths.CANDIDATES}>
        Pokaż wszystkich kandydatów
      </ButtonLink>
    </Card>
  );
};

export default LatestCandidates;
