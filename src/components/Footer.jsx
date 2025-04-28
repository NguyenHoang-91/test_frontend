import React from 'react'
import * as All from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="bg-gray-100 text-sm text-gray-700 py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                
                {/* Column 1: Site Info */}
                <div>
                    <a href="#" className="text-xl font-bold text-gray-800 block mb-2">SiteName</a>
                    <p className="mb-4 text-gray-600">Your awesome slogan goes here.</p>
                    <div className="flex space-x-2">
                        <a href="#" className="border border-gray-400 rounded-md p-2">
                            <All.FaFacebook />
                        </a>
                        <a href="#" className="border border-gray-400 rounded-md p-2">
                            <All.FaInstagram />
                        </a>
                        <a href="#" className="border border-gray-400 rounded-md p-2">
                            <All.FaTelegram />
                        </a>
                        <a href="#" className="border border-gray-400 rounded-md p-2">
                            <All.FaTwitter />
                        </a>
                        <a href="#" className="border border-gray-400 rounded-md p-2">
                            <All.FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Column 2: Categories */}
                <div>
                    <h3 className="font-semibold mb-4">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Tech", "Design", "Travel", "Food"].map((category, idx) => (
                            <span key={idx} className="border border-gray-400 text-gray-600 px-3 py-1 rounded-md">
                                {category}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Column 3: Tags */}
                <div>
                    <h3 className="font-semibold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {["HTML", "CSS", "JavaScript", "Tailwind", "Laravel"].map((tag, idx) => (
                            <span key={idx} className="border border-gray-400 text-gray-600 px-3 py-1 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Column 4: Quick Links */}
                <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {["About", "Advertise", "Privacy Policy", "Terms & Conditions", "Contact"].map((link, idx) => (
                            <li key={idx}>
                                <a href="#" className="hover:text-black">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer