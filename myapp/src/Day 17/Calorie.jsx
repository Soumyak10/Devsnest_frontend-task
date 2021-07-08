const Calorie = (props) => {
  return (
    <div className="calorie">
      <h2>{props.food}</h2>
      <h3>{props.cal}</h3>
    </div>
  );
};

export default Calorie;
