import React from 'react';
import Spinner from '../atoms/Spinner';

const LoadingIndicator = ({ message = 'Loading...' }) => (
  <div className="flex items-center gap-2">
    <Spinner />
    <span>{message}</span>
  </div>
);

export default LoadingIndicator;