import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { LOGO_URL, NAV_ITEMS } from '../utils/constants';
import { Link, NavLink } from 'react-router-dom';
import useShowStatus from '../Hooks/useShowStatus';
import UserContext from '../context/UserContext';
import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    // if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render (just once)
    // if dependency array is [btnName] => called everytime btnName is updated
    useEffect(() => {
        // console.log("useEffect called");
    }, [btnName]);

    const onlineStatus = useShowStatus();

    const { loggedUser } = useContext(UserContext);
    // console.log(loggedUser);

    // Subscribing to the store using a selector 
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);
    

    return (
        <header className='bg-white shadow-lg sticky top-0 z-50'>
            <div className='mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-20'>
                    <Link
                        to="/"
                        className='flex items-center gap-2'
                    >   
                        <img 
                            src={LOGO_URL}
                            className='w-16 h-16 object-contain'
                        />
                        <span className='text-xl font-bold text-gray-800'>HungerHub</span>
                    </Link>
                    <nav className='hidden md:flex space-x-6 items-center'>
                        <span>
                            Status : {" "}
                            {onlineStatus ? (
                                <span>✅</span>
                            ) : (
                                <span>🔴</span>
                            )}
                        </span>
                        {
                            NAV_ITEMS.map((items) => {
                                const Icon = items.icon;
                                return (
                                    <NavLink
                                        key={items.to}
                                        to={items.to}
                                        className={({isActive }) => `flex items-center gap-2 text-gray-700 hover:text-orange-500 transition ${isActive  ? "font-semibold border-b-2 border-orange-500" : ""}`}
                                    >
                                        <Icon size={18} />
                                        {items.label}
                                    </NavLink>
                                );
                            })
                        }
                        <NavLink
                            to="/cart"
                            className="relative flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
                        >
                            <ShoppingCart size={20} />
                            <span className="text-lg font-medium">Cart</span>
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
                                {cartItems.length}
                                </span>
                            )}
                        </NavLink>
                        <button
                            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
                            className='px-4 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition'
                        >
                            {btnName}
                        </button>
                        {/* <h3>{loggedUser}</h3> */}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;

/*
<div className="flex justify-between p-5 shadow-lg mb-2 h-28 px-4 py-4">
            <div >
                <img 
                    className='w-24 ' 
                    src={LOGO_URL}
                    alt="Food logo" 
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className='px-4'>Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className='px-4'>
                        <Link 
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className='px-4'>
                        <Link
                            to="/about"
                        >
                            About Us
                        </Link>
                    </li>
                    <li className='px-4'>
                        <Link
                            to="/contact"
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li className='px-4'>
                        <Link
                            to="/grocery"
                        >
                            Grocery
                        </Link>
                    </li>
                    <li className='px-4'>Cart 🛒</li>
                    <button 
                        className='login-btn'
                        onClick={() => {
                            (btnName === "Login") ? setBtnName("Logout") : setBtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
*/