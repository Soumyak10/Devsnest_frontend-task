import Calorie from "./Calorie";

const Calorie_card = (props) => {
  return (
    <div className="container">
      <h1> Calorie Read Only</h1>
      <div className="calorie-card">
        <Calorie food="Pizza" cal="you have consumed 56 cals today" />
        <Calorie food="Burger" cal="you have consumed 69 cals today" />
        <Calorie food="Coke" cal="you have consumed 500 cals today" />
        <Calorie food="Browne" cal="you have consumed 180 cals today" />
        <Calorie food="Fried rice" cal="you have consumed 90 cals today" />
        <Calorie food="Lassania" cal="you have consumed 200 cals today" />
        <Calorie food="Pani Puri" cal="you have consumed 10 cals today" />
      </div>
    </div>
  );
};

export default Calorie_card;
