import React from 'react';

export const Skeleton = ({ className = '', ...props }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      {...props}
    />
  );
};

export const OfferSkeleton = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <Skeleton className="w-12 h-12 mb-4 mx-auto rounded-full" />
    <Skeleton className="h-4 w-3/4 mb-4 mx-auto" />
    <Skeleton className="h-8 w-32 mx-auto rounded-md" />
  </div>
);

export const FAQSkeleton = () => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-4">
    <div className="px-6 py-4">
      <Skeleton className="h-6 w-3/4" />
    </div>
  </div>
);