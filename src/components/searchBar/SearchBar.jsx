import { useContext, useState } from "react";
import axios from "axios";
import DataContext from "../../contexts/DataContext";
const SearchBar = () => {
  const [queary, setQueary] = useState("");
  const { setData } = useContext(DataContext);

  const changeText = (event) => {
    setQueary(event.target.value);
  };

  const newData = () => {
    setData([])
    axios
      .get(`https://dummyjson.com/products/search?q=${queary}`)
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <div className="my-10">
      <input
        onChange={changeText}
        className="h-10 px-2 text-black w-2/5 mx-2"
        type="text"
        placeholder="Search products."
        name="search"
        id="search"
      />
      <button
        onClick={newData}
        className="border-solid border-2 border-white h-10 w-20 bg-blue-500"
        type="submit"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
