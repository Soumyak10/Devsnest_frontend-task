const Calorie2 = ({ foods }) => {
  return (
    <div className="calorie">
      <h2 style={{ marginBottom: "32px" }}>{foods.food}</h2>
      <h3>You have consumed {foods.calorie} today </h3>
      {foods.calorie > 100 && (
        <h3 style={{ background: "red" }}>This food item is high in calorie</h3>
      )}
    </div>
  );
};

export default Calorie2;
