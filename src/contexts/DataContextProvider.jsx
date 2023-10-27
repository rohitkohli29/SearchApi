/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import DataContext from './DataContext'
const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/")
      .then((res) => {
        setData(res.data.products);
        console.log(res.data.products)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <DataContext.Provider value={{data,setData}}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
