import ButtonLink from "../../../common/components/ButtonLink/ButtonLink";
import Card from "../../../common/components/Card/Card";
import Table from "../../../common/components/Table/Table";
import { Paths } from "../../../common/constants/paths";
import { useGetRecentlyUpdatedOffertsQuery } from "../../../services/api/offerts/offertsApi";
import type { IEditedOffert } from "../types/editedOffert";
import SingleEditedOffert from "./SingleEditedOffert/SingleEditedOffert";

const EditedOfferts = () => {
  const { data: recentlyUpdatedOfferts } = useGetRecentlyUpdatedOffertsQuery(3);

  const editedOfferts: IEditedOffert[] =
    recentlyUpdatedOfferts?.map((offert) => ({
      id: offert.id,
      ofertTitle: offert.title,
      ofertStatus: offert.status,
      candidates: offert.candidates.length,
    })) ?? [];

  return (
    <Card className="p-5 min-w-[350px]">
      <h2 className="text-3xl font-bold">Ostatnio edytowane oferty</h2>
      <Table>
        <div className="flex flex-wrap text-text-muted border-b-2 pb-2 border-primary">
          <p className="flex-1 text-center">Nazwa</p>
          <p className="flex-1 text-center">Stasus</p>
          <p className="flex-1 text-center">Kandydaci</p>
        </div>
        {editedOfferts.map((offert) => (
          <SingleEditedOffert key={offert.id} offert={offert} />
        ))}
      </Table>
      <ButtonLink className="rounded-md" to={Paths.OFFERS}>
        Pokaż wszystkie oferty
      </ButtonLink>
    </Card>
  );
};

export default EditedOfferts;
