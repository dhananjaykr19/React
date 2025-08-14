import React from 'react';
import ItemDescription from './ItemDescription.jsx';
import RestaurantCateogry from './RestaurantCateogry.jsx';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Hooks/useRestaurantMenu.js';
import Shimmer from './shimmar';

const RestaurantMenu = () => {
    const {resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    if (!resInfo) 
        return <Shimmer />;
        
    const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
    const rawItemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    return (
        <div className="mx-auto text-center mt-10">
            <ItemDescription resData={restaurantInfo}/>
            <RestaurantCateogry resData={rawItemCards}/>
        </div>
    );
};

export default RestaurantMenu;
