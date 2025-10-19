import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="w-11/12 md:w-3/4 mx-auto grid md:grid-cols-3 gap-10">
        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            The <span className="text-red-600">Dragon News</span>
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Stay informed with reliable, real-time news from across Bangladesh
            and the world. Empowering truth and transparency since 2020.
          </p>
          <div className="flex gap-4 text-lg">
            <a
              href="#"
              className="hover:text-red-500 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-red-500 transition duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/career"
                className="hover:text-red-500 transition duration-200"
              >
                Career
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-red-500 transition duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-red-500 transition duration-200"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Get the latest headlines and breaking news directly to your inbox.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-lg outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white font-medium transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        <p>
          © {new Date().getFullYear()} The Dragon News. All rights reserved. |
          Designed with ❤️ by{" "}
          <span className="text-red-500 font-medium">MM Media</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
