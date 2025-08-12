import React, { lazy, Suspense } from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';


// Chunking
// Code Splitting
// Dynamic Bondling
// Code Splitting
// lazy loading -- > On demand loading

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<h1>Loading....</h1>}>
                    <Grocery />
                </Suspense>
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu />
            }
        ],
        errorElement : <Error />,
    },
    // {
    //     path : '/about',
    //     element : <About />
    // },
    // {
    //     path : '/contact',
    //     element : <Contact />
    // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);


/*
import React from 'react';
import ReactDOM from "react-dom/client";

const styleCard = {
    backgroundColor : "#F0F0F0",
}

// component ---Header
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className='logo' 
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" alt="Food logo" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className='res-card' style={styleCard}>
            <img className='res-logo'
                src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/cvo1djhbwrgfqd64k0tl" alt="Meghana Food" 
            />
            <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.4⭐</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

*/