import React, { useState } from 'react'
import tools from '../data/dev-tools.json'
import DevToolsCart from './DevToolsCart';
import { IoCartOutline } from 'react-icons/io5';

const tagStyles = {
    popular: 'bg-purple-100 text-purple-700',
    new: 'bg-green-100 text-green-700',
    sale: 'bg-red-100 text-red-700',
    default: 'bg-slate-100 text-slate-600',
};

function DevTools() {
    const [activeTab, setActiveTab] = useState('Products');


    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Header Content */}
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl font-bold text-slate-900">Premium Digital Tools</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Choose from our curated collection of premium digital products designed
                        to boost your productivity and creativity.
                    </p>
                </div>

                {/* --- TOGGLE BUTTON DESIGN --- */}
                <div className="flex justify-center mb-16">
                    <div className="bg-slate-100 p-1.5 rounded-full flex items-center shadow-inner">
                        <button
                            onClick={() => setActiveTab('Products')}
                            className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === 'Products'
                                ? 'bg-[#7C3AED] text-white shadow-md'
                                : 'text-slate-500 hover:text-slate-800'
                                }`}
                        >
                            Products
                        </button>
                        <button
                            onClick={() => setActiveTab('Cart')}
                            className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === 'Cart'
                                ? 'bg-[#7C3AED] text-white shadow-md'
                                : 'text-slate-500 hover:text-slate-800'
                                }`}
                        >
                            Cart (0)
                        </button>
                    </div>
                </div>

                {/* --- PRODUCT GRID --- */}
                {activeTab === 'Products' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tools.map((tool) => (
                            <DevToolsCart key={tool.id} tool={tool} tagStyles={tagStyles} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                        <IoCartOutline size={35} className='mx-auto text-[#7C3AED]' />
                        <p className="text-slate-400">Your cart is empty</p>
                    </div>
                )}

            </div>
        </section>
    )
}

export default DevTools