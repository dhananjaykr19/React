import React from 'react';
import ItemList from './ItemList.jsx';
import ItemDescription from './ItemDescription.jsx';

const RestaurantMenu = () => {
    // const rawItemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    return (
        <div className="mx-auto text-center mt-10">
            <ItemDescription />
            <ItemList />
        </div>
    );
};

export default RestaurantMenu;
