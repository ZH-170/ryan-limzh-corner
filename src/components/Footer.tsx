import Link from "next/link";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="mt-10 flex h-80 flex-col gap-5 bg-white p-10 inset-shadow-2xs inset-shadow-black md:h-50 md:flex-row md:gap-20 md:px-20 lg:px-30">
      <div className="flex flex-col items-center justify-center md:flex-1">
        <Image
          src="/envelope-regular.svg"
          className="w-10"
          alt="An envelope icon"
          width={10}
          height={10}
        />
        <p>zihenglim0710@gmail.com</p>
      </div>
      <div className="items-left flex flex-col justify-center gap-3 sm:items-center md:flex-2 md:flex-row md:gap-10">
        <Link href="https://www.instagram.com/ryan_zihenglim/" target="_blank">
          <div className="flex flex-row items-center gap-3 md:flex-col md:gap-1">
            <Image
              src="/square-instagram-brands.svg"
              className="w-7"
              alt="An Instagram icon"
              width={7}
              height={7}
            />
            <p>ryan_zihenglim</p>
          </div>
        </Link>
        <Link href="https://www.facebook.com/zi.h.lim" target="_blank">
          <div className="flex flex-row items-center gap-3 md:flex-col md:gap-1">
            <Image
              src="/square-facebook-brands.svg"
              className="w-7"
              alt="A Facebook icon"
              width={7}
              height={7}
            />
            <p>Lim Zi Heng</p>
          </div>
        </Link>
        <Link href="https://github.com/ZH-170" target="_blank">
          <div className="flex flex-row items-center gap-3 md:flex-col md:gap-1">
            <Image
              src="/square-github-brands.svg"
              className="w-7"
              alt="A Github icon"
              width={7}
              height={7}
            />
            <p>ZH-170</p>
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/zi-heng-lim-91978135a/"
          target="_blank"
        >
          <div className="flex flex-row items-center gap-3 md:flex-col md:gap-1">
            <Image
              src="/linkedin-brands.svg"
              className="w-7"
              alt="A LinkedIn icon"
              width={7}
              height={7}
            />
            <p>Lim Zi Heng</p>
          </div>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
