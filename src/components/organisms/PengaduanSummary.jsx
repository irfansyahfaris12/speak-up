import StatCard from "../atoms/StatCard";
const PengaduanSummary = ({stats}) => {

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <StatCard title="Total" value={stats?.all ?? 0} color="bg-blue-500" />
      <StatCard title="Waiting" value={stats?.waiting ?? 0} color="bg-yellow-500" />
      <StatCard
        title="In Progress"
        value={stats?.processing ?? 0}
        color="bg-orange-500"
      />
      <StatCard title="Done" value={stats?.done ?? 0} color="bg-green-500" />
    </div>
  );
};

export default PengaduanSummary;
