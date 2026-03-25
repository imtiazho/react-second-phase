import React from "react";
import { BsCloudFog } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  return <div>NewsDetails : {id}</div>;
};

export default NewsDetails;
