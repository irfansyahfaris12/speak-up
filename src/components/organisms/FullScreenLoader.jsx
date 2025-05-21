import React from 'react';
import LoadingIndicator from '../molecules/LoadingIndicator';

const FullScreenLoader = () => (
  <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
    <LoadingIndicator />
  </div>
);

export default FullScreenLoader;