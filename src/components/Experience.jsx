import React from 'react'

const Experience = () => {
  const workExperience = [
    {
      company: "American Express",
      title: "Software Engineer",
      description: [
        "Designed and implemented fraud risk assessment solutions for customer transactions.", 
        "Developed RESTful APIs and optimized microservices using Spring Boot and Node.js.",
        "Built and deployed containerized applications using Docker and Kubernetes.",
        "Created and maintained CI/CD pipelines to ensure smooth deployment processes.",
        "Conducted code reviews and optimized system performance through upgrades.",
        "Collaborated with cross-functional teams to deliver software projects efficiently.",
        "Participated in the Multiverse Apprenticeship Program, building backend and frontend projects."
      ],
      years: "2022 - 2024"
    },
    {
      company: "Flowers Baking",
      title: "Maintenance Engineer Technician",
      description: [
        "Performed regular inspections, cleaning, and lubrication of equipment and machinery.",
        "Troubleshoot and repaired electrical machines using Programmable Logic Controller (PLC)",
        "Interpreted blueprints, schematic diagrams, and technical specifications.",
        "Diagnosed and fixed electrical circuit issues using multimeters and test probes.",
        "Ensured equipment reliability by conducting preventive maintenance.",
        "Adhered to quality control procedures to maintain operational efficiency."
      ],
      years: "2019 - 2020"
    }
  ]
  return (
    // Main container with full width/height and background
    <div
      name="experience"
      id="experience"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                Work Experience
              </p>
            </div>
            <div></div>
          </div>
          {workExperience.map((exp, idx) => (
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p key={idx}>
                {exp.title} | {exp.company} | {exp.years} 
              </p>
            </div>
            <div>
              <p key={idx} className='gap-8 mb-10'>
              {exp.description}
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Experience