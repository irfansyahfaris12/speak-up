import React from "react";

import { useRepots } from "../hooks/useReports";
import ReportList from "../components/organisms/ReportList";
import { useData } from "../providers/DataProviders";
import FullScreenLoader from "../components/organisms/FullScreenLoader";

function HistoryPage() {
  const { uid } = useData();
  const { loading, report } = useRepots("itc", uid, true);

  if (loading) {
    return <FullScreenLoader />;
  }
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">History Page</h1>
      {!report || report.length === 0 ? (
        <div className="text-gray-500">No reports found.</div>
      ) : (
        <ReportList reports={report} />
      )}
    </div>
  );
}

export default HistoryPage;
