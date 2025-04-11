"use client";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { useRouter } from "next/navigation";
import MobileNav from "@/components/MobileNav";

const HomePage = () => {
  const navigate = useRouter();

  const questions = [
    {
      question: "What services do we offer?",
      answer:
        "We offer a range of services to empower humanitarian and development actors, including strategic planning, capacity development, and research services. Our evidence-based solutions are tailored to your needs and designed to drive sustainable change.",
    },
    {
      question: "How do we work?",
      answer:
        "Our approach is collaborative and participatory, ensuring that stakeholders are engaged throughout the process. We utilize data-driven methodologies to inform our strategies. This ensures that our strategies are relevant and effective.",
    },
    {
      question: "Who are our clients?",
      answer:
        "We serve a diverse range of clients, including NGOs, government agencies, and international organizations. Our expertise is particularly relevant to those operating in the Global South. We tailor our services to meet the unique needs of each client.",
    },
    {
      question: "What is our methodology?",
      answer:
        "Our methodology combines qualitative and quantitative research techniques to gather comprehensive insights. We emphasize stakeholder engagement and iterative feedback to refine our solutions. This ensures our strategies are both practical and impactful.",
    },
    {
      question: "How can you contact us?",
      answer:
        "You can reach us through our contact page or by email. We encourage inquiries and are happy to discuss your needs. Our team is ready to assist you with any questions.",
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

  const handleClick = () => navigate.push("/contact");
  const handleNavigate = () => navigate.push("/what-we-do");

  return (
    <>
      <MobileNav />
      {/*  Hero Section */}
      <section className="flex-1 px-8 lg:w-full w-screen min-h-screen bg-[url(/vq/15.jpg)] bg-cover bg-center flex items-center justify-center">
        <div className="lg:grid lg:grid-cols-2 gap-5 w-full h-[100%]">
          <div className="p-4 space-y-8 text-white">
            <h1 className="lg:text-6xl md:text-4xl text-3xl font-zilla font-bold ">
            Making a lasting difference{" "}
              <span className="text-orange-600">in the Global South.</span>
            </h1>
            <p className="lg:text-xl md:text-lg text-xs font-vietnam">
            VQ takes pride in its comprehensive understanding of the development sector, encompassing both its historical context and prospective advancements.  
            </p>
            <div className="space-x-8 max-lg:flex max-lg:items-center max-lg:justify-start max-lg:gap-2 max-lg:left-0">
              <button
                className="p-2 rounded-lg transition ease-in-out duration-700 cursor-pointer hover:bg-white hover:text-orange-600 max-lg:text-xs bg-orange-600 font-vietnam"
                onClick={handleNavigate}
              >
                Find Out How
              </button>
              <button
                className="p-2 rounded-lg transition ease-in-out duration-700 cursor-pointer hover:text-orange-600 hover:bg-white max-lg:text-xs bg-orange-600 font-vietnam"
                onClick={handleClick}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div />
        </div>
      </section>
      {/* Second Section on Home Page */}
      <section className="p-8 flex-1 lg:mt-24 mt-12">
        <div className="grid lg:grid-cols-2 lg:gap-8 gap-4">
          <div className="rounded-lg bg-[url(/vq/16.jpg)] bg-cover bg-center h-96" />
          <div className="space-y-8">
            <h1 className="lg:text-5xl text-3xl font-zilla font-bold">
              Empowering Humanitarian and Development Actors With Evidence-Based Solutions for{" "}
              <span className="text-orange-600">Sustainable Development</span>
            </h1>
            <p className="lg:text-xl text-sm font-vietnam">
              At Vision Quest Consultants, we specialize in providing
              data-driven strategies that empower humanitarian and development
              actors. Our tailored solutions ensure impactful results at every
              level, from local initiatives to global programs.
            </p>
          </div>
        </div>
      </section>
      {/* Third Section on Home Page */}
      <section className="p-8 flex-1 lg:mt-24 mt-12">
        <div className="grid lg:grid-cols-3 lg:gap-8 gap-4 lg:px-8 items-start flex-1">
          <div className="flex flex-col gap-6 items-center justify-center p-3 lg:text-center">
            <div className="rounded-lg bg-[url(/vq/18.jpg)] bg-cover bg-center h-96 w-full" />
            <h1 className="lg:text-3xl text-xl font-zilla font-bold text-orange-600">
              Vision Quest Consulting 
            </h1>
            <p className="lg:text-lg font-vietnam">
              We are a leading regional research, strategy, capacity development
              and advisory firm that provides evidence-based solutions for
              humanitarian and development actors at global, regional, national
              and local levels.
            </p>
            <button
              className="p-2 border border-orange-600 cursor-pointer rounded-md transition duration-700 ease-in-out hover:text-orange-600 hover:bg-white bg-orange-600 text-white"
              onClick={handleNavigate}
            >
              Read More
            </button>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center p-3 lg:text-center w-fit">
            <div className="rounded-lg bg-[url(/vq/17.jpg)] bg-cover bg-center h-96 w-full" />
            <h1 className="lg:text-3xl text-xl font-zilla font-bold text-orange-600">
              The Vision Quest Learning Hub
            </h1>
            <p className="lg:text-lg font-vietnam">
              We focus on knowledge generation and learning through training,
              mentorship, coaching, experimentation, testing and developing new
              tools and knowledge for learning in all areas of
              development work.
            </p>
            <button
              className="p-2 border border-orange-600  cursor-pointer rounded-md transition duration-700 ease-in-out hover:text-orange-600 hover:bg-white bg-orange-600 text-white"
              onClick={handleNavigate}
            >
              Read More
            </button>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center p-3 lg:text-center w-fit">
            <div className="rounded-lg bg-[url(/vq/19.jpg)] bg-cover bg-center h-96 w-full" />
            <h1 className="lg:text-3xl text-xl font-zilla font-bold text-orange-600">
              Vision Quest Capital
            </h1>
            <p className="lg:text-lg font-vietnam">
              The purpose of Vision Quest Capital is to build on the success of
              our economic development work across frontier and emerging markets
              by catalyzing private commercial capital into these markets for
              impact investment.
            </p>
            <button
              className="p-2 border border-orange-600  cursor-pointer rounded-md transition duration-700 ease-in-out hover:text-orange-600 hover:bg-white bg-orange-600 text-white"
              onClick={handleNavigate}
            >
              Read More
            </button>
          </div>
        </div>
      </section>
      {/* Fourth Section
      <section className="lg:mt-24 p-8 flex-1 grid lg:grid-cols-2 gap-8 ">
        <div className="space-y-8">
          <h1 className="lg:text-5xl text-3xl font-zilla font-bold">
            Transforming Lives Through{" "}
            <span className="text-orange-600">Evidence-Based Solutions.</span>
          </h1>
          <p className="lg:text-xl font-vietnam">
            At Vision Quest Consultants, we empower humanitarian and development
            actors by providing tailored strategies that drive sustainable
            change. Our services create significant impacts at global, regional,
            national, and local levels, ensuring that every initiative is
            grounded in solid research and real-world effectiveness.
          </p>
          <div className="space-x-8 font-vietnam">
            <button
              className="p-2 border border-orange-600  cursor-pointer rounded-md transition duration-700 ease-in-out hover:text-orange-600 hover:bg-white bg-orange-600 text-white"
              onClick={handleNavigate}
            >
              Find Out How
            </button>
            <button
              className="p-2 border border-orange-600 cursor-pointer rounded-md transition duration-700 ease-in-out hover:text-orange-600 hover:bg-white bg-orange-600 text-white"
              onClick={handleClick}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="rounded-lg bg-[url(/home6.jpg)] bg-cover bg-center h-96" />
      </section> */}
      {/* FAQs */}
      <section className="lg:mt-24 mt-12 p-8 flex-1 flex items-center flex-col justify-center">
        <h1 className="lg:text-6xl text-3xl lg:mb-12 mb-6 text-orange-600 font-zilla font-bold">
          FAQs
        </h1>
        <p className="lg:text-xl font-vietnam mb-8 text-center">
          Find answers to common questions about our services and how we can
          assist you.
        </p>
        <div className="grid gap-6 lg:w-3/5 lg:mt-16 mt-8">
          {questions.map((q, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded-lg">
              <h1 className="lg:text-2xl text-xl font-zilla font-bold text-orange-600">
                {q.question}
              </h1>
              <p className="lg:text-lg text-sm font-vietnam">{q.answer}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Get in Touch */}
      <section className="lg:p-16 p-8 flex-1 grid lg:grid-cols-2 lg:gap-48 gap-8">
        <div className="space-y-8">
          <p className="font-vietnam">Connect</p>
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
                <h1 className="text-orange-600 text-lg font-zilla font-bold">
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

export default HomePage;
