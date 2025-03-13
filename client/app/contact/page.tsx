"use client";
import axios from "axios";
import React, { useState } from "react";

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstname":
        setFirstName(value);
        break;
      case "lastname":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhoneNumber(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      const data = {
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      };
      const r = await axios.post("http://localhost:4000/db/add-to-db", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (r.status === 200) {
        alert("Message sent successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex-1 p-8 w-full min-h-screen">
      <div className="grid grid-cols-2 gap-8 w-4/5 mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="mb-8">
            <p className="font-vietnam mb-3 text-stone-500">Get in touch</p>
            <h1 className="font-zilla text-orange-600 font-bold text-6xl">
              Together, we create possibilities
            </h1>
          </div>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col justify-center items-start w-full">
              <input
                type="text"
                name="firstname"
                id="fname"
                className="border-b border-stone-500 w-[100%] p-3 outline-0 font-zilla"
                placeholder="First Name"
                onChange={handleChange}
                value={firstName}
              />
            </div>
            <div className="flex flex-col justify-center items-start w-full">
              <input
                type="text"
                name="lastname"
                id="lname"
                className="border-b border-stone-500 w-[100%] p-3 outline-0 font-zilla"
                placeholder="Last Name"
                onChange={handleChange}
                value={lastName}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-full">
            <input
              type="email"
              name="email"
              id="email"
              className="border-b border-stone-500 w-[100%] p-3 outline-0 font-zilla"
              placeholder="email@example.com"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="flex flex-col justify-center items-start w-full">
            <input
              type="text"
              name="phone"
              id="phone"
              className="border-b border-stone-500 w-[100%] p-3 outline-0 font-zilla"
              placeholder="+1-234-567890"
              onChange={handleChange}
              value={phoneNumber}
            />
          </div>
          <div className="flex flex-col justify-center items-start w-full">
            <textarea
              name="message"
              id="message"
              className="border-b border-stone-500 w-[100%] p-3 outline-0 font-zilla"
              placeholder="Your message here"
              onChange={handleChange}
              value={message}
            />
          </div>
          <button
            type="submit"
            className="font-zilla p-2 rounded-lg bg-orange-600 border border-orange-600 text-white transition duration-700 ease-in-out hover:bg-white hover:text-orange-600 hover:cursor-pointer"
          >
            Send Message
          </button>
        </form>
        <div className="grid grid-rows-16 grid-cols-8 gap-5">
          <div className="bg-[url(/contact1.jpg)] bg-cover bg-center row-span-8 col-span-5 rounded-xl transition duration-1000 hover:scale-101" />
          <div className="bg-[url(/contact2.jpg)] bg-cover bg-center row-span-8 col-span-3 rounded-xl transition duration-1000 hover:scale-101" />
          <div className="bg-[url(/contact3.jpg)] bg-cover bg-center row-span-8 row-start-9 col-span-3 rounded-xl transition duration-1000 hover:scale-101" />
          <div className="bg-[url(/contact4.jpg)] bg-cover bg-center row-span-8 row-start-9 col-span-5 rounded-xl transition duration-1000 hover:scale-101" />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
