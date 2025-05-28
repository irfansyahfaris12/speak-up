const SelectStatus = ({ value, onChange }) => (
  <select value={value} onChange={onChange} className="border px-3 py-2 rounded">
    <option value="">All</option>
    <option value="waiting">Waiting</option>
    <option value="processing">In Progress</option>
    <option value="done">Done</option>
  </select>
);

export default SelectStatus;
