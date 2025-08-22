import ListContent from "../../../../common/components/ListItem/ListContent/ListContent";
import type { IEditedOffert } from "../../types/editedOffert";

interface SingleEditedOffertProps {
  offert: IEditedOffert;
}

const SingleEditedOffert = ({ offert }: SingleEditedOffertProps) => {
  return (
    <ListContent to="/">
      <p className="flex-1 text-center">{offert.ofertTitle}</p>
      <p className="flex-1 text-center">{offert.ofertStatus}</p>
      <p className="flex-1 text-center">{offert.candidates}</p>
    </ListContent>
  );
};

export default SingleEditedOffert;
