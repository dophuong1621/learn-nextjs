import { useRouter } from 'next/router';
import * as React from 'react';

export interface IAppProps {
}

export default function App (props: IAppProps) {
    const router = useRouter();
    console.log(router)
  return (
    <div>
      
    </div>
  );
}
