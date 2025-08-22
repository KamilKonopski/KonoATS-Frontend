interface FiltersPanelProps {
  levelFilter: string;
  setLevelFilter: (value: string) => void;
  contractTypeFilter: string[];
  setContractTypeFilter: (value: string[]) => void;
  locationFilter: string;
  setLocationFilter: (value: string) => void;
}

const FiltersPanel = ({
  levelFilter,
  setLevelFilter,
  contractTypeFilter,
  setContractTypeFilter,
  locationFilter,
  setLocationFilter,
}: FiltersPanelProps) => {
  const handleContractTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setContractTypeFilter(selectedValue ? [selectedValue] : []);
  };

  return (
    <div className="flex space-x-4">
      <select
        className="p-2 border rounded-md bg-bg-muted"
        value={levelFilter}
        onChange={(e) => setLevelFilter(e.target.value)}
      >
        <option value="">Poziom</option>
        <option value="Junior">Junior</option>
        <option value="Mid">Mid</option>
        <option value="Senior">Senior</option>
      </select>

      <select
        className="p-2 border rounded-md bg-bg-muted"
        value={contractTypeFilter[0] || ""}
        onChange={handleContractTypeChange}
      >
        <option value="">Typ oferty</option>
        <option value="B2B">B2B</option>
        <option value="UoP">UoP</option>
        <option value="Umowa zlecenie">Umowa zlecenie</option>
      </select>

      <select
        className="p-2 border rounded-md bg-bg-muted"
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
      >
        <option value="">Tryb pracy</option>
        <option value="stacjonarnie">Stacjonarnie</option>
        <option value="zdalnie">Zdalnie</option>
        <option value="hybrydowo">Hybrydowo</option>
      </select>
    </div>
  );
};

export default FiltersPanel;
