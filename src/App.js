import { useState, useEffect } from "react";
import Line from "./components/line";
import words from "./resource/words.json";
import "./styles.css";

const API_URL = "https://api.frontendexpert.io/api/fe/wordle-words";

export default function App() {
  const [randomWord, setRandomWord] = useState(null);
  const [guesses, setGuesses] = useState(Array(6).fill("abcde"));
  const [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    // fetch(API_URL).then(resp=>resp.json()).then(data=>{
    //   setRandomWord(data[Math.floor(Math.random()*data.length)])
    // })
    setRandomWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  useEffect(() => {
    const handleType = (event) => {
      console.log(event);
      setCurrentGuess((prev) => prev + event.key);
    };

    window.addEventListener("keydown", handleType);
    return () => window.removeEventListener("keydown", handleType);
  }, [currentGuess]);

  return (
    <div className="App" onKeyDown={(e) => handleType(e)}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {randomWord}
      <div className="board">
        {guesses.map((guess, i) => {
          return <Line key={i} guess={guess} />;
        })}
      </div>
    </div>
  );
}
