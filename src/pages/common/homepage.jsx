// Home.js
import React, { useState } from 'react';
import Navbar from './navbar';


function getUser(){
  let user = localStorage.getItem('user');
  if(user){
    user = JSON.parse(user);
  } else{
    user = null
  }
  return user
}

const HomePage = () => {
 
  const [user , setUser] = useState(getUser());
  <>
  {user? (
    <>
    <h4>Hello , {user.name} {user.email}</h4>
    
    </>

  ):(
    <Link to='/login'>LOGIN</Link>
  )}
  </>

  return (
   
    <>
    <Navbar />


    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl p-6 bg-white rounded shadow-md">
        <h1 className="text-4xl font-bold mb-6">Software Engineering Home Page</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc ml-6">
            <li>Highly scalable software solutions</li>
            <li>Robust and secure coding practices</li>
            <li>Efficient and optimized algorithms</li>
            <li>User-friendly interfaces</li>
          </ul>
        </section>

    
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>
            We are a team of dedicated software engineers committed to delivering top-notch
            solutions for your business needs. With expertise in various technologies, we ensure
            the success of your projects.
          </p>
        </section>

      
        <section>
          <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
          <p>
            Ready to take your business to the next level? Contact us now for a consultation and
            let's discuss how we can help you achieve your goals.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Contact Us
          </button>
        </section>
      </div>
    </div>
    </>
  );
};

export default HomePage;
