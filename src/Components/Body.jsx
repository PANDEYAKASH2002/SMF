import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from 'emailjs-com';





export default function CompanyWebsite() {

  const [send ,setSend]=useState(false)

  const sendEmail = (e) => {
    setSend(true);
    e.preventDefault();
  
    emailjs.sendForm(
      'service_90e8bxs',
      'template_h02ohy4',
      e.target,
      'glyf7eJLbailtc_c4'
    ).then(
      (result) => {
        alert('Message sent!');
        setSend(false);
      },
      (error) => {
        alert('Failed to send. Try again.');
        setSend(false);
      }
    );
   
    e.target.reset();
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans text-gray-800 scroll-smooth  ">
      {/* Hero Section */}
      <section
        className="body-section min-h-screen Relative bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4 relative bg-gradient-to-r from-blue-200 via-blue-600  to-blue-300"
        
      >
        <nav className="absolute opacity-100 top-0 left-0 right-0 flex justify-between items-center px-6 py-4 bg-opacity-20 backdrop-blur-sm">
            <div> <img src="/logo1.jpg" alt="logo" className="h-8 " /></div>
          {/* <div className="text-xl flex justify-center font-bold">SMART FACILITY MANAGEMENT</div> */}
          <div className="space-x-4">
           <b> <button onClick={() => handleScroll("about")} className="hover:underline text-black text-xl px-1">About</button></b>
            <b><button onClick={() => handleScroll("services")} className="hover:underline text-black text-xl px-1">Services</button></b>
            <b><button onClick={() => handleScroll("contact")} className="hover:underline text-black text-xl px-1">Contact</button></b>
          </div>
        </nav>
        <h1 className="text-4xl md:text-6xl text-black font-bold mb-4 p-3" data-aos="fade-up">Empowering Workforces, Securing Spaces</h1>
        <p className="text-lg md:text-xl text-black mb-6 p-3" data-aos="fade-up" data-aos-delay="200">Reliable manpower solutions for companies and societies</p>
        <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-2xl text-lg font-semibold cursor-pointer" data-aos="fade-up" data-aos-delay="400">Learn More</button>
        {/* <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl text-lg font-semibold cursor-pointer" data-aos="fade-up" data-aos-delay="400" onClick={() => navigate('/about')}>
      Go to About Page
    </button> */}
      </section>


      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 bg-white" data-aos="fade-up">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="/guard2.jpg" alt="About Us" className="rounded-xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4">About SMART FACILITY MANAGEMENT</h2>
            <p className="text-lg mb-4">
              We provide trained, dependable manpower including laborers and watchmen to housing societies and commercial establishments. We aim to support your operations with workforce you can trust.
            </p>
            <p className="text-lg">Our professionals are screened, skilled, and always ready to serve with dedication and discipline.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-20 bg-gray-50" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Labor Supply", img: "/service1.jpeg", desc: "Reliable and experienced workers for construction, factories, and maintenance jobs." },
            { title: "Security Services", img: "/service2.jpg", desc: "Trained watchmen to ensure the safety and order of your premises round the clock." },
            { title: "Facility Support", img: "/support3.jpeg", desc: "Customized facility management solutions to meet your unique needs." }
          ].map((service, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-lg transition-transform hover:scale-105 overflow-hidden bg-cover bg-center text-white"
              style={{ backgroundImage: `url('${service.img}')` }}
            >
              <div className="bg-blue-400 bg-opacity-60 p-6 h-full">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">

          <form className="space-y-6" onSubmit={sendEmail}>
           
           <input type="text" name="name" placeholder="Your Name" className="w-full border p-4 rounded-md" required />
          <input type="email" name="email" placeholder="Your Email"   className="w-full border p-4 rounded-md" required />
           <textarea name="message" placeholder="Your Message" className="w-full border p-4 rounded-md h-32" required></textarea>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 flex justify-center text-center rounded-xl" type="submit"  >{send ? "sending": "send"}</button>
          </form>
          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-2"><FaPhone /> +91 1234567892</div>
            <div className="flex items-center gap-2"><FaEnvelope /> contact@smartfacility.com</div>
            <div className="flex items-center gap-2"><FaMapMarkerAlt />Phase-2,old court,Noida, India</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul>
              <li><button onClick={() => handleScroll("about")}>About</button></li>
              <li><button onClick={() => handleScroll("services")}>Services</button></li>
              <li><button onClick={() => handleScroll("contact")}>Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <p>Email: contact@smartfacility.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Follow Us</h4>
            <div className="flex gap-4 text-xl">
              <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
              <FaTwitter className="hover:text-blue-300 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <p className="text-center mt-8">© 2025 SMART FACILITY MANAGEMENT. All rights reserved.</p>
      </footer>
    </div>
  );
}
