import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const quicklinks = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Our History", href: "/our-history" },
    { name: "Future Projects", href: "/future-projects" },
    { name: "Contact Us", href: "/contact" },
  ];
  return (
    <footer className="grid lg:grid-cols-2 gap-8 py-6 px-12 shadow-lg bg-stone-200">
      <div className="grid gap-4">
        <div className="flex max-lg:flex-col gap-5 items-center justify-center text-stone-500">
          <Image
            src={"/logo.png"}
            alt="Vision Quest Consultants Logo"
            width={150}
            height={1000}
          />
          <div className="font-vietnam max-lg:text-sm px-1">
            <p>
              PO Box 45803 - 00100
            </p>
              <p>Royal Golf Course, Bagamoyo 48</p>
          </div>
          <div className="font-vietnam max-lg:text-sm">
            <p> Mobile: +254735200005</p>
            <p>Email: info@vqconsultants.com</p>
          </div>
        </div>
        <div>
          <p className="max-lg:text-sm font-zilla text-stone-500 max-lg:text-center">
            &copy; Copyright Quest Vision Consultants 2025. All Rights Reserved
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mx-auto">
        <div className="flex flex-col lg:gap-5 gap-2 items-start justify-center font-vietnam text-md">
          <h3 className="uppercase font-extrabold text-orange-600 font-zilla">
            Quick Links
          </h3>
          {quicklinks.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="hover:text-orange-600 transition ease-in-out duration-700 max-lg:text-sm text-stone-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="max-md:hidden flex flex-col items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.6610632541869!2d36.79956323254112!3d-1.306204606162004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f108c51521335%3A0xa7ac2f923b996b0c!2sGolf%20Course%20Estate%201!5e0!3m2!1sen!2ske!4v1741726789721!5m2!1sen!2ske"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
