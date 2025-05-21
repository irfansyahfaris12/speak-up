import React from 'react';
import Label from '../atoms/Label';
import Text from '../atoms/Text';

function DetailRow({ label, value }) {
  return (
    <div className="mb-2">
      <Label>{label}: </Label>
      <Text className="inline">{value}</Text>
    </div>
  );
}

export default DetailRow;
