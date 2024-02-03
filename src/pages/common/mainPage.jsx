import React from 'react';

const ContactPage = () => {
  return (
    <div className="font-sans">
      <div className="bg-gray-100">

        <div id="preloader">
          <div className="book">
            <div className="book__page"></div>
            <div className="book__page"></div>
            <div className="book__page"></div>
          </div>
        </div>

        <nav className="bg-white shadow">
          <div className="container mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a className="flex-shrink-0" href="#">
                  <img className="h-8 w-8" src="images/logo.png" alt="LOGO" />
                </a>
              </div>
              <div className="hidden md:block">
                <a className="btn btn-default btn-home" href="#about" role="button">Login</a>
              </div>
            </div>
          </div>
        </nav>

        <section id="hero-area" className="py-20">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2">
                <div className="mb-8">
                  <h1 className="text-5xl font-bold mb-4">Welcome to Collabora Quest</h1>
                  <p className="text-lg mb-4">CollaboraPro is more than just a project management tool; it's a dynamic platform designed to transform how University Department faculty, students, chairmen, and deans work together. Imagine a space where creativity, productivity, and collaboration converge to propel your academic projects to new heights.</p>
                  <a className="btn btn-default btn-home" href="#about" role="button">Register</a>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img src="images/uni.jpg" className="w-4/5 h-4/5 mx-auto" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-16">
          {/* ... (Your existing About section JSX) */}
        </section>

        <section id="service" className="bg-gray-100 py-16">
          {/* ... (Your existing Service section JSX) */}
        </section>

        <section id="contact" className="bg-white py-16">
          <div className="container mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg">Connect with us to explore possibilities, ask questions, or discuss how we can collaborate.</p>
            </div>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-8">
                {/* Your Google Maps embed code */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.214757708701!2d68.3889065!3d26.2318164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394bb36f65c91029%3A0x2709fed1ec335c17!2sDepartment%20of%20Computer%20Systems%20Engineering%2CQUEST%20Nawabshah!5e0!3m2!1sen!2sbd!4v1464270878470" width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
              </div>
              <div className="w-full md:w-1/2">
                {/* ... (Your existing contact form JSX) */}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto">
            <div className="map-wrapper"></div>
          </div>
        </section>

        <footer className="bg-black text-white py-8">
          <div className="container mx-auto">
            <p className="text-center">Copyright &copy; | All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;
