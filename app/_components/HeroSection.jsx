'use client'
import Image from 'next/image';
import React from 'react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';


function HeroSection() {
  const { user, isSignedIn } = useUser();
  return (
    <section className='bg-gray-50 flex flex-col items-center'>
      <div
        className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen 
      lg:items-center'
      >
        <div className='mx-auto max-w-xl text-center'>
          <h1 className='text-3xl font-extrabold sm:text-5xl'>
            Manage Your Expense
            <strong className='font-extrabold text-primary sm:block'>
              Control your Money
            </strong>
          </h1>

          <p className='mt-4 sm:text-xl/relaxed'>
            Start creating your budget and save ton of money!
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            {isSignedIn ? <a
              className='block w-full rounded bg-primary px-12 py-3 text-sm 
              font-medium text-white shadow hover:bg-orange-700 focus:outline-none 
              focus:ring active:bg-red-500 sm:w-auto'
              href='/dashboard'
            >
             Your Dashboard
            </a> : <a
              className='block w-full rounded bg-primary px-12 py-3 text-sm 
              font-medium text-white shadow hover:bg-orange-700 focus:outline-none 
              focus:ring active:bg-red-500 sm:w-auto'
              href='/sign-in'
            >
              Get Started
            </a>}
          </div>
        </div>
      </div>
      <Image src={'/chillar_charcha_dashboard_img.jpeg'} alt='dashboard image' width={1600} height={200} />
    </section>
  );
}

export default HeroSection;
