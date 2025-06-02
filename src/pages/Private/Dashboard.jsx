import React from "react";
import Button from "../../components/atoms/Button";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";
import { signOut } from "firebase/auth";
import { useDashboard } from "../../providers/DashboardProviders";
import PengaduanSummary from "../../components/organisms/PengaduanSummary";
import PengaduanList from "../../components/organisms/PengaduanList";
import { useReportStats } from "../../hooks/useReportStats";
import { useRepots } from "../../hooks/useReports";

function DashboardPage() {
  const unit = "itc";
  const { stats, loading } = useReportStats(unit);
  const { report } = useRepots(unit);

  const { userId } = useDashboard();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login", { replace: true });
  };
  return (
    <div className="p-4">
      <div className="flex justify-between items-start mb-4">
        <h1 className="text-2xl font-bold">Ringkasan Pengaduan</h1>
        <div className="flex flex-col items-end">
          <h6 className="text-sm">Halo, {unit.toUpperCase()}</h6>
          <button
            onClick={handleLogout}
            className="text-blue-600 text-sm underline mt-1 hover:text-blue-800"
          >
            Logout
          </button>
        </div>
      </div>
      <PengaduanSummary stats={stats} />
      <h2 className="text-xl font-semibold mb-2">Daftar Pengaduan</h2>
      <PengaduanList report={report} />
    </div>
  );
}

export default DashboardPage;
