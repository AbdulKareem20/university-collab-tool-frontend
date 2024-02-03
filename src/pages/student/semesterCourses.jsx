import React from 'react';

const subjects = [
  'Software Architecture',
  'Agile Software Development',
  'Database Management Systems',
  'Human-Computer Interaction',
  'Software Project Management',
  'Cloud Computing',
  'Professional Ethics in Software Engineering',
];

const semesterCourses = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">7th Semester - Software Engineering</h1>
        <ul className="list-disc pl-4">
          {subjects.map((subject, index) => (
            <li key={index} className="text-lg">
              {subject}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default semesterCourses;
