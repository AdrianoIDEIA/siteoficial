import React from 'react';

export const OrbitingSpheres: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-200 rounded-full opacity-20 animate-bounce-slow" />
      <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-ping-slow" />

      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute inset-0 animate-spin-reverse">
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-green-400 rounded-full transform -translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
};

export default OrbitingSpheres;



