const WORD_LIMIT = 5;

export default function Line({ 
  guess, 
  randomWord, 
  isCurrentGuess 
  }) {
  const tiles = [];
  // const getClassName = (char,charIndex)=>{
  //   if(randomWord.charAt(charIndex)===char){
  //     return 'correct';
  //   } else if(randomWord.includes(char)){
  //     return 'close';
  //   } else {
  //     return 'incorrect';
  //   }
  // }
  
  for (let i = 0; i < WORD_LIMIT; i++) {
    let className = 'tiles';
    if(randomWord.charAt(charIndex)===char){
      className += 'correct';
    } else if(randomWord.includes(char)){
      className += 'close';
    } else {
      className += 'incorrect';
    }
    tiles.push(
      <div key={i} className={isCurrentGuess ? 'tiles' : className}>
        {guess[i]}
      </div>
    );
  }
  return <div className="line">{tiles}</div>;
}
