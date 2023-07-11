"use client";
import { useEffect, useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
const Footer = () => {
  const [ismounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!ismounted) return null;
  return (
    <footer className=" bg-[#000] text-white ">
      <div className="container mx-auto py-8 px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">About Us</h4>

            <ul className="flex flex-col space-y-5 cursor-pointer">
              <li>Home</li>
              <li>Products</li>
              <li>Brands</li>
              <li>About us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="text-sm">1234 Street, City</p>
            <p className="text-sm">Phone: 123-456-7890</p>
            <p className="text-sm">Email: info@example.com</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-y-12 flex-col">
              <a href="#" className="text-white hover:text-gray-400 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-gray-400 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-400 text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Subscribe</h4>
            <p className="text-sm mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-r-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
