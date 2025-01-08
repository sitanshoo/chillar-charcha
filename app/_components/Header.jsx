'use client';
import React from 'react';
import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 px-20 flex justify-between items-center border shadow-sm">
      <div className="group">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="transition-transform duration-500 ease-in-out transform group-hover:animate-flip"
        />
      </div>
      {isSignedIn ? (
        <UserButton showName={true} />
      ) : (
        // <Link href="/sign-in">
          <a
              className='block w-full rounded bg-primary px-12 py-3 text-sm 
              font-medium text-white shadow hover:bg-orange-700 focus:outline-none 
              focus:ring active:bg-red-500 sm:w-auto'
              href='/sign-in'
            >
              Sign In / Sign Up
            </a>
        // </Link>
      )}
    </div>
  );
}

export default Header;
