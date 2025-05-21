import React from 'react';

function Label({ children, className = '' }) {
  return <span className={`font-semibold ${className}`}>{children}</span>;
}

export default Label;
