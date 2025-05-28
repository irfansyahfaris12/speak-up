import StatCard from "../atoms/StatCard";
const PengaduanSummary = ({stats}) => {

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <StatCard title="Total" value={stats?.all} color="bg-blue-500" />
      <StatCard title="Waiting" value={stats?.waiting} color="bg-yellow-500" />
      <StatCard
        title="In Progress"
        value={stats?.processing}
        color="bg-orange-500"
      />
      <StatCard title="Done" value={stats?.done} color="bg-green-500" />
    </div>
  );
};

export default PengaduanSummary;
