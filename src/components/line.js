const WORD_LIMIT = 5;

export default function Line({ guess }) {
  const tiles = [];
  for (let i = 0; i < WORD_LIMIT; i++) {
    tiles.push(
      <div key={i} className="tiles">
        {guess[i]}
      </div>
    );
  }
  return <div className="line">{tiles}</div>;
}
