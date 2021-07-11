const Calorie = (props) => {
  return (
    <div className="calorie">
      <h2 style={{ marginBottom: "32px" }}>{props.food}</h2>
      <h3>{props.cal}</h3>
    </div>
  );
};

export default Calorie;
