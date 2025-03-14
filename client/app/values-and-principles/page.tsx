import MobileNav from "@/components/MobileNav";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";

const ValuesAndPrinciplesPage = () => {
  const impactList = [
    {
      title: "Strategic Innovation",
      description:
        "Since we recognize the growing incoherence between the complex challenges facing our clients, arising from systemic risks like climate change, and the linear way that many developments actors work, innovative technological solutions, like smart technologies, may help solve urgent challenges in the short term yet fail to address underlying issues.",
    },
    {
      title: "Becoming more agile and anticipatory",
      description:
        "Since our previous business strategy outlined steps towards a more effective, efficient business model, VQ has invested substantially in new ways of working.",
    },
    {
      title: "Investing in our human capital ",
      description:
        "We have learned that the combination of huge investment in innovation capability and execution discipline makes us stand out from the rest.",
    },
  ];

  const valuesList = [
    {
      description: "Belief in our diversity of people, cultures and networks.",
    },
    {
      description:
        "Maintaining a culture of being accountable and responsible.",
    },
    { description: "Investing in our employees at home and in the workplace." },
    {
      description:
        "Investing in people and communities through our business and partnerships.",
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
      <section className="flex-1 px-8 lg:w-full min-h-screen bg-[url(/values1.jpg)] bg-cover bg-center flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-8 w-full h-fit">
          <div className="p-4 space-y-8 text-white">
            <h1 className="lg:text-6xl text-4xl font-zilla font-bold ">
              Our Values, Principles, and{" "}
              <span className="text-orange-600">Delivery Approach.</span>
            </h1>
            <p className="lg:text-xl font-vietnam">
              See what makes us effective, and how we go about achieving this
              milestone.
            </p>
          </div>
        </div>
      </section>
      {/* values */}
      <section className="lg:my-24 p-8 flex-1">
        <div className="grid lg:grid-cols-2 gap-8 h-128">
          <div className="bg-[url(/values1.jpg)] bg-cover bg-center rounded-lg max-lg:hidden" />
          <div className="flex flex-col justify-center gap-8">
            <h1 className="lg:text-5xl text-3xl font-zilla font-bold text-orange-600">
              Our Values and Principles
            </h1>
            <ul className="lg:text-xl font-vietnam list-disc lg:pl-8 pl-4 space-y-4">
              {valuesList.map((item, index) => (
                <li key={index}>{item.description}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* maximizing impact */}
      <section className="lg:px-16 px-8 flex-1">
        <div className="grid lg:grid-cols-2 lg:gap-16 gap-8">
          <div className="space-y-8">
            <h1 className="lg:text-5xl text-3xl font-zilla font-bold text-orange-600">
              Maximizing Impact: How will VQ deliver?
            </h1>
            <p className="lg:text-lg font-vietnam">
              Overall, VQ has begun investing in enabling capacities and
              approaches that can scale up development impact. We will continue
              to support our clients in cultivating and applying these enablers,
              while also embedding them in our own ways of working through:
              <br />
              <br />
              <ul className="list-disc lg:pl-8 pl-4 space-y-4">
                {impactList.map((item, index) => (
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
          <div className="bg-[url(/future2.jpg)] bg-cover bg-center rounded-lg max-lg:h-96" />
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

export default ValuesAndPrinciplesPage;
