// pages/ExperiencePage.jsx
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      companyName: '1-Tarumitra Foundation',
      position: 'Web App Developer intern',
      startDate: 'December 2023',
      endDate: 'February 2024',
      description: ' Spearheaded a Team of 3, Optimized Node.js Integrations, (Express, Axios) & Redux for 80% FasterResponse Times, seamlessly integrating backend/frontend (400k+ codebase)..Crafted 80+ Chakra UI Components in React & Implemented Normalized Database Schema.Boosted MongoDB Queries by 70% (Indexing & Redis). Scalable System(Docker & Kubernetes).',
    },
    {
      companyName: '2-Indial Oil Corporation Limited, Guwahati',
      position: 'SDE intern',
      startDate: 'December 2023',
      endDate: 'January 2024',
      description: 'Implemented indexing and projection techniques in Oracle database system resulting in a 10% increase in search efficiency and a 15% decrease in response time for critical business queries. Developed a machine learning transcriber and summarizer, boosting meeting efficiency by 15%.Designed a high-fidelity user experience with Flask and achieved 90% model accuracy using ASR & Seq2Seq models, resulting in a 30% user retention increase and 20% conversion rate boost.',
    },
    {
      companyName: '3-Darduck CyberSecurity Solution',
      position: 'Backend Developer Intern',
      startDate: 'February 2023',
      endDate: 'March 2023',
      description: 'API Development and Maintenance: Assist in designing, building,and maintaining REST APIs.Database Management: Support in managing and optimizingdatabases, including data storage, retrieval, and organization.',
    },
  ];

  return (
    <div id="experiences" className="max-w-4xl mx-auto mt-6 p-6 shadow-md rounded-md bg-[#120926] text-white">
      <h1 className="text-3xl font-semibold text-center my-20 text-white">My Professional Experience</h1>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="p-4 bg-[#120926] rounded-md">
            <h3 className="text-xl font-bold hover:text-pink-800 transition-duration-250">{experience.companyName}</h3>
            <p className="text-sm text-gray-600">{experience.position}</p>
            <p className="text-sm text-gray-600">
              {experience.startDate} - {experience.endDate}
            </p>
            <p className="mt-2 hover:text-pink-400 transition-duration-250">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
