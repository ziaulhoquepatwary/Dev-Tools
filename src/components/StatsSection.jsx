import React from 'react'

const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '200+', label: 'Premium Tools' },
    { value: '4.9', label: 'Rating' },
]

function StatsSection() {
    return (
        <section className="bg-[#7C3AED] py-15 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white divide-y md:divide-y-0 md:divide-x divide-purple-400/50">
                {stats.map(state => (
                    <div key={state.label} className="flex flex-col items-center justify-center space-y-2 pt-8 md:pt-0">
                        <span className="text-5xl font-bold">{state.value}</span>
                        <span className="text-purple-100 uppercase tracking-widest text-sm">{state.label}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StatsSection