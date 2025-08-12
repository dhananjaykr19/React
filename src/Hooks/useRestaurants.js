import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/constants';

const useRestaurants = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchRes();
    }, []);

    const fetchRes = async () => {
        const data = await fetch(`${API_URL}`);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return {allRestaurants, listOfRestaurants, setListOfRestaurants};
}

export default useRestaurants;