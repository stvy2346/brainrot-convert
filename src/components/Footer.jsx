import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const handleClick = () => {
        const newWindow = window.open(
            'https://www.youtube.com/watch?v=xvFZjo5PgG0',
            '_blank',
            'noopener,noreferrer'
        );
        if (newWindow) newWindow.opener = null;
    };

    return (
        <footer className="w-full bg-black pb-1">
            <div className="hidden md:block">
                {/* Bottom Right Button */}
                <div className="fixed right-0 bottom-0 px-3 z-10">
                    <div className="relative group">
                        {/* Tooltip */}
                        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-50 shadow-lg">
                            click 4 surprise fr fr
                            <div className="absolute top-full right-2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
                        </div>
                        
                        <button 
                            onClick={handleClick} 
                            className="block cursor-pointer overflow-hidden"
                            style={{
                                width: '170px',
                                height: '100px',
                            }}
                        >
                            <img
                                src="pic3.webp"
                                alt="Interactive element"
                                className="w-full h-full object-cover object-bottom"
                                style={{
                                    transform: 'translateY(-65%)',
                                    height: '300%'
                                }}
                            />
                        </button>
                    </div>
                </div>

                {/* Bottom Left Button */}
                <div className="fixed left-0 bottom-0 z-10">
                    <div className="relative group inline-block m-3">
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-50 shadow-lg">
                            click if u vibin
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
                        </div>
                        
                        <button
                            onClick={handleClick}
                            className="cursor-pointer block"
                        >
                            <img 
                                src="pic13.gif" 
                                alt="Interactive element" 
                                className="min-h-15 block" 
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Center Footer Content */}
            <div className="flex flex-col items-center gap-2 mt-1">
                <p className="text-white">Made with 🧠 for the internet.</p>
                <a
                    href="https://github.com/your-repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                >
                    <div className="flex flex-row text-neutral-400 hover:text-white items-center gap-2">
                        <FaGithub />
                        <p>GitHub</p>
                    </div>
                </a>

                <div className="flex gap-4 mt-4 md:hidden">
                    {/* Bottom Left Image */}
                    <button
                        onClick={handleClick}
                        className="cursor-pointer"
                    >
                        <img 
                            src="pic13.gif" 
                            alt="Interactive element" 
                            className="min-h-15 block" 
                            style={{ height: '80px', width: 'auto' }}
                        />
                    </button>
                    {/* Bottom Right Image */}
                    <button 
                        onClick={handleClick} 
                        className="cursor-pointer overflow-hidden"
                        style={{
                            width: '120px',
                            height: '80px',
                        }}
                    >
                        <img
                            src="pic3.webp"
                            alt="Interactive element"
                            className="w-full h-full object-cover object-bottom"
                            style={{
                                transform: 'translateY(-65%)',
                                height: '300%'
                            }}
                        />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;