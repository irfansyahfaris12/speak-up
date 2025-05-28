import SearchInput from "../atoms/SearchInput";
import SelectStatus from "../atoms/SelectStatus";

const FilterPengaduan = ({ search, setSearch, status, setStatus }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 mb-4">
      <div className="flex-1">
        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <SelectStatus value={status} onChange={(e) => setStatus(e.target.value)} />
    </div>
  );
};

export default FilterPengaduan;
