'use client';

import {useEffect} from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = 'http://101.79.11.238:42110/';
  }, []);
  return <h1>Redirecting...</h1>;
}
