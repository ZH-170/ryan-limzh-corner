import React from 'react';

function Header() {
    return (
        <header className="bg-white py-5 px-10 sm:px-20 md:px-40">
            <nav>
                <ul className="flex flex-row-reverse gap-3 sm:gap-5 lg:gap-10 md:gap-8">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;