import React from 'react';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';

function Dashboard() {
  return (
    <div>
      <Image src={'/chillar_charcha_dashboard_img.jpeg'} alt='logo' width={1200} height={100} className='p-5 self-center' />
    </div>
  )
}

export default Dashboard;
