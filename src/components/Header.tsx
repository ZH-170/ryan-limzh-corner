import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-white px-10 py-2 sm:px-20 md:px-40 lg:px-60 xl:px-80 flex flex-row shadow-2xs shadow-black">
      <Link href="/" className="flex-2 text-md sm:text-2xl p-3">Ryan&apos;s Corner</Link>
      <nav className="py-3 px-5 flex-5">
        <ul className="flex flex-row-reverse gap-3 sm:gap-5 md:gap-8 lg:gap-10">
          
            <div><Link href="/about">About</Link></div>
          
            <div><Link href="/project">Project</Link></div>
          
          
            <div><Link href="/blog">Blog</Link></div>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
