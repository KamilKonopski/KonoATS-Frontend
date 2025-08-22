import ListContent from "../../../../common/components/ListItem/ListContent/ListContent";
import type { ICandidate } from "../../types/candidateCard";

interface SingleCandidateProps {
  candidate: ICandidate;
}

const SingleCandidate = ({ candidate }: SingleCandidateProps) => {
  return (
    <ListContent to="/">
      <p className="flex-1 text-center">{candidate.fullname}</p>
      <p className="flex-1 text-center">{candidate.applied}</p>
      <p className="flex-1 text-center">{candidate.cvFile}</p>
    </ListContent>
  );
};

export default SingleCandidate;
