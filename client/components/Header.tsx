"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const navigate = useRouter();

  const navlinks = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Our Values and Principles", href: "/values-and-principles" },
    { name: "Our History", href: "/our-history" },
    { name: "Future Focus", href: "/future-focus" },
  ];

  const handleClick = () => navigate.push("/contact");

  return (
    <nav className="max-lg:hidden w-full text-stone-600 px-12 py-2 flex justify-between items-center shadow-md rounded-md">
      <Image
        src={"/logo.png"}
        alt="Vision Quest Consultants Logo"
        width={100}
        height={1000}
        className="border"
      />
      <div className="text-xl font-zilla">
        {navlinks.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className="mx-6 hover:text-orange-600 transition ease-in-out duration-700"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <button
          className="px-3 py-2 rounded-lg bg-orange-600 border text-white transition ease-in-out duration-700 border-orange-600 hover:text-orange-600 hover:bg-transparent hover:border-orange-600 cursor-pointer"
          onClick={handleClick}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Header;
