import React from 'react';
import { authOptions } from './api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

import { MainHero } from '@/components/MainHero';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
   <>
   <MainHero />
   <pre>{JSON.stringify(session)}</pre>
   </> 
  )
}
