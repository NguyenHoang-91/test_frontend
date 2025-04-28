import React from 'react';
import { Link } from 'react-router-dom';

// import logo from '../assets/imgs/logo.svg';
const Navbar = () => {
    return (
        <>
            {/* Top Info Bar */}
            <div className="bg-white border-b text-sm px-4 py-2 flex flex-wrap justify-between items-center">
                <div className="flex items-center gap-2 text-red-600 font-semibold">
                    <span className="bg-red-600 text-white px-2 py-1 text-xs rounded">Trending</span>
                    <span className="text-gray-600 font-normal">Labore sit justo amet eos sed, et sanctus dolor diam eos</span>
                </div>
                <span className="hidden sm:block text-xs text-gray-500">Monday, January 01, 2045</span>
            </div>

            {/* Header with Logo, Ad, and Search */}
            <div className="bg-white shadow flex flex-wrap items-center justify-between px-4 py-4">
                <Link to="/" className="text-3xl font-extrabold text-red-600">
                    NEWS<span className="text-gray-800">ROOM</span>
                </Link>
                <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 sm:mt-0">
                    <div className="bg-black text-white text-xs w-[200px] h-[50px] flex items-center justify-center uppercase">ADS 700x70px</div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Keyword"
                            className="border border-gray-300 rounded pl-3 pr-8 py-1 text-sm w-48"
                        />
                        <button className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17.65 17.65A7.5 7.5 0 1118 10.5a7.5 7.5 0 01-.35 7.15z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-red-600 text-white px-4 py-2">
                <ul className="flex flex-wrap gap-4 text-sm">
                    <li><Link to="/" className="font-semibold border-b-2 border-white">Home</Link></li>
                    <li><Link to="/categories" className="hover:text-gray-100">Categories</Link></li>
                    <li><Link to="/post" className="hover:text-gray-100">Single News</Link></li>
                    <li><Link to="#" className="hover:text-gray-100">Dropdown</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-100">Contact</Link></li>
                </ul>
            </nav>

        </>
    );
};

export default Navbar