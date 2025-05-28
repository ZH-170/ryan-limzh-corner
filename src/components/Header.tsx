import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-10 mb-10 flex flex-row bg-white px-5 py-2 shadow-2xs shadow-black sm:px-20 md:px-40 lg:px-60">
      <Link href="/" className="text-md flex-2 p-3 sm:text-2xl">
        Ryan&apos;s Corner
      </Link>
      <nav className="flex-5 px-5 py-3">
        <ul className="flex flex-row-reverse gap-3 sm:gap-5 md:gap-8 lg:gap-10">
          <div>
            <Link href="/about">About</Link>
          </div>

          <div>
            <Link href="/project">Project</Link>
          </div>

          <div>
            <Link href="/blog">Blog</Link>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
