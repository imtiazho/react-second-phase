import React, { use } from "react";
import { useLoaderData } from "react-router";

const DataBase = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      DataBase : It should be private route Data. Quantity: {data.length}
    </div>
  );
};

export default DataBase;
