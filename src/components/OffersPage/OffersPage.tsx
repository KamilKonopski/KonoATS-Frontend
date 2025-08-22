import Card from "../../common/components/Card/Card";
import ListContent from "../../common/components/ListItem/ListContent/ListContent";
import ListHeader from "../../common/components/ListItem/ListHeader/ListHeader";

import ListItem from "../../common/components/ListItem/ListItem";
import { useGetAllOffertsQuery } from "../../services/api/offerts/offertsApi";

const OffersPage = () => {
  const { data: allOfferts } = useGetAllOffertsQuery();
  return (
    <Card className="w-3/4 min-w-[350px] mx-auto p-5">
      <ListItem>
        <ListHeader
          columns={[
            "Nazwa oferty",
            "Poziom",
            "Status oferty",
            "Data utworzenia",
            "Liczba kandydatów",
          ]}
        />
        {allOfferts?.map((offert) => (
          <ListContent key={offert.id} to="/">
            <p className="flex-1 text-center">{offert.title}</p>
            <p className="flex-1 text-center">{offert.level}</p>
            <p className="flex-1 text-center">{offert.status}</p>
            <p className="flex-1 text-center">{offert.createdAt}</p>
            <p className="flex-1 text-center">{offert.candidates.length}</p>
          </ListContent>
        ))}
      </ListItem>
    </Card>
  );
};

export default OffersPage;
