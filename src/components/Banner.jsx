import React from 'react'
import bannerImg from '../assets/banner.png'
import { FaPlay } from 'react-icons/fa'

function Banner() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#7C3AED] text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                    New: AI-Powered Tools Available
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                    Supercharge Your <br className="hidden md:block" /> Digital Workflow
                </h1>

                <p className="text-slate-600 text-lg max-w-xl mx-auto lg:mx-0">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                    <button className="bg-[#7C3AED] hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all cursor-pointer">
                        Explore Products
                    </button>
                    <button className="flex items-center gap-2 border border-slate-300 hover:border-[#7C3AED] px-8 py-3 rounded-full font-semibold text-slate-700 transition-all cursor-pointer">
                        <FaPlay size={18} className="text-[#7C3AED]" />
                        Watch Demo
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
                <img
                    src={bannerImg}
                    alt="Banner"
                    className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover"
                />
            </div>

        </section>
    )
}

export default Banner