import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404Page = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center p-4 overflow-hidden relative font-sans">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-surface/50 rounded-full blur-[100px]" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Text with Gradient and Shadow */}
        <h1 className="text-[120px] md:text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark leading-none select-none drop-shadow-[0_0_25px_rgba(16,185,129,0.3)] animate-bounce">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Oops! You've stumbled on a wrong path. The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Home Button */}
        <button
          onClick={() => navigate('/')}
          className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-brand rounded-full hover:bg-brand-dark hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand focus:ring-offset-navy-deep cursor-pointer"
        >
          <span className="mr-2">Back to Home</span>
          <svg 
            className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Error404Page;