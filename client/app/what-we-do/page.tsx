import MobileNav from "@/components/MobileNav";
import React from "react";

const ServicesPage = () => {
  const hubList = [
    {
      title: "Our Learning Platform",
      description:
        "A NITA certified platform that provides virtual and in-person training courses on a wide range of short courses through partnerhsips with leading training institutions.",
    },
    {
      title: "The VQ Data and Analytics Platform",
      description:
        "As part of our commitment to shape development rocesses through adaptation, we have invested in a wide range of tools, in data and decision making systems that promote use of evidence for change management.",
    },
    {
      title: "The Vision Quest Professionals",
      description:
        "A network and community of practice of professionals who have been exposed to some of our training solutions that promotes active engagement with development practioners and a variety of stakeholders within our eco-system. We offer value by providing access to global peers and convenings and access to a diverse network of complementary actors who benefit from our regular convenings to share insights, learn, and foster collaboration.",
    },
  ];

  const capitalList = [
    {
      title: "Climate Investing",
      description:
        "promoting the mobilization and deployment of local, national or international financing—drawn from public, private and alternative sources of financing that seeks to support mitigation and adaptation actions that will address climate change.",
    },
    {
      title: "Blended financing solutions",
      description:
        "mobilizing private investment in emerging markets and developing economies to advance Sustainable Development Goals (SDGs).",
    },
    {
      title: "Impact investing",
      description:
        "deployment of funds into investments that generate measurable and beneficial social or environmental impact alongside financial return on investment for private sector entities.",
    },
  ];

  const propositionList = [
    {
      title: "Depth of expertise",
      description:
        "Our consultants include public policy experts, leaders, medical doctors, engineers, data scientists, business managers, civil servants, entrepreneurs, and researchers with wide knowledge and extensive experience. They join us to be part of our story of change and transformation.",
    },
    {
      title: "A strong presence in the global south",
      description:
        "Vision Quest has a wide range of clientele base scattered over 15 countries in Africa from South, East, Central and West Africa. In each of these coutnires we have undertaken various assignments including  capacity assessment, development of strategy papers as well as review and development of both strategic and development plans, design of programs, project feasibility studies and assessments, baseline studies, midterm and end term evaluations as well as capacity building.",
    },
    {
      title: "Adaptive development and doing development differently",
      description:
        "Through strategic think and advisory support, we work with policy-makers and practitioners as they seek to 'do development differently'. We focus on testing, adapting and learning in all areas of development work, be it work on access to justice, health, education, service delivery or democracy.",
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
  return (
    <>
      <MobileNav />
      {/* Hero section */}
      <section className="flex-1 px-8 lg:w-full w-screen min-h-screen bg-[url(/services1.jpg)] bg-cover bg-center flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-8 w-full h-fit">
          <div className="lg:p-4 space-y-8 text-white">
            <h1 className="text-6xl font-zilla font-bold ">
              Our Expert <span className="text-orange-600">Services.</span>
            </h1>
            <p className="lg:text-xl font-vietnam">
              Discover tailored solutions that drive impactful change in
              humanitarian and development sectors worldwide.
            </p>
          </div>
        </div>
      </section>
      {/* first service */}
      <section className="lg:my-24 my-8 p-8 flex-1">
        <div className="grid lg:grid-cols-2 gap-8 h-fit">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-4xl font-zilla font-bold text-orange-600">
              Vision Quest Consulting Services
            </h1>
            <p className="lg:text-lg font-vietnam">
              We are a leading regional research, strategy, capacity development
              and advisory firm that provides evidence-based solutions for
              humanitarian and development actors at global, regional, national
              and local levels. <br /> <br /> Our range of work here covers four
              key growth areas:{" "}
              <span className="text-orange-600">
                {" "}
                organization change and development, social development,
                economic development, environment and climate change
              </span>
              . <br />
              <br />
              In each of these growth areas we undertake project design and
              development, grant management, research, measurement and
              evaluations including third party monitoring, strategy and
              capacity building in addition to other institutional support
              measures such as strategic planning, and resources mobilization.{" "}
              <br /> <br />
              In order to expand our reach in these areas, we have also
              established a{" "}
              <span className="text-orange-600">
                Vision Quest Consulting Warehouse
              </span>
              . At the warehouse, we leverage on our proprietary systems to help
              individual and stand alone consultants to navigate complex tasks
              through administrative and back end support for their assignments
              at a cost. In this product, we offer legal cover for individual
              consultants with large tasks by providing support on contracting
              of project staff, regulatory compliance, project staff recruitment
              and management as well as pre financing soltuons where required to
              undertake initial workloads at the consultant&apos;s cost.
            </p>
          </div>
          <div className="bg-[url(/services2.jpg)] bg-cover bg-center rounded-lg max-lg:h-96" />
        </div>
      </section>
      {/* second service */}
      <section className="p-8 flex-1">
        <div className="grid lg:grid-cols-2 gap-8 h-fit">
          <div className="bg-[url(/services3.jpg)] bg-cover bg-center rounded-lg max-lg:h-96" />
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-4xl font-zilla font-bold text-orange-600">
              The Vision Quest Learning Hub
            </h1>
            <p className="lg:text-lg font-vietnam">
              The Learning Hub is born out of our commitment to adaptive
              development and doing development differently. Through strategic
              think and advisory support, we work with development practitioners
              as they seek to &apos;do development differently&apos;. <br />
              <br />
              We focus on knowledge generation and learning through training,
              mentorship, coaching, experimentation, testing and developing new
              tools and knowledge for adaption and learning in all areas of
              development work, be it work on access to justice, health,
              education, service delivery or democracy. At our Learning Hub,
              three key elements stand out: <br /> <br />
              <ul className="list-disc lg:pl-8 pl-4 space-y-4">
                {hubList.map((item, index) => (
                  <li key={index}>
                    <span className="font-bold text-orange-600">{item.title}</span> -{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </section>
      {/* third service */}
      <section className="lg:my-24 mt-8 p-8 flex-1">
        <div className="grid lg:grid-cols-2 gap-8 h-fit">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-4xl font-zilla font-bold text-orange-600">
              Vision Quest Capital
            </h1>
            <p className="lg:text-lg font-vietnam">
              Since we have a long heritage in economic development and
              extensive engagement with frontline development players including
              local communities, governments and non governmental institutions,
              we have now added private sector and finance institutions into
              this fold. <br />
              <br /> The purpose of Vision Quest Capital is to build on the
              success of our economic development work across frontier and
              emerging markets by catalyzing private commercial capital into
              these markets for impact investment. Our brand and reputation
              position us as credible financial advisors and intermediaries in
              these markets, while our technical expertise allows us to add
              value to promising businesses that are constrained by capacity and
              capital. <br />
              <br /> Our experiences in economic development make Vision Quest
              Capital an ideal partner for private sector institutions seeking
              investment opportunities that promote the achievement of the SDGs
              through:
              <br /> <br />
              <ul className="list-disc lg:pl-8 pl-4 space-y-4">
                {capitalList.map((item, index) => (
                  <li key={index}>
                    <span className="font-bold text-orange-600">{item.title}</span> -{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            </p>
          </div>
          <div className="bg-[url(/services4.jpg)] bg-cover bg-center rounded-lg max-lg:hidden" />
        </div>
      </section>
      {/* value proposition */}
      <section className="p-8 flex-1">
        <div className="flex flex-col justify-center gap-8 lg:w-3/5 mx-auto">
          <h1 className="text-4xl font-zilla font-bold text-orange-600 lg:text-center">
            Our Value Proposition
          </h1>
          <p className="lg:text-lg font-vietnam">
            We bring breakthrough thinking and approaches to help private sector
            and development organizations deliver sustainable outcomes to drive
            effectiveness today and prepare for tomorrow. By tapping into the
            best of the VQ ecosystem and syndicated human capital - we can
            provide development solutions nearly everywhere our clients need it.
            <br />
            <br />
            <ul className="list-disc lg:pl-8 pl-4 space-y-8">
              {propositionList.map((item, index) => (
                <li key={index}>
                  <span className="font-bold text-orange-600">{item.title}</span>:{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          </p>
        </div>
      </section>
      {/* values */}
      <section className="lg:my-24 p-8 flex-1">
        <div className="grid lg:grid-cols-2 gap-8 h-128">
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
          <div className="bg-[url(/services5.jpg)] bg-cover bg-center rounded-lg max-lg:hidden" />
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
