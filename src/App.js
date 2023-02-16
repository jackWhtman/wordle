import { useState, useEffect } from "react";
import Line from "./components/line";
import words from "./resource/words.json";
import "./styles.css";

const API_URL = "https://api.frontendexpert.io/api/fe/wordle-words";


export default function App() {
  const [randomWord, setRandomWord] = useState(null);
  const [guesses, setGuesses] = useState(Array(6).fill(''));
  const [currentGuess, setCurrentGuess] = useState('');
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);

  useEffect(() => {
    // fetch(API_URL).then(resp=>resp.json()).then(data=>{
    //   setRandomWord(data[Math.floor(Math.random()*data.length)])
    // })
    setRandomWord(words[Math.floor(Math.random() * words.length)]);
  }, []);
  
  
  const handleType = (event) => {
      if(event.key === 'Enter'){
        setGuesses((prev)=>{
          let newGuesses = [...prev];
          newGuesses[currentGuessIndex] = currentGuess;
          return newGuesses;
        });
        if(currentGuess.length === 5){
          setCurrentGuessIndex(prev => prev + 1);
          setCurrentGuess('')
        }
      }
      if(currentGuess.length < 5){
        setCurrentGuess((prev) => prev + event.key); 
      }
    };

  useEffect(() => {
    window.addEventListener('keydown', handleType);
    return () => window.removeEventListener('keydown', handleType);
  }, [currentGuess]);

  return (
    <div className="App" onKeyDown={(e) => handleType(e)}>
      <h1>Wordle</h1>
      {randomWord}
      <div className="board">
        {guesses.map((guess, i) => {
          return <Line 
                  key={i} 
                  guess={currentGuessIndex === i ? currentGuess : guess} 
                  randomWord={randomWord}
                  isCurrentGuess={currentGuessIndex === i}
          />;
        })}
      </div>
    </div>
  );
}
