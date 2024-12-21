import React from 'react';
import 'animate.css';
import Link from 'next/link';

const RightSection = () => {
  const buttonsData = [
    {
      index: 1,
      src: './github.svg',
      content: 'Sign in With Github',
    },
    {
      index: 2,
      src: './bitbucket.svg',
      content: 'Sign in With Bitbucket',
    },
    {
      index: 3,
      src: './azure.svg',
      content: 'Sign in With Azure DevOps',
    },
    {
      index: 4,
      src: './gitlab.svg',
      content: 'Sign in With Gitlab',
    },
  ];

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center py-6 animate__animated animate__zoomIn">
  <div className="max-w-[95%] sm:max-w-[50%] lg:max-w-[70%] bg-white border rounded-lg flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-2">
    {/* Logo and Welcome Text */}
    <div className="text-center mb-8">
      <Link href="/" className="flex items-center justify-center gap-2 mb-4">
        <img
          src="./siddenav-logo.svg"
          alt="logo"
          className="h-8 w-8"
        />
        <span className="text-2xl sm:text-3xl lg:text-4xl font-thin">CodeAnt AI</span>
      </Link>
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
        Welcome to CodeAnt AI
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
        <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 px-4 sm:px-8 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
          <span className="text-gray-500">SAAS</span>
        </button>
        <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 text-white px-4 sm:px-10 py-2.5 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
          Self Hosted
        </button>
      </div>
    </div>

    {/* Divider */}
    <div className="w-full h-[0.5px] bg-gray-300 mb-8"></div>

    {/* Sign-in Buttons */}
    <div className="flex flex-wrap gap-4 justify-center">
      {buttonsData.map((item) => (
        <button
          key={item.index}
          className="flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 px-6 sm:px-12 lg:px-16 xl:px-24 py-2.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
        >
          <img src={item.src} alt="button Logo" className="h-5 w-5" />
          <span>{item.content}</span>
        </button>
      ))}
    </div>

    {/* Privacy Policy */}
    <p className="text-center text-sm text-gray-500 mt-8">
      By signing up you agree to the{' '}
      <a href="#" className="text-black font-semibold">
        Privacy Policy
      </a>
    </p>
  </div>
</div>

  );
};

export default RightSection;
