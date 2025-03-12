import ScrollingLogos from "@/components/ScrollingLogos";
import React from "react";

const AboutPage = () => {
  return (
    <>
      {/* Hero section for the About page */}
      <section className="flex-1 px-8 w-full h-screen bg-[url(/about1.jpg)] bg-cover bg-center flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8 w-full h-fit">
          <div className="p-4 space-y-8 text-white">
            <h1 className="text-6xl font-zilla font-bold ">
              Empowering Change{" "}
              <span className="text-orange-600">Together.</span>
            </h1>
            <p className="text-xl font-vietnam">
              At Vision Quest Consultants, we drive impactful solutions for
              sustainable development across the Global South.
            </p>
          </div>
        </div>
      </section>
      {/* Second section */}
      <section className="flex-1 p-8 my-24 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-3/5 gap-8 mx-auto">
          <h1 className="text-4xl font-zilla font-bold text-center">
            Empowering Change Through Evidence-Based Solutions for Humanitarian
            and Development Challenges
          </h1>
          <p className="text-lg font-vietnam">
            At Vision Quest Consultants, we are dedicated to transforming lives
            through strategic insights and innovative appraoches. Our mission is
            to support humanitarian and development actors by providing tailored
            solutions that drive sustainable impact.
          </p>
          <p className="text-lg font-vietnam">
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
          <p className="text-lg font-vietnam">
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
          <p className="text-lg font-vietnam">
            <span className="text-xl text-orange-600 italic">Our purpose</span>{" "}
            - To make a lasting difference in the Global South.
          </p>
          <p className="text-lg font-vietnam">
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
        <div className="grid grid-cols-2 gap-8">
          <div className="p-4 space-y-8 text-black">
            <h1 className="text-6xl font-zilla font-bold ">
              Transforming Insights Into{" "}
              <span className="text-orange-600">Impactful Solutions</span>
            </h1>
            <p className="text-xl font-vietnam">
              At Vision Quest Consultants, we equip our clients with actionable
              strategies that drive meaningful change. Our evidence-based
              approach ensures that humanitarian and development efforts are not
              only effective, but also sustainable.
            </p>
            <div className="space-x-8">
              <button className="p-2 border border-orange-600 text-orange-600 rounded-lg transition ease-in-out duration-500 cursor-pointer hover:border-orange-600 hover:bg-orange-600 hover:text-white">
                Learn More
              </button>
              <button className="p-2 border border-orange-600 text-orange-600 rounded-lg transition ease-in-out duration-500 cursor-pointer hover:border-orange-600 hover:bg-orange-600 hover:text-white">
                Get In Touch With Us
              </button>
            </div>
          </div>
          <div className="bg-[url(/about2.jpg)] bg-cover bg-center rounded-lg" />
        </div>
      </section>
      {/* Achievements */}
      <section className="my-24 p-8 flex-1">
        <div className="grid grid-cols-2 gap-16">
          <h1 className="text-6xl font-bold font-zilla">
            Our Achievements in the Global South
          </h1>
          <div className="grid gap-12">
            <p className="text-lg font-vietnam">
              At Vision Quest Consultants, we pride ourselves on delivering
              measurable results. Our evidence-based strategies have transformed
              communities and enhanced capacities across the region.
            </p>
            <div className="grid grid-cols-2">
              <div className="grid">
                <h1 className="text-5xl font-bold font-zilla mb-2">75%</h1>
                <p className="text-lg">
                  of projects successfully met or exceeded their objectives.
                </p>
              </div>
              <div className="grid">
                <h1 className="text-5xl font-bold font-zilla mb-2">100%</h1>
                <p className="text-lg">
                  client satisfaction rate in our recent evaluations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ScrollingLogos />
      </section>
      {/* Contact */}
      <section className="flex-1 p-8 mb-24">
        <div className="flex justify-center items-center gap-48">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold">
              Partner with Vision Quest today.
            </h1>
            {/* <p className="text-lg">Discover how we can support your mission.</p> */}
          </div>
          <div className="space-x-8">
            <button className="p-2 border border-stone-500 text-stone-500 rounded-lg transition ease-in-out duration-500 cursor-pointer hover:border-orange-600 hover:bg-orange-600 hover:text-white">
              Learn More
            </button>
            <button className="p-2 border border-stone-500 text-stone-500 rounded-lg transition ease-in-out duration-500 cursor-pointer hover:border-orange-600 hover:bg-orange-600 hover:text-white">
              Get In Touch With Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
