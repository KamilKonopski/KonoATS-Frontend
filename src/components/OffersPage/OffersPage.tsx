import { useState } from "react";
import Card from "../../common/components/Card/Card";
import ListContent from "../../common/components/ListItem/ListContent/ListContent";
import ListHeader from "../../common/components/ListItem/ListHeader/ListHeader";

import ListItem from "../../common/components/ListItem/ListItem";
import { useDebounce } from "../../common/utils/debounce";
import { useGetAllOffertsQuery } from "../../services/api/offerts/offertsApi";
import SearchBar from "./SearchBar/SearchBar";

const OffersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const { data: allOfferts } = useGetAllOffertsQuery({ search: debouncedSearchTerm });
  return (
    <Card className="w-3/4 min-w-[350px] mx-auto p-5">
      <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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
