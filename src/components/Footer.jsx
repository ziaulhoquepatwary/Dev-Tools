import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const footerLinks = [
    {
        title: 'Product',
        links: ['Features', 'Pricing', 'Templates', 'Integrations'],
    },
    {
        title: 'Company',
        links: ['About', 'Blog', 'Careers', 'Press'],
    },
    {
        title: 'Resources',
        links: ['Documentation', 'Help Center', 'Community', 'Contact'],
    },
]

const socialLinks = [
    { icon: <BsInstagram size={20} />, href: '#' },
    { icon: <FaFacebook size={20} />, href: '#' },
    { icon: <BsTwitter size={20} />, href: '#' },
]

function Footer() {
    return (
        <footer className="bg-[#0B1221] text-gray-400 py-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white tracking-tight">DevTools</h2>
                        <p className="max-w-xs leading-relaxed">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map(({ icon, href }, i) => (
                                <a key={i} href={href}
                                    className="bg-white p-2 rounded-full text-[#0B1221] hover:bg-gray-200 transition-all">
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {footerLinks.map(({ title, links }) => (
                        <div key={title} className="space-y-4">
                            <h3 className="text-white font-semibold text-lg">{title}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-gray-500">© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-8 text-sm">
                        {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
                            <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer