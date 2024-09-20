import React from 'react';
import { FaInstagram, FaPinterest, FaTwitter, FaFacebook, FaGoogle } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="">
            <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
                <a href="/" className="text-center p-5 font-bold text-3xl text-blue-600">
                    Chat<span className="text-black">Vibe</span>
                </a>

                <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                    <li>About</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>

                <div className="flex flex-col justify-center pt-6 lg:pt-0">
                    <div className="flex justify-center space-x-4">
                        <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                            <FaInstagram className="w-8 h-8" style={{ color: '#E1306C' }} /> {/* Instagram color */}
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Pinterest" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                            <FaPinterest className="w-8 h-8" style={{ color: '#E60023' }} /> {/* Pinterest color */}
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                            <FaTwitter className="w-8 h-8" style={{ color: '#1DA1F2' }} /> {/* Twitter color */}
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                            <FaFacebook className="w-8 h-8" style={{ color: '#1877F2' }} /> {/* Facebook color */}
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                            <FaGoogle className="w-8 h-8" style={{ color: '#DB4437' }} /> {/* Google color */}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
