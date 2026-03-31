import React from 'react'
import { BiCheck } from 'react-icons/bi';

function DevToolsCart({ tool, tagStyles }) {
    return (
        <div className="border border-slate-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-all duration-300 relative group">

            <span className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold ${tagStyles[tool.tagType] ?? tagStyles.default}`}>
                {tool.tag}
            </span>

            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-50 transition-colors overflow-hidden">
                <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-10 h-10 object-contain"
                />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">{tool.name}</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {tool.description}
            </p>

            <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">${tool.price}</span>
                <span className="text-slate-400 text-sm">/{tool.period}</span>
            </div>

            <ul className="space-y-3 mb-8">
                {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <BiCheck size={16} className="text-green-500" />
                        {feature}
                    </li>
                ))}
            </ul>

            <button className="w-full bg-[#7C3AED] hover:bg-purple-700 text-white py-3 rounded-2xl font-bold transition-all shadow-lg shadow-purple-200">
                Buy Now
            </button>
        </div>
    )
}

export default DevToolsCart