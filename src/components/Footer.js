import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer bg-[#212121] py-12 text-white ">
        <div className="flex flex-col items-center justify-center max-w-[1200px] w-full mx-auto px-[20px] py-5">
            <ul className="menuItems flex flex-row gap-x-7 cursor-pointer font-bold">
                <li className="  hover:text-red-500">Terms Of Use</li>
                <li className="  hover:text-red-500">Privacy-Policy</li>
                <li className=" hover:text-red-500">About</li>
                <li className="  hover:text-red-500">Blog</li>
                <li className=" hover:text-red-500">FAQ</li>
            </ul>
            <div className="infoText text-[14px] opacity-50 max-w-[900px] mt-3 mb-5 flex text-center">
                © 2023 Popcorn - Pratham. All rights reserved. Explore our vast collection,
                immerse yourself in captivating stories, and experience the magic of
                cinema right at your fingertips. Lights, camera, action! 
            </div>
            <div className="socialIcons flex items-center justify-center gap-3">
                <span className="w-[50px] h-[50px] rounded-full bg-[#131313] flex items-center justify-center cursor-pointer hover:text-red-600 hover:outline hover:outline-red-600">
                    <FaFacebookF />
                </span>
                <span className="icon w-[50px] h-[50px] rounded-full bg-[#131313] flex items-center justify-center cursor-pointer  hover:text-red-600 hover:outline hover:outline-red-600">
                    <FaInstagram />
                </span>
                <span className="icon w-[50px] h-[50px] rounded-full bg-[#131313] flex items-center justify-center cursor-pointer  hover:text-red-600 hover:outline hover:outline-red-600">
                    <FaTwitter />
                </span>
                <span className="icon w-[50px] h-[50px] rounded-full bg-[#131313] flex items-center justify-center cursor-pointer  hover:text-red-600 hover:outline hover:outline-red-600">
                    <FaLinkedin />
                </span>
            </div>
        </div>
    </footer>
  );
};

export default Footer;