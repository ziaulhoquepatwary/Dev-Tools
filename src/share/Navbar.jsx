import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Products', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Testimonials', href: '#' },
        { name: 'FAQ', href: '#' },
    ];


    return (
        <nav className="bg-violet-50 border-b border-violet-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Desktop Row */}
                <div className="flex justify-between items-center h-20">
                    <h1 className="text-3xl font-bold text-[#7C3AED]">DevTools</h1>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map(({ name, href }) => (
                            <a key={name} href={href}
                                className="text-gray-600 hover:text-[#7C3AED] font-medium transition-colors">
                                {name}
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-gray-600 hover:text-[#7C3AED] cursor-pointer">
                            <FiShoppingCart className="w-6 h-6" />
                        </button>

                        <button className="hidden sm:block text-gray-700 font-medium hover:text-[#7C3AED] cursor-pointer">
                            Login
                        </button>

                        <button className="hidden lg:block bg-[#7C3AED] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#6D28D9] transition-all cursor-pointer">
                            Get Started
                        </button>

                        <button onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-gray-600 hover:text-[#7C3AED] cursor-pointer">
                            {isOpen ? <HiX className="w-8 h-8" /> : <HiMenuAlt3 className="w-8 h-8" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out border-t border-violet-100
                    ${isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {navLinks.map(({ name, href }) => (
                        <a key={name} href={href}
                            className="block px-3 py-3 text-base font-medium text-gray-600 hover:bg-violet-100 hover:text-[#7C3AED] rounded-md">
                            {name}
                        </a>
                    ))}

                    <button className="block sm:hidden w-full text-left px-3 py-3 text-base font-medium text-gray-600 hover:text-[#7C3AED] cursor-pointer">
                        Login
                    </button>

                    <button className="mt-4 w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-3 rounded-full font-semibold cursor-pointer">
                        Get Started
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar