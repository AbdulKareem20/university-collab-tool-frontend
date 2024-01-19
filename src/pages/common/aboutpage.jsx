// About.js
import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <Navbar />
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl p-6 bg-white rounded shadow-md">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            At XYZ Software, our mission is to provide innovative and reliable software solutions
            that empower businesses to thrive in the digital age. We are committed to excellence,
            creativity, and client satisfaction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p>
            Our team consists of highly skilled software engineers with diverse expertise in
            cutting-edge technologies. We work collaboratively to tackle complex challenges and
            deliver high-quality results.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            Have questions or want to discuss a potential project? Feel free to reach out to us.
            We're here to help you succeed in your software endeavors.
          </p>
         <Link to='/aboutpage/contactpage'> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Contact Us
          </button>
          </Link>
        </section>
      </div>
    </div>
    </>

  );
};

export default About;
