import React from 'react';

import Navigation from '@/components/modules/Navigation';
import Container from '@/components/atoms/Container';

const AppLayout: React.FC = ({ children }) => {
  return (
    <div className="flex-grow relative">
      <Navigation />

      <Container className="flex-grow">{children}</Container>
    </div>
  );
};

export default AppLayout;
