import React from 'react'
import { BiPackage, BiRocket, BiUserPlus } from 'react-icons/bi';

const steps = [
    {
        id: '01',
        title: 'Create Account',
        description: 'Sign up for free in seconds. No credit card required to get started.',
        icon: <BiUserPlus size={32} className="text-[#7C3AED]" />,
    },
    {
        id: '02',
        title: 'Choose Products',
        description: 'Browse our catalog and select the tools that fit your needs.',
        icon: <BiPackage size={32} className="text-[#7C3AED]" />,
    },
    {
        id: '03',
        title: 'Start Creating',
        description: 'Download and start using your premium tools immediately.',
        icon: <BiRocket size={32} className="text-[#7C3AED]" />,
    },
];

function GetStarted() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="relative p-8 rounded-2xl border border-slate-100 bg-slate-50/50 flex flex-col items-center text-center transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            {/* Number Badge */}
                            <div className="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                {step.id}
                            </div>

                            {/* Icon Container */}
                            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                                {step.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default GetStarted