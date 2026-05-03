"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.jpg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const links = (
    <>
      <li>
        <Link
          href={"/"}
          className={`pb-2 font-semibold ${pathname === "/" ? "text-[#2e3c8f] border-b-2 border-[#2e3c8f]" : ""}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/courses"}
          className={`pb-2 font-semibold ${pathname === "/courses" ? "text-[#2e3c8f] border-b-2 border-[#2e3c8f]" : ""}`}
        >
          Courses
        </Link>
      </li>
      <li>
        <Link
          href={"/profile"}
          className={`pb-2 font-semibold ${pathname === "/profile" ? "text-[#2e3c8f] border-b-2 border-[#2e3c8f]" : ""}`}
        >
          My Profile
        </Link>
      </li>
    </>
  );
const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex gap-2 items-center">
            <Image
              src={logo}
              alt="logo"
              loading="eager"
              width={30}
              height={30}
              className="object-cover h-auto w-auto"
            />
            <h3 className="font-black text-xl text-[#2e3c8f]">SkillSphere</h3>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{links}</ul>
        <div className="flex gap-4">
          <ul className="text-lg bg-[#2e3c8f] text-white px-4 py-3 rounded-lg">
            <li>
              <Link href={"/auth/login"}>Login / Register</Link>
            </li>   
          </ul>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{links}</ul>
        </div>
      )}
    </nav>
  );
  
};

export default Navbar;





