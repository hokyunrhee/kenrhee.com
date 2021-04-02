import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`max-w-screen-md w-full px-6 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
