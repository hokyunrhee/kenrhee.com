import React from 'react';

import { useRouter } from 'next/router';
import NextLink from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<Props> = ({ href, children }) => {
  const router = useRouter();

  return (
    <NextLink href={href}>
      <a
        className={`p-1 sm:p-4 ${
          href === router.pathname ? 'text-gray-700' : 'text-gray-400'
        }`}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
