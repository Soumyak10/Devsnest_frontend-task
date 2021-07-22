import { useState, useEffect } from "react";
import "./Meme_style.css";
import "./Templates";
import Templates from "./Templates";
import Meme from "./Meme";

const Meme_gen = () => {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data.data.memes);
      });
  }, []);
  return (
    <div className="main-box">
      <h1>Meme-generator</h1>
      {meme === null ? (
        <Templates templates={templates} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
};

export default Meme_gen;
