import React, { useEffect, useState } from "react";

export const useFetchAllItems = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10000000")
      .then((res) => res.json())
      .then((response) => {
        let arr = [];
        for (let i = 0; i < 100; i++) {
          arr = arr.concat(response.products);
        }
        setData(arr);
      });
  }, []);

  return data;
};
