import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse space-y-6 w-full max-w-3xl px-4">
        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
        </div>
        <div className="flex gap-4 justify-center mt-8">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;