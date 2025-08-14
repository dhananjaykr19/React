import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCateogry = ({ resData }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCategory = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-6/12 mx-auto my-6 space-y-4">
            {resData?.map((res, index) => {
                const isOpen = openIndex === index;
                return (
                    <div 
                        key={index} 
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                    >
                        <div 
                            onClick={() => toggleCategory(index)}
                            className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            <span className="font-semibold text-gray-800 text-lg">
                                {res?.card?.card?.title} 
                                <span className="text-gray-500 text-sm"> ({res?.card?.card?.itemCards?.length || 0})</span>
                            </span>
                            <ChevronDown 
                                size={20} 
                                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                            />
                        </div>
                        {isOpen && <ItemList items={res?.card?.card?.itemCards}/>}
                    </div>
                );
            })}
        </div>
    );
};

export default RestaurantCateogry;
