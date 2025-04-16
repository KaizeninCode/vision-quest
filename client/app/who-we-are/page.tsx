"use client";
import MobileNav from "@/components/MobileNav";
// import ScrollingLogos from "@/components/ScrollingLogos";
import { useRouter } from "next/navigation";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";

const AboutPage = () => {
  const contactInfo = [
    {
      icon: <MdOutlineMail />,
      name: "Email",
      value: "info@vqconsultants.com",
    },
    {
      icon: <FiPhone />,
      name: "Phone",
      value: "+254735200005",
    },
    {
      icon: <MdOutlineLocationOn />,
      name: "Office",
      value: "Royal Golf Course, Bagamoyo 48",
    },
  ];
  const navigate = useRouter();

  const handleLearnMore = () => navigate.push("/what-we-do");
  const handleGetInTouch = () => navigate.push("/contact");

  return (
    <>
      <MobileNav />
      {/* Hero section for the About page */}
      <section className="flex-1 px-8 lg:w-full w-screen min-h-screen bg-[url(/vq/6.jpg)] bg-cover bg-center flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-8 w-full h-[100%]">
          <div className="p-4 space-y-8 text-white">
            <h1 className="text-6xl font-zilla font-bold ">
              About{" "}
              <span className="text-orange-600">Vision Quest.</span>
            </h1>
            <p className="lg:text-xl text-sm font-vietnam">
              At Vision Quest Consultants, we are dedicated to transforming
              lives through strategic insights and innovative approaches. Our
              mission is to support humanitarian and development actors by
              providing tailored solutions that drive sustainable impact.
            </p>
          </div>
        </div>
      </section>
      {/* Second section */}
      <section className="flex-1 p-8 lg:my-24 my-8 flex items-center justify-center">
        <div className="flex flex-col items-center lg:justify-center justify-start lg:w-3/5 gap-8 mx-auto">
          <h1 className="lg:text-4xl text-xl font-zilla font-bold lg:text-center text-orange-600">
            Empowering Change Through Evidence-Based Solutions for Humanitarian
            and Development Challenges
          </h1>

          <p className="lg:text-lg font-vietnam">
            Established in{" "}
            <span className="text-orange-600 font-bold">2012</span>, Vision
            Quest is a leading regional research, strategy/capacity development
            advisory firm that provides evidence-based solutions for
            humanitarian and development actors at global, regional, national
            and local levels in the Global south. <br />
            <br /> The Vision Quest Head Office is located in{" "}
            <span className="text-orange-600">Nairobi, Kenya</span> with an
            operational rosecne in twelve (12) other countries -{" "}
            <span className="text-orange-600">
              South Sudan, Somalia, Ethiopia, Sudan, Uganda, Tanzania, Eritrea,
              Rwanda, DRC, Zambia, Malawi and Djibouti
            </span>
            . Most recently, we have established liaison offices in West Africa
            in{" "}
            <span className="text-orange-600">Ghana, Liberia and Senegal</span>.
          </p>
          <p className="lg:text-lg font-vietnam">
            VQ takes pride in its comprehensive understanding of the development
            sector, encompassing both its historical context and prospective
            advancements. For{" "}
            <span className="text-orange-600">more than a decade</span>, our
            teams have engaged in various development sectors throughout Africa,
            implementing a range of solutions to enhance capacity and strengthen
            programs for development organizations, national and local
            governments, private sector, and multi-lateral agencies. <br />
            <br />
            In summary,{" "}
            <span className="text-orange-600 font-semibold">
              we are a nexus player
            </span>
            , working across different sectors to improve people&apos;s lives.
          </p>
          <p className="lg:text-lg font-vietnam">
            <span className="lg:text-xl text-orange-600 italic">
              Our purpose
            </span>{" "}
            - To make a lasting difference in the Global South.
          </p>
        </div>
      </section>
      {/* Third Section */}
      <section className="flex-1 p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:p-4 space-y-8 text-black">
            <h1 className="lg:text-6xl text-2xl font-zilla font-bold ">
              Transforming Insights Into{" "}
              <span className="text-orange-600">Impactful Solutions</span>
            </h1>
            <p className="lg:text-xl font-vietnam">
              At Vision Quest Consultants, we equip our clients with actionable
              strategies that drive meaningful change. Our evidence-based
              approach ensures that humanitarian and development efforts are not
              only effective, but also sustainable.
            </p>
            <div className="space-x-8">
              <button
                className="p-2 border border-orange-600  cursor-pointer rounded-md transition duration-700 ease-in-out hover:text-orange-600 hover:bg-white bg-orange-600 text-white"
                onClick={handleLearnMore}
              >
                Learn More
              </button>
              <button
                className="p-2 border border-orange-600  cursor-pointer rounded-md transition duration-700 ease-in-out hover:text-orange-600 hover:bg-white bg-orange-600 text-white"
                onClick={handleGetInTouch}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="bg-[url(/vq/7.png)] bg-cover bg-center rounded-lg max-md:hidden" />
        </div>
      </section>
      {/* Get in Touch */}
      <section className="lg:p-16 p-4 flex-1 grid lg:grid-cols-2 lg:gap-48 gap-4">
        <div className="space-y-8">
          <p>Connect</p>
          <h1 className="lg:text-5xl text-3xl font-zilla font-bold text-orange-600">
            Get In Touch
          </h1>
          <h3 className="lg:text-lg font-vietnam">
            We are here to assist you with any questions or inquiries. Reach out
            to us.
          </h3>
        </div>
        <div className="grid gap-5">
          {contactInfo.map((c, i) => (
            <div key={i} className="flex gap-4 items-center ">
              <div className="p-2 bg-gray-100 rounded-full">{c.icon}</div>
              <div>
                <h1 className="text-lg font-zilla font-bold text-orange-600">
                  {c.name}
                </h1>
                <p className="lg:text-lg font-vietnam">{c.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
