import React from 'react'
import { Link } from 'react-router-dom'

const ItemDescription = ({resData}) => {

    const { name, avgRating, costForTwoMessage, locality, sla, totalRatingsString } = resData;
    return (
        <div className='mb-4'>
            <h1 className='text-3xl font-bold text-gray-800 mb-3'>{name}</h1>
            <div className='max-w-4xl shadow-lg bg-gray-50 rounded-xl mx-auto text-left p-4 border border-gray-200 space-y-4'>
                <div className='flex items-center gap-2 text-sm'>
                    <span className={`px-2 py-1 rounded-md text-white font-semibold ${
                        avgRating >= 4 ? 'bg-green-500' : 'bg-yellow-500'
                    }`}>
                        ⭐{avgRating}
                    </span>
                    <span className='font-bold text-sm'>({totalRatingsString})</span>
                    <span>•</span>
                    <span className='text-sm font-bold'>{costForTwoMessage}</span>
                </div>
                <div>
                    {/*TODO : Convert into Link */}
                    <Link
                        to="/"
                        className='text-orange-500 hover:underline text-sm font-medium'
                    >
                        {name}
                    </Link>
                </div>
                <div className='flex items-start gap-4'>
                    <div className='flex flex-col items-center'>
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <span className="w-[2] h-7 bg-gray-500"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    </div>
                    <div className="flex flex-col text-sm ">
                        <div className='mb-2'>
                            <span className="font-bold">Outlet</span>{" "}
                            <span className="text-gray-500">{locality}</span>
                        </div>
                        <div className="font-semibold">{sla?.deliveryTime - 5}–{sla?.deliveryTime} mins</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDescription;