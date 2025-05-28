const SearchInput = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search by title..."
    value={value}
    onChange={onChange}
    className="border px-3 py-2 rounded w-full"
  />
);

export default SearchInput;
