import React from "react";
import { useLocation } from "react-router-dom";
import ReportDetailAdmin from "../../components/organisms/ReportDetailAdmin";
import BackButton from "../../components/atoms/BackButton";
import Button from "../../components/atoms/Button";
import { updateStatusReport } from "../../lib/function/report";

const ReportDetailPage = () => {
  const [processing, setProcessing] = React.useState(false);
  const location = useLocation();

  const report = location.state;

  const handleProcess = async () => {
    if (!report?.id || !report?.unit) {
      alert("Data laporan tidak lengkap");
      return;
    }

    setProcessing(true);
    const res = await updateStatusReport(report.id, report.unit);
    setProcessing(false);

    alert(res.message);
    if (res.success) {
      // Optionally refresh data
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Detail Pengaduan</h1>
      <div className="d-flex justify-between mb-4">
        <BackButton />
        <Button onClick={handleProcess}>Proses</Button>
      </div>
      <ReportDetailAdmin report={report} />
    </div>
  );
};

export default ReportDetailPage;
