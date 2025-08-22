import ButtonLink from "../../../common/components/ButtonLink/ButtonLink";
import Card from "../../../common/components/Card/Card";
import ListHeader from "../../../common/components/ListItem/ListHeader/ListHeader";
import ListItem from "../../../common/components/ListItem/ListItem";
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
      <ListItem>
        <ListHeader columns={["Nazwa", "Stasus", "Kandydaci"]} />
        {editedOfferts.map((offert) => (
          <SingleEditedOffert key={offert.id} offert={offert} />
        ))}
      </ListItem>
      <ButtonLink className="rounded-md px-4 py-2" to={Paths.OFFERS}>
        Pokaż wszystkie oferty
      </ButtonLink>
    </Card>
  );
};

export default EditedOfferts;
