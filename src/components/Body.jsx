import React, { useContext, useState } from "react";
import RestaurantCard, { withLabel } from './RestaurantCard'
import Shimmer from "./shimmar.jsx";
import { Link } from "react-router-dom";
import useShowStatus from "../Hooks/useShowStatus.js";
import useRestaurants from "../Hooks/useRestaurants.js";
import OfflineGame from "./OfflineGame.jsx";
import UserContext from "../context/UserContext.jsx";


const Body = () => {
    const [searchRestaurants, setSearchRestaurants] = useState("");
    const onlineStatus = useShowStatus();

    const {allRestaurants, listOfRestaurants, setListOfRestaurants } = useRestaurants();
    const RestaurantCardWithLabel = withLabel(RestaurantCard);
    // console.log("Body Render's count's", listOfRestaurants);
    const {loggedInUser, setUserName } = useContext(UserContext);
    if(!onlineStatus)
        return <OfflineGame />
    
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <input 
                        className="border border-gray-300 rounded-full px-4 py-2 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        placeholder="Search restaurants"
                        type="text" 
                        value={searchRestaurants}
                        onChange={(e) => setSearchRestaurants(e.target.value)}
                    />
                    {/* <input 
                        type="text" 
                        placeholder="enter username"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    /> */}
                    <button
                        className="px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 shadow transition"
                        onClick={() => {
                            setListOfRestaurants(allRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchRestaurants.toLowerCase())));
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="px-5 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 shadow-md transition"
                    onClick={() => {
                        setListOfRestaurants(listOfRestaurants.filter((res) => res.info.avgRating > 4));
                    }}
                >
                    ⭐ Top Rated
                </button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {listOfRestaurants.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={`/restaurants/${restaurant.info.id}`}
                        className="hover:scale-105 transform transition duration-300 shadow-md"
                    >
                        {!isNaN(restaurant.info.veg) ? <RestaurantCardWithLabel resData={restaurant.info}/> :<RestaurantCard resData={restaurant.info} />}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body; 


/*
<div className='body'>
            <div className='flex'>
                <div className="m-4 p-4">
                    <input 
                        className="border border-solid border-black rounded-full "
                        placeholder = " Search here..."
                        type="text" 
                        value={searchRestaurants}
                        onChange={(e) => setSearchRestaurants(e.target.value)}
                    />
                    <button className="px-4 bg-green-100 m-4 py-2 rounded-full"
                        onClick={() => {
                            setListOfRestaurants(allRestaurants.filter((res) => (
                                res.info.name.toLowerCase().includes(searchRestaurants.toLowerCase())
                            )))
                        }}
                    >
                        Search
                    </button>
                </div>
                <button 
                    className='filter-btn'
                    onClick={() => {
                        setListOfRestaurants((listOfRestaurants.filter((res) => (
                            res.info.avgRating > 4
                        ))))
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                 Sample restaurant cards 
                {
                    listOfRestaurants.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={`/restaurants/${restaurant.info.id}`}
                        >
                            <RestaurantCard  resData={restaurant.info} />
                        </Link>
                    ))
                }
            </div>
        </div>
*/