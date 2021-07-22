import { useState } from "react";
import "./Styles.css";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  button: {
    margin: "20px",
  },
  input: {
    margin: "30px 20px",
  },
});

const Calorie_Tracker = () => {
  const [item, setItem] = useState("");

  const additem = (newItem) => {
    setItem([...item, newItem]);
  };

  const updateItem = (index, newItem) => {
    setItem(
      item.map((items, i) => (i === index ? { ...items, ...newItem } : items))
    );
  };

  const removeItem = (index) => {
    setItem(item.filter((items, i) => i !== index));
  };
  return (
    <div className="container">
      <Addfooditem additem={additem} />
      <div className="items-container">
        {item.length == 0 ? (
          <h3>Start adding items</h3>
        ) : (
          item.map((items, index) => (
            <RenderItem
              items={items}
              key={index}
              index={index}
              updateItem={updateItem}
              removeItem={removeItem}
            />
          ))
        )}
      </div>
    </div>
  );
};

function Addfooditem({ additem }) {
  const [food, setFood] = useState("");
  const [cal, setCal] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    additem({ food, cal });
    setFood("");
    setCal("");
  };

  return (
    <form onSubmit={handleClick}>
      <h2>Calorie Tracker</h2>
      <div className="box">
        <TextField
          required
          label="Item Name"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        />
        <TextField
          required
          label="Calorie Amount"
          value={cal}
          onChange={(e) => setCal(e.target.value)}
          type="number"
          color="white"
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </div>
    </form>
  );
}

function RenderItem({ updateItem, removeItem, items, index }) {
  const classes = useStyles();
  const [isediting, setIsEditing] = useState(false);

  return (
    <div className="card">
      {isediting ? (
        <TextField
          required
          label="Item Name"
          value={items.food}
          onChange={(e) => updateItem(index, { food: e.target.value })}
          className={classes.input}
        />
      ) : (
        <h4>{items.food}</h4>
      )}
      {isediting ? (
        <TextField
          required
          label="Calorie Amount"
          value={items.cal}
          onChange={(e) => updateItem(index, { cal: e.target.value })}
          type="number"
          className={classes.input}
        />
      ) : (
        <p> You have consumed {items.cal} calories</p>
      )}

      <div>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => removeItem(index)}
          className={classes.button}
        >
          Delete
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setIsEditing(!isediting)}
          className={classes.button}
        >
          {isediting ? "Done" : "Edit"}
        </Button>
      </div>
    </div>
  );
}
export default Calorie_Tracker;
