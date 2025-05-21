import React from "react";
import { useLocation } from "react-router-dom";
import ReportDetail from "../components/organisms/ReportDetail";
import BackButton from "../components/atoms/BackButton";

function HistoryDetailPage() {
  const location = useLocation();

  const report = location.state;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Detail Laporan</h1>
       <BackButton />
      <ReportDetail report={report} />
    </div>
  );
}

export default HistoryDetailPage;
