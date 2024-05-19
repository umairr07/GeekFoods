import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Foods = () => {
  const [food, setFood] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [countries, setCountries] = useState([]);
  const [slectCountry, setSlectCountry] = useState("");

  const navigate = useNavigate();
  async function getFood() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const data = await response.json();
    console.log(data);
    setFood(data.meals);
  }

  async function getCountries() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    const data2 = await response.json();
    console.log(data2);
    setCountries(data2.meals);
  }

  useEffect(() => {
    getFood();
  }, []);

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <h1 className="pt-32 text-center pb-5 text-3xl font-bold font-mono">
        Search you food recipe
      </h1>
      <div className=" flex justify-center gap-10">
        <input
          type="search"
          placeholder="Search food name"
          className="border-2 p-2 w-[300px]"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />

        <select
          name="countries"
          className="border-2 p-2"
          value={slectCountry}
          onChange={(e) => setSlectCountry(e.target.value)}
        >
          <option value="">All Cuisines</option>
          {countries
            .filter((item) => {
              return item.strArea.includes(slectCountry);
            })
            .map((item, idx) => {
              return (
                <option value={item.strArea} key={idx}>
                  {item.strArea}
                </option>
              );
            })}
        </select>
      </div>
      <div className="pt-14 flex flex-wrap gap-20 w-[90%] m-auto justify-center items-center">
        {food.length === 0 ? (
          <Loader />
        ) : (
          food
            .filter((item) => {
              return (
                item.strMeal.toLowerCase().includes(inputVal.toLowerCase()) &&
                (slectCountry === "" || item.strArea === slectCountry)
              );
            })
            .map((item) => {
              return (
                <div
                  key={item.idMeal}
                  className="flex flex-col p-2 gap-5 rounded-lg shadow-xl cursor-pointer
                "
                  onClick={() => {
                    console.log(item.idMeal);
                    navigate(`/fooddetails/${item.idMeal}`);
                  }}
                >
                  <img
                    src={item.strMealThumb}
                    alt=""
                    className="w-[300px] h-[200px] "
                  />
                  <div className="p-2">
                    <p className="text-xl font-semibold">{item.strMeal}</p>
                    <p className="text-[#9A9A9A]">{item.strArea} foods</p>
                    <p className="">#{item.strCategory}</p>
                  </div>
                </div>
              );
            })
        )}
      </div>
    </>
  );
};

export default Foods;
