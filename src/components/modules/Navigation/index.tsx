import React from 'react';

import Container from '@/components/atoms/Container';
import Link from './Link';

const Navigation = () => {
  return (
    <nav className="py-8 md:py-12 bg-white">
      <Container className="flex justify-between items-center">
        <div />
        <div>
          <Link href="/blog">Blog</Link>
          <Link href="/til">TIL</Link>
          {/* <Link href="/about">About</Link> */}
          <Link href="/">Home</Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
