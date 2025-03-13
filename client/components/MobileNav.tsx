"use client";
import React from "react";
import Link from "next/link";

const MobileNav = () => {
    const toggleMenu = () => {
        const menu = document.getElementById('menu');
        menu?.classList.toggle('hidden');
    }

  const navlinks = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Our History", href: "/our-history" },
    { name: "Future Projects", href: "/future-projects" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="w-screen p-8 flex justify-between items-center lg:hidden absolute">
      <div className="font-zilla font-extrabold text-stone-500 text-xl">
        Vision <span className="text-orange-600">Quest</span>{" "}
      </div>
      {/* add icon here */}
      <div className="text-stone-500" onClick={toggleMenu}> &#9776;</div>
      {/* menu overlay */}
      <div id='menu' className="transition duration-700 ease-in-out hidden absolute right-0 top-0 p-4 bg-stone-200 rounded-lg shadow-lg w-1/2 h-fit mt-16 mr-8">
        <ul className="flex flex-col gap-4">
          {navlinks.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="hover:text-orange-600 transition ease-in-out duration-700 text-orange-600 text-sm"
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
