import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image
            src="/logo.png"
            height={77}
            width={128}
            alt="Ninja List"
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <Link href="/about">
        <a>About</a>
      </Link>
      <br />
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
      <br />
    </nav>
  );
};

export default Navbar;
