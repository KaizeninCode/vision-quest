import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navlinks = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Our History", href: "/our-history" },
    { name: "Future Projects", href: "/future-projects" },
  ];
  return (
    <nav className="w-full text-stone-600 px-12 py-2 flex justify-between items-center shadow-md rounded-md">
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
        <button className="px-3 py-2 rounded-lg bg-orange-600 border text-white transition ease-in-out duration-700 border-orange-600 hover:text-orange-600 hover:bg-transparent hover:border-orange-600 cursor-pointer">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Header;
