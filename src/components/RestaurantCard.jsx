import React from "react";
import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const {
        name,
        cuisines,
        avgRating,
        sla,
        cloudinaryImageId,
    } = resData;

    return (
        <div className="res-card shadow-lg rounded-2xl overflow-hidden bg-white hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img
                className="w-full h-48 object-cover"
                src={`${IMG_URL}${cloudinaryImageId}`}
                alt={name}
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
                <p className="text-sm text-gray-500 mt-1 truncate">{cuisines.join(", ")}</p>
                <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-md">
                        ⭐ {avgRating}
                    </span>
                    <span className="text-sm text-gray-600 flex items-center gap-1">
                        ⏳ {sla.deliveryTime} mins
                    </span>
                </div>
            </div>
        </div>
    );
};

// Higher Order Component

export const withLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                    VEG
                </div>
                <RestaurantCard {...props} />
            </div>
        );
    }
}

export default RestaurantCard;
