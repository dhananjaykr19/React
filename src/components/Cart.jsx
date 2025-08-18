import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice';
import ItemList from './ItemList';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className='p-6 min-h-screen bg-gray-50'>
            <h1 className='text-3xl font-extrabold text-center mb-6 text-gray-800'>🛒 Your Cart</h1>
            <div className='w-10/12 md:w-6/12 lg:w-5/12 mx-auto bg-white rounded-2xl shadow-lg p-6'>
                {cartItems?.length > 0 && (
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-lg font-semibold text-gray-700'>
                            Items in your cart: {cartItems.length}
                        </h2>
                        <button
                            className='px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition'
                            onClick={handleClearCart}
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
                {cartItems?.length === 0 ? (
                    <div>
                        <p className='text-gray-500 text-lg font-medium'>
                            😔 Your cart is empty
                        </p>
                        <p className='text-gray-400 text-sm mt-1'>
                            Add some delicious food to see them here!
                        </p>
                    </div>
                ) : (
                    <ItemList items={cartItems} />
                )}
            </div>
        </div>
    )
}

export default Cart