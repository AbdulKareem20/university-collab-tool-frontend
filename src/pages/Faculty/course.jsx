// src/CourseCreationPage.js
import React, { useState } from 'react';

const Course = () => {
  const [course, setCourse] = useState({
    name: '',
    title: '',
    description: '',
    courseCode: '',
    clo: '',
    plo: '',
  });

  const [courses, setCourses] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleCreateCourse = () => {
    // Add the new course to the courses list
    setCourses((prevCourses) => [...prevCourses, course]);

    // Clear the form
    setCourse({
      name: '',
      title: '',
      description: '',
      courseCode: '',
      clo: '',
      plo: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Create Course</h1>
        <p className="text-gray-600">Fill out the form to create a new course</p>
      </div>

      {/* Course Creation Form */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            className="mb-4 md:mb-0 w-full md:w-1/3 p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Course Name"
            name="name"
            value={course.name}
            onChange={handleInputChange}
          />
          <input
            className="mb-4 md:mb-0 w-full md:w-1/3 p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Course Title"
            name="title"
            value={course.title}
            onChange={handleInputChange}
          />
          <input
            className="mb-4 md:mb-0 w-full md:w-1/3 p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Course Description"
            name="description"
            value={course.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            className="mb-4 md:mb-0 w-full md:w-1/3 p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Course Code"
            name="courseCode"
            value={course.courseCode}
            onChange={handleInputChange}
          />
          <input
            className="mb-4 md:mb-0 w-full md:w-1/3 p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Course Learning Outcomes (CLO)"
            name="clo"
            value={course.clo}
            onChange={handleInputChange}
          />
          <input
            className="mb-4 md:mb-0 w-full md:w-1/3 p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Program Learning Outcomes (PLO)"
            name="plo"
            value={course.plo}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCreateCourse}
        >
          Create Course
        </button>
      </div>

      {/* Course Table */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Course List</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Code</th>
              <th className="py-2 px-4 border-b">CLO</th>
              <th className="py-2 px-4 border-b">PLO</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{c.name}</td>
                <td className="py-2 px-4 border-b">{c.title}</td>
                <td className="py-2 px-4 border-b">{c.description}</td>
                <td className="py-2 px-4 border-b">{c.courseCode}</td>
                <td className="py-2 px-4 border-b">{c.clo}</td>
                <td className="py-2 px-4 border-b">{c.plo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Course;
