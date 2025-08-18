import ButtonLink from "../../../../common/components/ButtonLink/ButtonLink";

interface SingleCandidateProps {
  candidate: {
    id: number;
    fullname: string;
    position: string;
    offert: string;
  };
}

const SingleCandidate = ({ candidate }: SingleCandidateProps) => {
  return (
    <ButtonLink to="/" className="flex flex-wrap justify-between">
      <p className="flex-1">{candidate.fullname}</p>
      <p className="flex-1">{candidate.position}</p>
      <p className="flex-1">{candidate.offert}</p>
    </ButtonLink>
  );
};

export default SingleCandidate;
