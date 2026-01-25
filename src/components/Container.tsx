import React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps ) => {
  return (
    <div className="flex justify-center">
      <div className={clsx("w-full max-w-7xl mx-auto px-6 lg:px-8", className)}>
        {children}
      </div>
    </div>
  )
}

export default Container;
