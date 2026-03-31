import React, { useState } from 'react'
import { BiCheck } from 'react-icons/bi';

const plans = [
    {
        name: 'Starter',
        price: '0',
        tagline: 'Perfect for getting started',
        features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
        buttonText: 'Get Started Free',
    },
    {
        name: 'Pro',
        price: '29',
        tagline: 'Best for professionals',
        features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
        buttonText: 'Start Pro Trial',
        popular: true,
    },
    {
        name: 'Enterprise',
        price: '99',
        tagline: 'For teams and businesses',
        features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
        buttonText: 'Contact Sales',
    },
];

function Pricing() {
    const [activePlan, setActivePlan] = useState('Pro');

    return (
        <section className="py-20 px-6 bg-violet-50">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Simple, Transparent Pricing</h2>
                    <p className="text-slate-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan) => {
                        const isActive = activePlan === plan.name

                        return (
                            <div
                                key={plan.name}
                                onClick={() => setActivePlan(plan.name)}
                                className={`relative flex flex-col p-8 rounded-3xl cursor-pointer transition-all duration-300 border-2 shadow-sm
                                    ${isActive
                                        ? 'bg-[#8B2CFF] border-[#8B2CFF] text-white scale-105 z-10 shadow-xl'
                                        : 'bg-white border-slate-100 text-slate-900 hover:border-purple-200'
                                    }`}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFF4D2] text-[#D97706] px-4 py-1 rounded-full text-xs font-bold border border-[#FDE68A]">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className={`text-sm ${isActive ? 'text-purple-100' : 'text-slate-500'}`}>
                                        {plan.tagline}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <span className="text-5xl font-bold">${plan.price}</span>
                                    <span className={`text-lg ${isActive ? 'text-purple-100' : 'text-slate-400'}`}>/Month</span>
                                </div>

                                {/* Features pushed to fill remaining space */}
                                <ul className="space-y-4 mb-10 flex-1">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm">
                                            <BiCheck size={18} className={isActive ? 'text-white' : 'text-green-500'} />
                                            <span className={isActive ? 'text-purple-50' : 'text-slate-600'}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-2xl font-bold transition-colors cursor-pointer
                                    ${isActive
                                        ? 'bg-white text-[#8B2CFF] hover:bg-slate-50'
                                        : 'bg-[#8B2CFF] text-white hover:bg-purple-700'
                                    }`}
                                >
                                    {plan.buttonText}
                                </button>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Pricing