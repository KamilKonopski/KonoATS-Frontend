import ButtonLink from "../../../../common/components/ButtonLink/ButtonLink";
import type { IEditedOffert } from "../../types/editedOffert";

interface SingleEditedOffertProps {
  offert: IEditedOffert;
}

const SingleEditedOffert = ({ offert }: SingleEditedOffertProps) => {
  return (
    <ButtonLink to="/">
      <p className="flex-1 mr-5">{offert.ofertTitle}</p>
      <p className="flex-1 mr-10">{offert.ofertStatus}</p>
      <p className="flex-1">{offert.candidates}</p>
    </ButtonLink>
  );
};

export default SingleEditedOffert;
