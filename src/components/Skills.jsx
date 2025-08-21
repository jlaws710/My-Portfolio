import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>Skills</p>
              <p className='py-4 text-2xl'>Here's a list of technologies I've worked with</p>
          </div> 
          {/* Skills grid - responsive layout with hover effects */}
          <div className='w-full grid grid-row sm:grid-row-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Java</p>
                  <p className='my-4'>Kotlin</p>
                  <p className='my-4'>Javascript</p>
                  <p className='my-4'>Go</p>
                  <p className='my-4'>Python</p>
                  <p className='my-4'>Spring Boot</p>
                  <p className='my-4'>React</p>
                  <p className='my-4'>Docker</p>
                  <p className='my-4'>Kubernetes</p>
                  <p className='my-4'>SQL Databases</p>
                  <p className='my-4'>AWS</p>
                  <p className='my-4'>Git</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
