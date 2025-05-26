import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-white px-10 py-5 sm:px-20 md:px-40 flex flex-row">
      <Link href="/" className="flex-1 text-2xl">Ryan&apos;s Corner</Link>
      <nav className="flex-5">
        <ul className="flex flex-row-reverse gap-3 sm:gap-5 md:gap-8 lg:gap-10">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
