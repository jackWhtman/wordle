const WORD_LIMIT = 5;

export default function Line({ 
  guess, 
  randomWord, 
  isCurrentGuess 
  }) {
  const tiles = [];
  const getClassName = (char,charIndex)=>{
    if(isCurrentGuess){
      if(randomWord[charIndex]===char){
      return 'correct';
    } else 
    if(randomWord?.includes(char)){
      return 'close';
    } else if(char !== ''){
      return 'incorrect';
    }
    }else{
      return '';
    }
  }
  
  for (let i = 0; i < WORD_LIMIT; i++) {
    let className = `tiles ${getClassName(guess[i],i)}`;
    tiles.push(
      <div key={i} className={isCurrentGuess ? 'tiles' : className}>
        {guess[i]}
      </div>
    );
  }
  return <div className="line">{tiles}</div>;
}
