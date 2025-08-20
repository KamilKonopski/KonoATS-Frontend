import ButtonLink from "../../../../common/components/ButtonLink/ButtonLink";
import type { ICandidate } from "../../types/candidateCard";

interface SingleCandidateProps {
  candidate: ICandidate;
}

const SingleCandidate = ({ candidate }: SingleCandidateProps) => {
  return (
    <ButtonLink to="/" className="flex flex-wrap justify-between border-b-2 border-primary py-4">
      <p className="flex-1 text-center">{candidate.fullname}</p>
      <p className="flex-1 text-center">{candidate.applied}</p>
      <p className="flex-1 text-center">{candidate.cvFile}</p>
    </ButtonLink>
  );
};

export default SingleCandidate;
