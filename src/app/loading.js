import React from 'react';

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-300 z-50">
      <div className="h-2 bg-primary animate-loading w-2/5"></div>
    </div>
  );
}
