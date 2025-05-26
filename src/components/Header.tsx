import React from 'react';
import Link from 'next/link'

function Header() {
    return (
        <header className="bg-white py-5 px-10 sm:px-20 md:px-40">
            <nav>
                <ul className="flex flex-row-reverse gap-3 sm:gap-5 lg:gap-10 md:gap-8">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;