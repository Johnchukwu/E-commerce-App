import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula eros id felis consectetur congue.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-sm">123 Alagomeji, Lagos, Nigeria</p>
            <p className="text-sm">info@example.com</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-600" />
        <div className="text-sm text-center">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
