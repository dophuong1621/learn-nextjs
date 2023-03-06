import React from 'react';
import Link from 'next/link';

export interface AboutPageProps {
}

export default function AboutPage (props: AboutPageProps) {
  return (
    <div>
      About Page <br />
      <Link href="/post">
        Home
      </Link>
    </div>
  );
}
