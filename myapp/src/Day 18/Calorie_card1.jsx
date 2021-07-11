import Calorie1 from "./Calorie1";
import { useEffect, usefood, useState } from "react";

const Calorie_card1 = () => {
  var mylist = [
    {
      id: 0,
      food: "Pizza",
      calorie: 56,
    },
    {
      id: 1,
      food: "Burger",
      calorie: 69,
    },
    {
      id: 2,
      food: "Coke",
      calorie: 500,
    },
    {
      id: 3,
      food: "Browine",
      calorie: 180,
    },
    {
      id: 4,
      food: "Fried rice",
      calorie: 90,
    },
    {
      id: 5,
      food: "Lassina",
      calorie: 200,
    },
    {
      id: 6,
      food: "Pani Puri",
      calorie: 10,
    },
  ];

  const [foods, setFoods] = useState(mylist);
  return (
    <div className="container">
      <h1> Calorie Read Only</h1>
      <div className="calorie-card">
        {foods.length > 0 ? (
          foods.map((item, id) => {
            return <Calorie1 foods={item} />;
          })
        ) : (
          <p>No items in list</p>
        )}
      </div>
    </div>
  );
};

export default Calorie_card1;
