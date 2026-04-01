import React from 'react'

function CartView({ cartItems, handleRemoveFromCart, clearAllCart }) {
    return (
        <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row items-center justify-between bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">

                    <div className="flex items-center gap-5 w-full">
                        {/* App Icon/Image placeholder */}
                        <div className="w-16 h-16 bg-slate-200 rounded-lg flex-shrink-0">
                            <img src={item.image} alt="" className="w-full h-full object-cover rounded-lg" />
                        </div>

                        {/* App Details */}
                        <div className="flex flex-col">
                            <h4 className="font-bold text-slate-800 text-lg">{item.name}</h4>
                            <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                                <span className="flex items-center gap-1">Price: ${item.price}</span>
                                <span className="flex items-center gap-1 text-orange-500">⭐ {item.rating || '5'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="w-full md:w-auto mt-4 md:mt-0">
                        <button
                            onClick={() => handleRemoveFromCart(item.id)}
                            className="w-full md:w-autohover:bg-emerald-500 px-8 py-2.5 rounded-lg font-semibold text-white bg-[#7C3AED] transition-colors cursor-pointer"
                        >
                            remove
                        </button>
                    </div>
                </div>
            ))}

            {cartItems.length > 0 && (
                <div className="flex justify-center mt-6">
                    <button onClick={clearAllCart} className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-3 rounded-xl font-bold shadow-lg transition-all transform hover:scale-105 cursor-pointer">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    )
}

export default CartView