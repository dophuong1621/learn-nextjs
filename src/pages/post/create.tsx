import * as React from 'react';
import Link from 'next/link';

export interface PostCreatePageProps {
}

export default function PostCreatePage(props: PostCreatePageProps) {
  return (
    <div>
      Create Post Page
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
