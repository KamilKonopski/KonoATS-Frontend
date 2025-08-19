import ButtonLink from "../../../../common/components/ButtonLink/ButtonLink";
import type { ICandidate } from "../../types/candidateCard";

interface SingleCandidateProps {
  candidate: ICandidate;
}

const SingleCandidate = ({ candidate }: SingleCandidateProps) => {
  return (
    <ButtonLink to="/" className="flex flex-wrap justify-between">
      <p className="flex-1">{candidate.fullname}</p>
      <p className="flex-1">{candidate.applied}</p>
      <p className="flex-1">{candidate.cvFile}</p>
    </ButtonLink>
  );
};

export default SingleCandidate;
