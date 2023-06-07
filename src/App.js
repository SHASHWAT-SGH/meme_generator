import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Meme from "./components/Meme";
import { useState } from "react";

function App() {
  const [url, seturl] = useState("https://i.imgflip.com/43a45p.png");
  const [upperText, setUpperText] = useState();
  const [lowerText, setLowerText] = useState();
  return (
    <>
      <Header />
      <Form
        seturl={seturl}
        setUpperText={setUpperText}
        setLowerText={setLowerText}
      />
      <Meme url={url} upperText={upperText} lowerText={lowerText} />
    </>
  );
}

export default App;
