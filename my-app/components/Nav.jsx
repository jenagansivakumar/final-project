"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProdivers } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/tuneforge-logo.png"
          width={100}
          height={100}
          alt="TuneForge Logo"
          className="object-contain"
        />
        <p className="logo_text">TuneForge</p>
      </Link>

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-melody" className="black_btn">
              Create Melody
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile" className="flex gap-2 flex-center">
              <Image
                src="/assets/images/jenagan.png "
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile Picture"
              />
              <p className="logo_text">Profile</p>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
