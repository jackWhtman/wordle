import { useState, useEffect } from "react";
import Line from "./components/line";
import words from "./resource/words.json";
import "./styles.css";

const API_URL = "https://www.wordsUrl.com"; //replace with working URL


export default function App() {
  const [randomWord, setRandomWord] = useState('');
  const [guesses, setGuesses] = useState(Array(6).fill(''));
  const [currentGuess, setCurrentGuess] = useState('');
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  const [won, setWon] = useState(false);
  const [reset,setReset] = useState(false);

  const resetGame = (event)=>{
    event.preventDefault();
    setRandomWord(words[Math.floor(Math.random() * words.length)]);
    setGuesses(Array(6).fill(''))
    setCurrentGuess('');
    setCurrentGuessIndex(0);
    setWon(false);
    setReset(false);
  }

  useEffect(() => {
    // fetch(API_URL).then(resp=>resp.json()).then(data=>{
    //   setRandomWord(data[Math.floor(Math.random()*data.length)])
    // })
    setRandomWord(words[Math.floor(Math.random() * words.length)]);
  }, []);
  
  useEffect(() => {
    if(currentGuessIndex > 5){
        setReset(true);
      }
  }, [currentGuessIndex]);
  
  const handleType = (event) => {
      let isAlphabhet = event.key.match(/^[a-zA-Z]$/)?.length > 0;
      // let isWord = words.includes(currentGuess)
      if(event.key === 'Enter'){
        if(currentGuess.length === 5 && words.includes(currentGuess) 
              && !guesses.includes(currentGuess)){
          setGuesses((prev)=>{
          let newGuesses = [...prev];
          newGuesses[currentGuessIndex] = currentGuess;
          return newGuesses;
        });
          setCurrentGuessIndex(prev => prev + 1);
          setCurrentGuess('')
          if(currentGuess === randomWord){
            setWon(true);
          }
        }
      }else if(currentGuess.length < 5 && isAlphabhet ){
        setCurrentGuess((prev) => prev + event.key.toUpperCase()); 
      }else if(event.key === 'Backspace'){
        setCurrentGuess(currentGuess.slice(0,-1)); 
      }
    };

  useEffect(() => {
    if(!won){
    window.addEventListener('keydown', handleType);
    return () => window.removeEventListener('keydown', handleType);
    }
  }, [currentGuess,won]);

  return (
    <div className="App" onKeyDown={(e) => handleType(e)}>
      <h1>Wordle</h1>
      {/* {randomWord} */}
      <h5>Start typing to make a guess</h5>
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
      {(won || reset) && <button className={'reset'} onClick={e=>resetGame(e)}>RESET</button>}
      {reset && <h1 className='won'>Wrong!! <br/> The word is {randomWord}</h1>}
      {won && <h1 className='won'>You Guessed it Right</h1>}
    </div>
  );
}
