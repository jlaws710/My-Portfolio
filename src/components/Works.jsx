import React from 'react';

const Works = () => {
  const projects = [
    {
      name: "Shopping Cart Tracker",
      description: "Java & Spring Boot application to manage shopping carts with PostgreSQL backend.",
      tech: "Java, Spring Boot, SQL, Docker",
      link: "https://github.com/jlaws710/Shopping-Cart-Tracker"
    },
    {
      name: "Cats Inventory",
      description: "React & Node JS application that displays a current list of cats.",
      tech: "Javascript, React, Node JS, Docker, Postgres",
      link: "https://github.com/jlaws710/Cats-Inventory"
    },
    {
      name: "Cassandra Health Monitor",
      description: "Java & Spring Boot application that monitors the health of Cassandra nodes.",
      tech: "Java, Spring Boot, Docker, Cassandra",
      link: "https://github.com/jlaws710/CassandraHealthMonitor"
    },
    {
      name: "Kanban Board",
      description: "Java, Spring Boot, Javascript, and React application that helps visualize and manage work.",
      tech: "Java, Spring Boot, Javscript, React, Docker, Postgres",
      link: "https://github.com/jlaws710/Kanban-Board"
    },
    {
      name: "ATM",
      description: "Java & Spring Boot application that supports account balance inquiry, deposit, and withdrawal operations via REST endpoints.",
      tech: "Java, Spring Boot, Docker, Postgres",
      link: "https://github.com/jlaws710/ATM"
    }
  ];

  return (
    // Main container with responsive height
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* Section header */}
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>Projects</p>
          <p className='py-6 text-2xl'>Check out some of my most recent projects</p>
        </div>
      
        {/* Project grid */}
        {projects.map((proj, idx) => (
        <div className='grid sm:grid-row-2 md:grid-row-3 gap-4'>
          <div
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='flex justify-center items-center flex-col hover:scale-110 duration-500'>
              <span key={idx} className='text-lg font-bold text-white tracking-wider'>{proj.name}</span>
              <p key={idx} className='text-center'>{proj.description}</p>
              <div className='pt-8 text-center'>
                <a href={proj.link} target='_blank' rel="noreferrer"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button></a>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );  
};

export default Works;
