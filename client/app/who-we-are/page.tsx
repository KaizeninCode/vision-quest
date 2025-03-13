"use client";
import MobileNav from "@/components/MobileNav";
import ScrollingLogos from "@/components/ScrollingLogos";
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const navigate = useRouter();

  const handleLearnMore = () => navigate.push("/what-we-do");
  const handleGetInTouch = () => navigate.push("/contact");

  return (
    <>
      <MobileNav />
      {/* Hero section for the About page */}
      <section className="flex-1 px-8 lg:w-full w-screen min-h-screen bg-[url(/about1.jpg)] bg-cover bg-center flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-8 w-full h-[100%]">
          <div className="p-4 space-y-8 text-white">
            <h1 className="lg:text-6xl text-4xl font-zilla font-bold ">
              Empowering Change{" "}
              <span className="text-orange-600">Together.</span>
            </h1>
            <p className="lg:text-xl text-sm font-vietnam">
              At Vision Quest Consultants, we drive impactful solutions for
              sustainable development across the Global South.
            </p>
          </div>
        </div>
      </section>
      {/* Second section */}
      <section className="flex-1 p-8 lg:my-24 my-8 flex items-center justify-center">
        <div className="flex flex-col items-center lg:justify-center justify-start lg:w-3/5 gap-8 mx-auto">
          <h1 className="lg:text-4xl text-xl font-zilla font-bold lg:text-center">
            Empowering Change Through Evidence-Based Solutions for Humanitarian
            and Development Challenges
          </h1>
          <p className="lg:text-lg font-vietnam">
            At Vision Quest Consultants, we are dedicated to transforming lives
            through strategic insights and innovative appraoches. Our mission is
            to support humanitarian and development actors by providing tailored
            solutions that drive sustainable impact.
          </p>
          <p className="lg:text-lg font-vietnam">
            Established in 2012, Vision Quest is a leading regional research,
            strategy/capacity development advisory firm that provide
            evidence-based solutions for humanitarian and development actors at
            global, regional, national and local levels in the Global south. The
            Vision Quest Head Office is located in Nairobi, Kenya with an
            operational rosecne in twelve (12) other countries - South Sudan,
            Somalia, Ethiopia, Sudan, Uganda, Tanzania, Eritrea, Rwanda, DRC,
            Zambia, Malawi and Djibouti. Most recently, we have established
            liaison offices in West Africa in Ghana, Liberia and Senegal.
          </p>
          <p className="lg:text-lg font-vietnam">
            VQ takes pride in its comprehensive understanding of the development
            sector, encompassing both its historical context and prospective
            advancements. For more than a decade, our teams have engaged in
            various development sectors throughout Africa, implementing a range
            of solutions to enhance capacity and strengthen programs for
            development organizations, national and local governments, private
            sector, and multi-lateral agencies. In summary, we are a nexus
            player, working across different sectors to improve people&apos;s
            lives.
          </p>
          <p className="lg:text-lg font-vietnam">
            <span className="lg:text-xl text-orange-600 italic">Our purpose</span>{" "}
            - To make a lasting difference in the Global South.
          </p>
          <p className="lg:text-lg font-vietnam">
            Creating a lasting difference leads to a better working world, where
            economic growth is both sustainable and inclusive. We are committed
            to continuously improving the quality of all our services by
            investing in our people and fostering innovation. We take pride in
            collaborating with others—from our clients to a wider range of
            stakeholders—leveraging our knowledge, skills, and experience to
            fulfill our purpose and drive positive change.
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
                className="p-2 border border-orange-600 text-orange-600 rounded-lg transition ease-in-out duration-500 cursor-pointer hover:border-orange-600 hover:bg-orange-600 hover:text-white max-lg:bg-orange-600 max-lg:text-white"
                onClick={handleLearnMore}
              >
                Learn More
              </button>
              <button
                className="p-2 border border-orange-600 text-orange-600 rounded-lg transition ease-in-out duration-500 cursor-pointer hover:border-orange-600 hover:bg-orange-600 hover:text-white max-lg:bg-orange-600 max-lg:text-white"
                onClick={handleGetInTouch}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="bg-[url(/about2.jpg)] bg-cover bg-center rounded-lg max-md:hidden" />
        </div>
      </section>
      {/* Achievements */}
      <section className="lg:my-24 my-8 p-8 flex-1">
        <div className="grid lg:grid-cols-2 lg:gap-16 gap-4">
          <h1 className="lg:text-6xl text-2xl font-bold font-zilla">
            Our Achievements in the Global South
          </h1>
          <div className="grid gap-12">
            <p className="lg:text-lg font-vietnam">
              At Vision Quest Consultants, we pride ourselves on delivering
              measurable results. Our evidence-based strategies have transformed
              communities and enhanced capacities across the region.
            </p>
            <div className="grid grid-cols-2">
              <div className="grid">
                <h1 className="lg:text-5xl text-3xl font-bold font-zilla mb-2">75%</h1>
                <p className="lg:text-lg text-sm">
                  of projects successfully met or exceeded their objectives.
                </p>
              </div>
              <div className="grid">
                <h1 className="lg:text-5xl text-3xl font-bold font-zilla mb-2">100%</h1>
                <p className="lg:text-lg text-sm">
                  client satisfaction rate in our recent evaluations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ScrollingLogos />
      </section>
      {/* Contact */}
      <section className="flex-1 p-8 lg:mb-24 mb-8">
        <div className="flex max-lg:flex-col justify-center items-center lg:gap-48 gap-6">
          <div className="space-y-8">
            <h1 className="lg:text-5xl text-2xl font-bold">
              Partner with Vision Quest today.
            </h1>
          </div>
          <div className="space-x-8">
            <button
              className="p-2 lg:border border-stone-500 text-stone-500 rounded-lg transition ease-in-out duration-500 cursor-pointer hover:border-orange-600 hover:bg-orange-600 hover:text-white max-lg:bg-orange-600 max-lg:text-white"
              onClick={handleLearnMore}
            >
              Learn More
            </button>
            <button
              className="p-2 border border-stone-500 text-stone-500 rounded-lg transition ease-in-out duration-500 cursor-pointer hover:border-orange-600 hover:bg-orange-600 hover:text-white max-lg:bg-orange-600 max-lg:text-white"
              onClick={handleGetInTouch}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
