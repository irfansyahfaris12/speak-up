import React from 'react';

function getColor(status) {
  switch (status.toLowerCase()) {
    case 'waiting':
      return 'bg-yellow-200 text-yellow-800';
    case 'processing':
      return 'bg-blue-200 text-blue-800';
    case 'done':
      return 'bg-green-200 text-green-800';
    default:
      return 'bg-gray-200 text-gray-800';
  }
}

function StatusBadge({ status }) {
  return (
    <span className={`px-2 py-1 rounded text-sm font-medium ${getColor(status)}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
