import React from 'react';

const ScrollingLogos = () => {
  const logos = [
    '/aerc.png',
    '/cog.png',
    '/drc.png',
    '/eu.png',
    '/giz.png',
    '/gok.png',
    '/mwa.png',
    '/oxfam.png',
    '/peace.png',
    '/sdc.png',
    '/strath.png',
    '/ukaid.png',
    '/undp.png',
    '/unfpa.png',
    '/usaid.png',
    '/world.png',
    '/wvision.png',
  ];

  return (
    <section className="max-lg:hidden my-24 p-8 flex-1">
      <h1 className="text-4xl font-bold font-zilla text-center mb-8">
        Our Clients
      </h1>
      <div className="overflow-hidden">
        <div className="flex animate-scroll">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 p-4">
              <img src={logo} alt={`Client logo ${index + 1}`} className="h-24 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingLogos;