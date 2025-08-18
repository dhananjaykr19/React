import React, { useState } from 'react';
import { IMG_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {

    // const [itemCount, setItemCount] = useState(0);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));
        // TODO: 
        // const itemId = item?.card?.info?.id;
        // setItemCount((prev) => ({
        //     ...prev,
        //     [itemId]: (prev[itemId] || 0) + 1,
        // }));
    }

    return (
        <div className="divide-y divide-gray-200">
            {items.map((item) => {
                const info = item?.card?.info;
                return (
                    <div
                        data-testid="foodItems"
                        key={info?.id}
                        className="flex justify-between items-start p-4 hover:bg-gray-50 transition-colors"
                    >
                        <div className="w-8/12">
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-gray-800 text-lg">
                                    {info?.name}
                                </span>
                                <span className="text-gray-600">
                                    ₹{info?.price ? info.price / 100 : info?.defaultPrice / 100}
                                </span>
                            </div>
                            {info?.description && (
                                <p className="text-sm text-gray-500 mt-1">
                                    {info.description}
                                </p>
                            )}
                        </div>
                        <div className="relative w-3/12 flex justify-center">
                            {info?.imageId && (
                                <img
                                    src={`${IMG_URL}${info.imageId}`}
                                    alt={info?.name}
                                    className="w-28 h-28 object-cover rounded-lg shadow-md"
                                />
                            )}
                            <button
                                className="absolute bottom-1 bg-white border border-gray-300 rounded-lg px-3 py-1 text-green-600 font-semibold shadow-sm hover:bg-green-50 transition-colors"
                                // value={itemCount}
                                // onChange={(e) => setItemCount(e.target.value)}
                                onClick={() => handleAddItem(item)} // dispatch action
                            >
                                Add + {/* Add {itemCount} */}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
