import React from 'react';
import PropTypes from 'prop-types';
import { FaRegBookmark, FaShareAlt, FaEye, FaStar, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsCard = ({ eachNews }) => {
    const {
        id,
        title,
        author,
        thumbnail_url,
        details,
        total_view,
        rating,
    } = eachNews;

    return (
        <div className="card bg-base-100 border rounded-none mb-8">
            {/* Author Header */}
            <div className="flex justify-between items-center bg-base-200 p-4 rounded-t-lg">
                <div className="flex items-center gap-4">
                    <img 
                        className="w-10 h-10 rounded-full object-cover" 
                        src={author?.img} 
                        alt={author?.name} 
                    />
                    <div>
                        <p className="font-semibold text-sm">{author?.name || "Unknown Author"}</p>
                        <p className="text-xs text-gray-500">
                            {author?.published_date ? new Date(author.published_date).toLocaleDateString() : "No Date"}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 text-gray-500">
                    <FaRegBookmark className="cursor-pointer hover:text-primary" />
                    <FaShareAlt className="cursor-pointer hover:text-primary" />
                </div>
            </div>

            {/* News Body */}
            <div className="p-4 space-y-4">
                <h2 className="card-title text-xl font-bold leading-tight">
                    {title}
                </h2>
                
                <figure>
                    <img 
                        src={thumbnail_url} 
                        alt="News Thumbnail" 
                        className="w-full h-auto rounded-md object-cover"
                    />
                </figure>

                <p className="text-gray-600 text-sm">
                    {details.length > 250 ? (
                        <>
                            {details.slice(0, 250)}... 
                            <Link to={`/news-details/${id}`} className="text-orange-500 font-bold ml-1 hover:underline">
                                Read More
                            </Link>
                        </>
                    ) : details}
                </p>

                <hr className="border-gray-200" />

                {/* Rating & Views Footer */}
                <div className="flex justify-between items-center py-2">
                    <div className="flex items-center gap-2">
                        <div className="flex text-orange-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                        </div>
                        <span className="font-medium text-gray-600">{rating?.number}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                        <FaEye />
                        <span className="font-medium">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;