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
  const unit = "cimb"
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
      <h1 className="text-2xl font-bold mb-4">Ringkasan Pengaduan</h1>
      <PengaduanSummary stats={stats} />
      <h2 className="text-xl font-semibold mb-2">Daftar Pengaduan</h2>
      <PengaduanList report={report} />
    </div>
  );
}

export default DashboardPage;
