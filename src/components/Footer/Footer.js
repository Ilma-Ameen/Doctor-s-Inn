import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"; // You may need to install react-icons

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <h3 className="text-2xl mb-3">Home</h3>
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <h3 className="text-2xl mb-3">Service</h3>
          <ul>
            <li>
              <a href="/">Service 1</a>
            </li>
            <li>
              <a href="/">Service 2</a>
            </li>
            <li>
              <a href="/">Service 3</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <h3 className="text-2xl mb-3">Find a Doctor</h3>
          <ul>
            <li>
              <a href="/">Search Doctors</a>
            </li>
            <li>
              <a href="/">Doctor Profiles</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <h3 className="text-2xl mb-3">Contact</h3>
          <ul>
            <li>
              <a href="/">Contact Information</a>
            </li>
            <li>
              <a href="/">Appointments</a>
            </li>
          </ul>
          <div className="flex mt-4">
            <a href="https://twitter.com" className="mr-2">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com" className="mr-2">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
