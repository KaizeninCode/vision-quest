import MobileNav from "@/components/MobileNav";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";

const FutureProjectsPage = () => {
  const changesList = [
    {
      title: "Structural transformation",
      description:
        "including green, inclusive and digital transitions, working with countries in the global South beyond solving immediate development challenges to supporting change in the underlying systems and structures that shape development.",
    },
    {
      title: "Inclusive growth",
      description:
        "a rights-based approach centred on empowerment, inclusion, equity, human agency and human development capabilities which recognizes that poverty and inequality are multidimensional.",
    },
    {
      title: "Building resilience",
      description:
        "strengthening the capacity of our clients, institutions and people to prevent, mitigate and respond to diverse risks including crisis, conflict, natural disasters, climate and social and economic shocks.",
    },
    {
      title: "Building capable institutions",
      description:
        "helping organizations across the private, public, and social sectors create the change that matters.",
    },
  ];

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

  return (
    <>
      <MobileNav />
      {/* Hero section */}
      <section className="flex-1 p-8 lg:w-full min-h-screen bg-[url(/vq/13.jpg)] bg-cover bg-center flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-8 w-full h-fit">
          <div className="p-4 space-y-8 text-white">
            <h1 className="lg:text-6xl text-5xl font-zilla font-bold ">
              Our <span className="text-orange-600">Future Focus.</span>
            </h1>
            <p className="lg:text-xl font-vietnam">
              The development challenges facing most of our clients today is
              centered around human development - the need to expand
              people&apos;s choices for a fairer, sustainable future, to build
              the world envisioned by global development goals with the planet
              and people in balance.
            </p>
          </div>
        </div>
      </section>
      {/* description */}
      <section className="lg:my-24 my-8 p-8 flex-1">
        <div className="flex flex-col gap-8 items-center justify-center lg:w-3/5 mx-auto">
          <h1 className="lg:text-5xl text-2xl font-zilla font-bold text-orange-600">
            Our Future Focus
          </h1>
          <p className="lg:text-lg font-vietnam">
            Over the next five years, Vision Quest will aim to work with our
            clients to accelerate and scale up development results
            significantly, bringing these goals back within reach and supporting
            change in three directions - structural transformation, particularly
            green, inclusive and digital transitions; inclusive growth, a
            rights-based approach centred on human agency and human development;
            building capable institutions and resilience to respond to systemic
            uncertainty and risk. <br />
            <br />
            We will work with our clients by targeting four broad directions of
            change:
            <br />
            <br />
            <ul className="list-disc lg:pl-8 pl-4 space-y-4">
              {changesList.map((item, index) => (
                <li key={index}>
                  <span className="font-bold text-orange-600">
                    {item.title}
                  </span>{" "}
                  - {item.description}
                </li>
              ))}
            </ul>
          </p>
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

export default FutureProjectsPage;
