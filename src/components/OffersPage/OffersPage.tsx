import ButtonLink from "../../common/components/ButtonLink/ButtonLink";
import Card from "../../common/components/Card/Card";
import Table from "../../common/components/Table/Table";
import { useGetAllOffertsQuery } from "../../services/api/offerts/offertsApi";

const OffersPage = () => {
  const { data: allOfferts } = useGetAllOffertsQuery();
  return (
    <Card className="w-3/4 min-w-[350px] mx-auto p-5">
      <Table>
        <div className="flex pb-2 pl-4 pr-8 text-text-muted border-b-2 border-primary">
          <p className="flex-1 text-center">Nazwa oferty</p>
          <p className="flex-1 text-center">Poziom</p>
          <p className="flex-1 text-center"> Status oferty</p>
          <p className="flex-1 text-center">Data utworzenia</p>
          <p className="flex-1 text-center">Liczba kandydatów</p>
        </div>
        {allOfferts?.map((offert) => (
          <ButtonLink to="/" className="border-b-2 border-primary py-4">
            <p className="flex-1 text-center">{offert.title}</p>
            <p className="flex-1 text-center">{offert.level}</p>
            <p className="flex-1 text-center">{offert.status}</p>
            <p className="flex-1 text-center">{offert.createdAt}</p>
            <p className="flex-1 text-center">{offert.candidates.length}</p>
          </ButtonLink>
        ))}
      </Table>
    </Card>
  );
};

export default OffersPage;
