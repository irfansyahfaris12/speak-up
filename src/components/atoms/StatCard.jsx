const StatCard = ({ title, value, color }) => {
  return (
    <div className={`p-4 rounded shadow text-white ${color}`}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;
