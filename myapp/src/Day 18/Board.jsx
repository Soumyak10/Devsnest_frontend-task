const Square = (props) => {
  return <div className="box" style={{ background: props.bg }}></div>;
};

const Board = () => {
  return (
    <div className="card2" style={{ width: "340px", flexWrap: "wrap" }}>
      {[...Array(8).keys()].map((i) => {
        return [...Array(8).keys()].map((j) => {
          if (i % 2 === j % 2) {
            return <Square bg="black" />;
          }
          return <Square bg="white" />;
        });
      })}
    </div>
  );
};

export default Board;
