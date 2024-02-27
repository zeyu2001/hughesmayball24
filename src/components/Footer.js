import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <span className="text-white self-center whitespace-nowrap">Hughes Hall May Ball 2024</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
          <li>
            <a href="/#tickets" className="hover:underline me-4 md:me-6">Tickets</a>
          </li>
          <li>
            <a href="mailto:president@hughesmayball.co.uk" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-white sm:text-center">© 2024 <a href="/#committee" className="hover:underline">Hughes Hall May Ball 2024 Committee</a>. Website built by Zayne Zhang. All Rights Reserved.</span>
    </div>
  </footer>
);

export default Footer;