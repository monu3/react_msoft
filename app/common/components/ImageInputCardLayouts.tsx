import React, { useState } from 'react';

interface CardLayoutProps {
  children: React.ReactNode;
}

interface CardContainerProps {
  title: string;
  children: React.ReactNode;
}

interface CardImageProps {
  src: string;
  alt: string;
}

interface CardInputFileProps {
  onFileSelect: (file: File) => void;
  accept?: string;
}

const CardInputFile: React.FC<CardInputFileProps> = ({ onFileSelect, accept = "image/*" }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <label className="flex flex-col items-center justify-center w-full h-10 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {/* <Upload className="w-10 h-5 mb-3 text-gray-400" /> */}
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Choose file here</span>
          </p>
        </div>
        <input
          type="file"
          className="hidden"
          accept={accept}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onFileSelect(file);
          }}
        />
      </label>
    </div>
  );
};

const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
  return (
    <div className="w-full flex justify-center">
      <img 
        src={src} 
        alt={alt} 
        className="h-20 w-auto object-contain"
      />
    </div>
  );
};

const CardContainer: React.FC<CardContainerProps> = ({ title, children }) => {
  return (
    <div className="max-w-4xl p-6 bg-white rounded-lg shadow">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
};

const CardLayout: React.FC<CardLayoutProps> = ({ children }) => {
  return (
    <div className="flex mb-8">
      <main className="w-50% max-w-4xl mx-auto">{children}</main>
    </div>
  );
};

export {CardContainer,CardLayout,CardImage,CardInputFile}

