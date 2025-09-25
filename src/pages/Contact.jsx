import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <>
      {/* ---------- Hero / Intro ---------- */}
      <section className="py-20 bg-gradient-to-r from-[#964304] to-[#773503] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-amber-100">
            Have questions or want to connect? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* ---------- Contact Info + Form ---------- */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#5C2C0C] mb-6">
              Get in Touch
            </h2>
            <ul className="space-y-6 text-lg">
              <li className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#964304]" />
                <span>info@mbcoffee.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#964304]" />
                <span>+251 900 000 000</span>
              </li>
              <li className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#964304]" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
            </ul>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#5C2C0C] mb-4">
                Business Hours
              </h3>
              <p className="text-gray-700">Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p className="text-gray-700">Sat: 10:00 AM – 3:00 PM</p>
              <p className="text-gray-700">Sun: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8 border-t-4 border-[#964304]">
            <h2 className="text-3xl font-bold text-[#5C2C0C] mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#964304]"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#964304]"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#964304]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center w-full bg-[#964304] text-white py-3 rounded-lg font-semibold hover:bg-[#773503] transition"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ---------- Map Section ---------- */}
      <section className="relative h-[400px]">
        <iframe
          title="MB Coffee Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.098219730945!2d38.746891774746086!3d9.009590590171205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853030e1b28f%3A0xa6df8d0f1c8e3e0!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1695654300000!5m2!1sen!2set"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}

export default Contact;
