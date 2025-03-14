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
        "helping organizations across the private, public, and social sectors create the change that matters. This means embedding technology, analytics, and design into core processes and mind-sets; building capabilities that help organizations and people to thrive in an ever-changing context; and developing excellence in execution to ensure that actions translate into outcomes, quickly and sustainably.",
    },
  ];

  const impactList = [
    {
      title: "Strategic Innovation",
      description:
        "Since we recognize the growing incoherence between the complex challenges facing our clients, arising from systemic risks like climate change, and the linear way that many developments actors work, innovative technological solutions, like smart technologies, may help solve urgent challenges in the short term yet fail to address underlying issues. While many players recognize this mismatch, they are struggling with how to address it. We will help all our clients and communities to identify options and capabilities for enhancing the performance of entire systems, making them adaptive and resilient to change. In some cases, we will take the initiative to partner in research and development so as to help reframe policy choices and building coalitions for change committed to continuous learning and adaptation.",
    },
    {
      title: "Becoming more agile and anticipatory",
      description:
        "Since our previous business strategy outlined steps towards a more effective, efficient business model, VQ has invested substantially in new ways of working. We have built new capacities in at least four other countries: in Rwanda, Liberia, Senegal and Zambia to begin a process of greater business expansion in these countries.  Internally, we will invest in six key areas; people, knowledge, risk management, funding, operational excellence and impact measurement to build the agile, anticipatory organization our clients expect.",
    },
    {
      title: "Investing in our human capital ",
      description:
        "We have learned that the combination of huge investment in innovation capability and execution discipline makes us stand out from the rest. We have people who have exceptionally deep knowledge in each of the different areas you can think of. Our consulting teams have the ability to pull all of that capability together and mix those skills to serve a client. When we go to market with our consultants today, they have an array of skills and tools that define features of the modern consultant tools and mindset.",
    },
  ];

  const tableData = [
    {
      driver: "People",
      indicators: [
        "Investments in skills, knowledge and workplace experiences that enable employees to reach their full potential",
        "Building and creating strong and trusting relationships among people",
      ],
    },
    {
      driver: "Clients",
      indicators: [
        "Understanding client needs for integration of their experiences into our products and services",
        "Improvements in routinely monitoring attraction, retention and expansion of our client portfolio",
      ],
    },
    {
      driver: "Operations",
      indicators: [
        "Increased routine performance measures in operations such as speed, efficiency, and effectiveness",
        "Flexibility and clarity of workflow processes that align our operations with our strategies",
      ],
    },
    {
      driver: "Technology",
      indicators: [
        "Embracing the use of technology as a support tool for business growth and managing risk",
        "Investment in digital, technology and data analytics to identify behaviour patterns, trends and competitive landscapes",
      ],
    },
    {
      driver: "Finance",
      indicators: [
        "Employing the best financial management approaches that drive maximum benefits from the management of available financial resources",
        "Transforming finance functions more strategically and commercially",
      ],
    },
    {
      driver: "Risk",
      indicators: [
        "Early detection and management of risk",
        "Reduction in volatility in our business",
      ],
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
      <section className="flex-1 p-8 lg:w-full min-h-screen bg-[url(/future1.jpg)] bg-cover bg-center flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-8 w-full h-fit">
          <div className="p-4 space-y-8 text-white">
            <h1 className="lg:text-6xl text-5xl font-zilla font-bold ">
              Our <span className="text-orange-600">Future Projects.</span>
            </h1>
            <p className="lg:text-xl font-vietnam">
              See how Vision Quest aims to work with our clients to accelerate
              and scale up development results significantly while tackling
              development challenges facing most of our clients.
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
            The development challenges facing most of our clients today is
            centered around human development - the need to expand people&apos;s
            choices for a fairer, sustainable future, to build the world
            envisioned by global development goals with the planet and people in
            balance. <br />
            <br />
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
                  <span className="font-bold text-orange-600">{item.title}</span> -{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          </p>
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
              while also embedding them in our own ways of working.
              <br />
              <br />
              <ul className="list-disc lg:pl-8 pl-4 space-y-4">
                {impactList.map((item, index) => (
                  <li key={index}>
                    <span className="font-bold text-orange-600">{item.title}</span> -{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            </p>
          </div>
          <div className="bg-[url(/future2.jpg)] bg-cover bg-center rounded-lg max-lg:h-96" />
        </div>
      </section>
      {/* description */}
      <section className="lg:my-24 my-8 lg:px-8 px-2 flex-1">
        <div className="flex flex-col gap-8 items-center justify-center lg:w-3/5 mx-auto ">
          <h1 className="lg:text-5xl text-3xl font-zilla font-bold text-orange-600">
            Measuring Progress
          </h1>
          <div className="flex items-center justify-center w-full mx-auto h-fit">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="lg:text-2xl max-md:text-sm text-lg font-zilla font-bold text-stone-500 bg-orange-300 border border-gray-300 p-2">
                    Driver of Growth
                  </th>
                  <th className="lg:text-2xl max-md:text-sm text-lg font-zilla font-bold text-stone-500 bg-orange-300 border border-gray-300 md:p-2 p-0.5">
                    Progress Indicators
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="lg:text-lg max-md:text-sm font-zilla text-stone-500 font-bold border border-gray-300 p-2 bg-orange-200">
                      {row.driver}
                    </td>
                    <td className="lg:text-lg max-md:text-sm font-vietnam border border-gray-300 p-2">
                      <ul className="list-disc pl-4 space-y-2">
                        {row.indicators.map((indicator, indicatorIndex) => (
                          <li key={indicatorIndex}>{indicator}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
