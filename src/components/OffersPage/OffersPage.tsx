import { useState } from "react";
import Card from "../../common/components/Card/Card";
import FormContainer from "../../common/components/Form/FormContainer/FormContainer";
import ListContent from "../../common/components/ListItem/ListContent/ListContent";
import ListHeader from "../../common/components/ListItem/ListHeader/ListHeader";
import ListItem from "../../common/components/ListItem/ListItem";
import { useDebounce } from "../../common/utils/debounce";
import { useGetAllOffertsQuery } from "../../services/api/offerts/offertsApi";
import FiltersPanel from "./FilterPanel/FilterPanel";
import SearchBar from "./SearchBar/SearchBar";

const OffersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [levelFilter, setLevelFilter] = useState("");
  const [contractTypeFilter, setContractTypeFilter] = useState<string[]>([]);
  const [locationFilter, setLocationFilter] = useState("");

  const {
    data: allOfferts,
    isLoading,
    isError,
  } = useGetAllOffertsQuery({
    search: debouncedSearchTerm,
    level: levelFilter,
    contractType: contractTypeFilter,
    location: locationFilter,
  });

  if (isLoading) return <div>Ładowanie ofert...</div>;
  if (isError) return <div>Błąd ładowania ofert!</div>;

  return (
    <Card className="w-3/4 min-w-[350px] mx-auto p-5 mt-5">
      <FormContainer className="flex gap-2 w-full">
        <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <FiltersPanel
          levelFilter={levelFilter}
          setLevelFilter={setLevelFilter}
          contractTypeFilter={contractTypeFilter}
          setContractTypeFilter={setContractTypeFilter}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
        />
      </FormContainer>
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
