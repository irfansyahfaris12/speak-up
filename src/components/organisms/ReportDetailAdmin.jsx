import React from "react";
import DetailRow from "../molecules/DetailRow";
import StatusBadge from "../atoms/StatusBadge";

function ReportDetailAdmin({ report }) {
  if (!report) return <div>Data not found</div>;

  return (
    <div className="border p-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{report.title}</h2>
        <StatusBadge status={report.report_status || "Unknown"} />
      </div>
      {/* Image Preview */}
      {report?.file_url && (
        <div className="mb-4">
          <img
            src={report?.file_url}
            alt="Report"
            className="max-w-full h-auto rounded"
          />
        </div>
      )}
      <DetailRow label="Pengadu" value={report.pengadu} />
      <DetailRow label="Kategori" value={report.kategori} />
      <DetailRow label="Unit" value={report.unit} />
      <DetailRow label="Deskripsi" value={report.desc} />
      <DetailRow label="Created At" value={report.created_at} />
      <DetailRow label="Updated At" value={report.updated_at} />
    </div>
  );
}

export default ReportDetailAdmin;
