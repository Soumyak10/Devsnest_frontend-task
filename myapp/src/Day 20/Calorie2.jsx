const Calorie2 = ({ food, foods, setFoods }) => {
  let handleClick = () => {
    let newfood = foods.filter((el) => el.id !== food.id);
    setFoods(newfood);
  };
  return (
    <div className="calorie">
      <h2>{food.food}</h2>
      <h3>You have consumed {food.calorie} today </h3>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Calorie2;
