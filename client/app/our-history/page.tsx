import MobileNav from "@/components/MobileNav";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";

const HistoryPage = () => {
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
      <section className="flex-1 px-8 lg:w-full min-h-screen bg-[url(/vq/10.jpg)] bg-cover bg-center flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-8 w-full h-fit">
          <div className="p-4 space-y-8 text-white">
            <h1 className="lg:text-6xl text-4xl font-zilla font-bold ">
              Our <span className="text-orange-600">History.</span>
            </h1>
            <p className="lg:text-xl font-vietnam">
            Our vast experience in convergence areas (gender mainstreaming, monitoring, evaluation and learning, policy analysis and research, conflict sensitive programming and climate change) have remained a critical piece of our strengths and success.
            </p>
          </div>
        </div>
      </section>
      {/* first section */}
      <section className="lg:my-24 p-8 flex-1">
        <div className="grid lg:grid-cols-2 gap-8 h-fit">
          <div className="flex flex-col justify-center gap-8">
            <>
              <h1 className="lg:text-4xl text-2xl font-zilla font-bold text-orange-600">
                Health
              </h1>
              <p className="lg:text-lg font-vietnam">
                We envision better health systems that foster quality & access;
                reduce threats; and promote healthier behaviours to improve
                lives. <br />
                <br />
                Over the years, we have specialised in improving health security
                and systems, health equity and private sector engagement using
                our diverse expertise and unique ways of working. <br />
                <br />
                We have also specialised in analysing and understanding market
                systems, developing and strengthening partnerships and creating
                innovative finance models.
              </p>
            </>
            <>
              <h1 className="lg:text-4xl text-2xl font-zilla font-bold text-orange-600">
                Resilience building and economic growth
              </h1>
              <p className="lg:text-lg font-vietnam">
                Our work in resilience building and economic growth brings
                together the right mix of industry dynamics to unleash broad and
                inclusive growth. We focus on sustainability, and building on
                the fundamental belief that small enterprises, youth and farmers
                play vital roles in market systems at the heart of developing
                economies. <br />
                <br />
                We work to improve market access, forge links between formal and
                non-formal players, enhance workforce productivity, expand
                access to finance, and boost local value. We have also
                undertaken assignments that addressed food insecurity by
                championing sustainable solutions that lead to resilient and
                sustainable livelihoods.
              </p>
            </>
          </div>
          <div className="bg-[url(/vq/11.png)] bg-cover bg-center rounded-lg max-lg:hidden" />
        </div>
      </section>
      {/* second section */}
      <section className="p-8 flex-1">
        <div className="grid lg:grid-cols-2 gap-8 h-fit">
          <div className="bg-[url(/vq/14.jpg)] bg-cover bg-center rounded-lg max-lg:h-96" />
          <div className="flex flex-col justify-center gap-8">
            <>
              <h1 className="lg:text-4xl text-2xl font-zilla font-bold text-orange-600">
                Governance
              </h1>
              <p className="lg:text-lg font-vietnam">
                VQ&apos;s Governance Sector strengthens accountability and
                improves government performance by providing technical advice,
                strategic guidance, and support to public institutions, elected
                bodies, and citizens. <br />
                <br />
                Our approach to governance has also helped identify and foster
                engagement between citizens and their government, recognizing
                that both the supply and demand for good governance is necessary
                to initiate change. In doing so, we have also empowered leaders,
                recognizing that locally led solutions have the greatest
                potential for sustainability. <br />
                <br />
                Through our partnerships, we have harnessed convening power to
                actively bring together governments, key humanitarian and
                development actors to support open dialogue around complexities
                faced in fragile and conflict-affected countries.
              </p>
            </>
            <>
              <h1 className="lg:text-4xl text-2xl font-zilla font-bold text-orange-600">
                Gender and Social Inclusion
              </h1>
              <p className="lg:text-lg font-vietnam">
                A decade plus of transformative work (research, analysis and
                project implementation in resource poor settings in Africa) has
                demonstrated to us that exclusion and gender inequality
                consistently go hand in hand and that societies that lag
                furthest behind are those where laws and traditions hinder
                gender equality and women&apos;s empowerment. <br />
                <br />
                Our theory of change is based on our experience that achieving
                gender equality and women&apos;s empowerment requires
                transformative change.
              </p>
            </>
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

export default HistoryPage;
