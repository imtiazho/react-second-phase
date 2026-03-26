import React from "react";
import { BsCloudFog } from "react-icons/bs";
import { Link, useLoaderData, useParams } from "react-router";
import Header from "../Header/Header";
import { HiArrowNarrowLeft } from "react-icons/hi";

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const news = data.find(eachNews => eachNews.id == id);
  const { title, thumbnail_url, details, tags, author } = news;

  return (
    <div className="w-[90%] mx-auto">
      <Header></Header>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <div className="bg-white border border-gray-100 p-5 rounded-sm shadow-sm max-w-4xl mx-auto">
      {/* Featured Image */}
      <div className="w-full mb-6">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-auto object-cover rounded-sm"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
        {title}
      </h2>

      {/* Meta Information (Date & Tags) */}
      <div className="mb-4">
        <p className="text-gray-500 text-sm mb-2">
          {new Date(author?.published_date).toLocaleDateString("en-US", {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          <span className="mx-2">|</span>
          <span className="font-semibold text-gray-600">Tags: </span>
          {tags?.map((tag, index) => (
            <span key={index} className="text-gray-500 italic">
              {tag}{index < tags.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>

      {/* Details / Content */}
      <div className="text-gray-600 leading-relaxed mb-8 text-justify">
        <p>{details}</p>
      </div>

      {/* Back Button */}
      <div className="mt-6">
        <Link 
          to={`/category/${news.category_id}`}
          className="btn bg-[#D72347] hover:bg-[#b01d3a] text-white border-none rounded-none px-6 flex items-center gap-2 w-fit normal-case transition-colors"
        >
          <HiArrowNarrowLeft className="text-xl" />
          All news in this category
        </Link>
      </div>
    </div>
        </div>
        <div className="col-span-4 border">Right</div>
      </div>
    </div>
  );
};

export default NewsDetails;
