import SearchIcon from "../../../common/icons/SearchIcon";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative flex-1">
      <input
        type="text"
        id="search-ofert-input"
        placeholder="Szukaj oferty..."
        value={value}
        onChange={onChange}
        className="p-2 pl-10 pr-2 border rounded-md w-full"
      />
      <label
        htmlFor="search-ofert-input"
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
      >
        <SearchIcon size={16} />
      </label>
    </div>
  );
};

export default SearchBar;
