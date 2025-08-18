import ButtonLink from "../../../common/components/ButtonLink/ButtonLink";
import Card from "../../../common/components/Card/Card";
import Table from "../../../common/components/Table/Table";
import { Paths } from "../../../common/constants/paths";
import type { IEditedOffert } from "../types/editedOffert";
import SingleEditedOffert from "./SingleEditedOffert/SingleEditedOffert";

const EditedOfferts = () => {
  const editedOfferts: IEditedOffert[] = [
    { id: 1, ofertTitle: "Graphic Designer", ofertStatus: "Otwarta", candidates: 12 },
    { id: 2, ofertTitle: "Software Engineer", ofertStatus: "Wstrzymana", candidates: 8 },
    { id: 3, ofertTitle: "Frontend Developer", ofertStatus: "Zakończona", candidates: 5 },
  ];
  return (
    <Card className="p-5 min-w-[350px]">
      <h2 className="text-3xl font-bold">Ostatnio edytowane oferty</h2>
      <Table>
        <div className="flex flex-wrap justify-between text-text-muted border-b-2 pb-2 border-primary">
          <p className="flex-1">Nazwa</p>
          <p className="flex-1">Stasus</p>
          <p className="flex-1">Kandydaci</p>
        </div>
        {editedOfferts.map((offert) => (
          <SingleEditedOffert key={offert.id} offert={offert} />
        ))}
      </Table>
      <ButtonLink to={Paths.OFFERS}>Pokaż wszystkie oferty</ButtonLink>
    </Card>
  );
};

export default EditedOfferts;
