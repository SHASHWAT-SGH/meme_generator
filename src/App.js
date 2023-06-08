import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Meme from "./components/Meme";
import { useState } from "react";

function App() {
  const [url, seturl] = useState("https://i.imgflip.com/43a45p.png");
  const [upperText, setUpperText] = useState();
  const [lowerText, setLowerText] = useState();
  const [fontColor, setFontColor] = useState("black");

  return (
    <>
      <Header />
      <Form
        seturl={seturl}
        setUpperText={setUpperText}
        setLowerText={setLowerText}
        setFontColor={setFontColor}
      />
      <Meme
        url={url}
        upperText={upperText}
        lowerText={lowerText}
        fontColor={fontColor}
      />
    </>
  );
}

export default App;
