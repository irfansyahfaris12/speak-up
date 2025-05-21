import React from 'react';
import Text from '../atoms/Text';
import StatusBadge from '../atoms/StatusBadge';

function ReportCard({ report, onClick }) {
  return (
    <div className="border p-4 rounded shadow mb-3" onClick={onClick}>
      <div className="flex justify-between items-center">
        <Text className="font-bold text-lg">{report.title}</Text>
        <StatusBadge status={report.report_status || 'Unknown'} />
      </div>
      <Text className="text-sm text-gray-600">Pengadu: {report.pengadu}</Text>
      <Text className="text-sm text-gray-600">Kategori: {report.kategori}</Text>
      <Text className="text-sm text-gray-600">Unit: {report.unit}</Text>
      <Text className="mt-2">{report.desc}</Text>
    </div>
  );
}

export default ReportCard;
