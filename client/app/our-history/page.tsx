import React from "react";

const HistoryPage = () => {
  const tableData = [
    {
      theme: "Market solutions",
      assignments: [
        {
          assignment:
            "Health market system analysis. VQ has developed well-honed tools, skills, and in-country experience around the world to analyse market dynamics, failures, and successes to inform systemic change.",
          typeOfSupport: "Technical Assistance",
        },
      ],
    },
    {
      theme: "Capacity Development",
      assignments: [
        {
          assignment:
            "Transformative Capacity Baseline Survey in Mandera, Moyale and Karamoja Cluster (Kenya, Somalia, Ethiopia, South Sudan and Uganda) Labour Market Assessment in Mandera Cluster (Kenya, Somalia and Ethiopia).",
          typeOfSupport: "Capacity Development",
        },
      ],
    },
    {
      theme: "Socio-Economic Development",
      assignments: [
        {
          assignment:
            "Diagnostic Assessment on Institutional Arrangements and Infrastructure Implementation Readiness to Inform the Preparation of Garissa Integrated Socio-Economic Development Plan (GISEDP).",
          typeOfSupport: "Planning",
        },
      ],
    },
    {
      theme: "Third Party Monitoring",
      assignments: [
        {
          assignment:
            "Third Party Monitoring Pilot Project in Sudan. Programme to be covered by the TPM include; Humanitarian Reform Assistance and Resilience Programme (HRAR), Urban Water for Sudan (UW4S), and Sudan Free of Female Genital Mutilation Phase 2 (SFFGM2).",
          typeOfSupport: "Technical Assistance",
        },
      ],
    },
    {
      theme: "Labor Market Assessment",
      assignments: [
        {
          assignment:
            "Gender Sensitive Comprehensive Labour Market Assessment and Youth Aspiration Study in Somalia.",
          typeOfSupport: "Technical Assistance",
        },
      ],
    },
    {
      theme: "Gender Strategy Development",
      assignments: [
        {
          assignment:
            "Consultants in the review of the IGAD Strategy including the facilitation of the various Strategy Review Sessions with Division Teams, documentation of the process and key milestones and development of the 2022-2026 Strategy.",
          typeOfSupport: "Strategy",
        },
      ],
    },
    {
      theme: "Research and Evidence Generation",
      assignments: [
        {
          assignment:
            "Consultants, Gender and Energy Study for the Africa Enterprise Challenge Fund (AECF) commissioned to Practical Action Consulting: VQ led in the study (April-July 2021)/ assignment which involved assessing the gender impacts of AECF’s investment in renewable energy through its challenge fund",
          typeOfSupport: "Research",
        },
      ],
    },
    {
      theme: "Capacity Development",
      assignments: [
        {
          assignment:
            "Consultants in Development of the Gender Mainstreaming Tool-Kit for  gender focal desks of government ministries departments and agenciesin Somalia",
          typeOfSupport: "Technical Assistance",
        },
      ],
    },
    {
      theme: "Pubic Policy and Programming",
      assignments: [
        {
          assignment:
            "Techncial Assistance, DFID Rwanda. Mainstreaming Gender on demand assessment and institutional mapping to complete a project design for a new initiative in support of the application of science for the Ministry of Education, technology and innovation in support of national development goals. ",
          typeOfSupport: "Techncial Assistance",
        },
      ],
    },
  ];
  return (
    <>
      {/* Hero section */}
      <section className="flex-1 px-8 w-full h-screen bg-[url(/history2.jpg)] bg-cover bg-center flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8 w-full h-fit">
          <div className="p-4 space-y-8 text-white">
            <h1 className="text-6xl font-zilla font-bold ">
              Our <span className="text-orange-600">History.</span>
            </h1>
            <p className="text-xl font-vietnam">
              Our services have always enhanced the effectiveness of
              humanitarian efforts. We continue to provide tailored strategies
              that drive impactful change.
            </p>
          </div>
        </div>
      </section>
      {/* first section */}
      <section className="my-24 p-8 flex-1">
        <div className="grid grid-cols-2 gap-8 h-fit">
          <div className="flex flex-col justify-center gap-8">
            <>
              <h1 className="text-4xl font-zilla font-bold text-orange-600">
                Health
              </h1>
              <p className="text-lg font-vietnam">
                We envision better health systems that foster quality & access;
                reduce threats; and promote healthier behaviours to improve
                lives. Over the years, we have specialised in improving health
                security and systems, health equity and private sector
                engagement using our diverse expertise and unique ways of
                working. We have also specialised in analysing and understanding
                market systems, developing and strengthening partnerships and
                creating innovative finance models.
              </p>
            </>
            <>
              <h1 className="text-4xl font-zilla font-bold text-orange-600">
                Resilience building and economic growth
              </h1>
              <p className="text-lg font-vietnam">
                We envision better health systems that foster quality & access;
                reduce threats; and promote healthier behaviours to improve
                lives. Over the years, we have specialised in improving health
                security and systems, health equity and private sector
                engagement using our diverse expertise and unique ways of
                working. We have also specialised in analysing and understanding
                market systems, developing and strengthening partnerships and
                creating innovative finance models.
              </p>
            </>
          </div>
          <div className="bg-[url(/history1.jpg)] bg-cover bg-center rounded-lg" />
        </div>
      </section>
      {/* second section */}
      <section className="p-8 flex-1">
        <div className="grid grid-cols-2 gap-8 h-fit">
          <div className="bg-[url(/history3.jpg)] bg-cover bg-center rounded-lg" />
          <div className="flex flex-col justify-center gap-8">
            <>
              <h1 className="text-4xl font-zilla font-bold text-orange-600">
                Governance
              </h1>
              <p className="text-lg font-vietnam">
                VQ&apos;s Governance Sector strengthens accountability and
                improves government performance by providing technical advice,
                strategic guidance, and support to public institutions, elected
                bodies, and citizens. Based on a thorough understanding of the
                incentives, interests, and political economy inherent to policy
                development and implementation, we have continued to supply
                tailored solutions to policy makers, citizen leaders, and
                elected representatives. <br />
                <br />
                Our approach to governance has also helped identify and foster
                engagement between citizens and their government, recognizing
                that both the supply and demand for good governance is necessary
                to initiate change. In doing so, we have also empowered leaders,
                recognizing that locally led solutions have the greatest
                potential for sustainability. Through our partnerships, we have
                harnessed convening power to actively bring together
                governments, key humanitarian and development actors to support
                open dialogue around complexities faced in fragile and
                conflict-affected countries.
              </p>
            </>
            <>
              <h1 className="text-4xl font-zilla font-bold text-orange-600">
                Gender and Social Inclusion
              </h1>
              <p className="text-lg font-vietnam">
                A decade plus of transformative work (research, analysis and
                project implementation in resource poor settings in Africa) has
                demonstrated to us that exclusion and gender inequality
                consistently go hand in hand. And that societies that lag
                furthest behind are those where laws and traditions hinder
                gender equality and women&apos;s empowerment. Our theory of
                change is based on our experience that achieving gender equality
                and women&apos;s empowerement require transformative change.
              </p>
            </>
          </div>
        </div>
      </section>
      {/* table section */}
      <section className="my-24 p-8 flex-1">
        <div className="flex flex-col gap-8 items-center justify-center w-3/5 mx-auto h-fit">
        <h1 className="text-4xl font-zilla text-orange-600 font-extrabold">Key Involvements</h1>
          <p className="text-lg font-vietnam">
            Over the last five years alone, Vision Quest has been involved in
            some key assignments as shown in the summary table below.
          </p>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="text-2xl font-zilla font-bold text-orange-600 border border-gray-300 p-2">
                  Theme
                </th>
                <th className="text-2xl font-zilla font-bold text-orange-600 border border-gray-300 p-2">
                  Assignment
                </th>
                <th className="text-2xl font-zilla font-bold text-orange-600 border border-gray-300 p-2">
                  Type of Support
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {row.assignments.map((assignment, assignmentIndex) => (
                    <tr key={assignmentIndex}>
                      {assignmentIndex === 0 && (
                        <td
                          rowSpan={row.assignments.length}
                          className="text-lg font-vietnam border border-gray-300 p-3"
                        >
                          {row.theme}
                        </td>
                      )}
                      <td className="text-lg font-vietnam border border-gray-300 p-3">
                        {assignment.assignment}
                      </td>
                      <td className="text-lg font-vietnam border border-gray-300 p-3">
                        {assignment.typeOfSupport}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HistoryPage;
