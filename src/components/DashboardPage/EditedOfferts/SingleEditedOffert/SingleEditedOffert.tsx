import ButtonLink from "../../../../common/components/ButtonLink/ButtonLink";
import type { IEditedOffert } from "../../types/editedOffert";

interface SingleEditedOffertProps {
  offert: IEditedOffert;
}

const SingleEditedOffert = ({ offert }: SingleEditedOffertProps) => {
  return (
    <ButtonLink to="/" className="border-b-2 border-primary py-4">
      <p className="flex-1 text-center">{offert.ofertTitle}</p>
      <p className="flex-1 text-center">{offert.ofertStatus}</p>
      <p className="flex-1 text-center">{offert.candidates}</p>
    </ButtonLink>
  );
};

export default SingleEditedOffert;
