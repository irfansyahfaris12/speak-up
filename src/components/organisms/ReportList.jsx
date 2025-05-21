import React from "react";
import ReportCard from "../molecules/ReportCard";
import { useNavigate } from "react-router-dom";

function ReportList({ reports }) {
  const navigate = useNavigate();
  return (
    <div>
      {reports?.map((report) => (
        <ReportCard
          key={report.id}
          report={report}
          onClick={() => navigate(`/history/${report.id}`, { state: report })}
        />
      ))}
    </div>
  );
}

export default ReportList;
