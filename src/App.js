import { useState, useEffect } from "react";
import Line from "./components/line";
import "./styles.css";

const API_URL = "https://api.frontendexpert.io/api/fe/wordle-words";
const words = [
  "ALBUM",
  "HINGE",
  "MONEY",
  "SCRAP",
  "GAMER",
  "GLASS",
  "SCOUR",
  "BEING",
  "DELVE",
  "YIELD",
  "METAL",
  "TIPSY",
  "SLUNG",
  "FARCE",
  "GECKO",
  "SHINE",
  "CANNY",
  "MIDST",
  "BADGE",
  "HOMER",
  "TRAIN",
  "STORY",
  "HAIRY",
  "FORGO",
  "LARVA",
  "TRASH",
  "ZESTY",
  "SHOWN",
  "HEIST",
  "ASKEW",
  "INERT",
  "OLIVE",
  "PLANT",
  "OXIDE",
  "CARGO",
  "FOYER",
  "FLAIR",
  "AMPLE",
  "CHEEK",
  "SHAME",
  "MINCE",
  "CHUNK",
  "ROYAL",
  "SQUAD",
  "BLACK",
  "STAIR",
  "SCARE",
  "FORAY",
  "COMMA",
  "NATAL",
  "SHAWL",
  "FEWER",
  "TROPE",
  "SNOUT",
  "LOWLY",
  "STOVE",
  "SHALL",
  "FOUND",
  "NYMPH",
  "EPOXY",
  "DEPOT",
  "CHEST",
  "PURGE",
  "SLOSH",
  "THEIR",
  "RENEW",
  "ALLOW",
  "SAUTE",
  "MOVIE",
  "CATER",
  "TEASE",
  "SMELT",
  "FOCUS",
  "TODAY",
  "WATCH",
  "LAPSE",
  "MONTH",
  "SWEET",
  "HOARD",
  "CLOTH",
  "BRINE",
  "AHEAD",
  "MOURN",
  "NASTY",
  "RUPEE",
  "CHOKE",
  "CHANT",
  "SPILL",
  "VIVID",
  "BLOKE",
  "TROVE",
  "THORN",
  "OTHER",
  "TACIT",
  "SWILL",
  "DODGE",
  "SHAKE",
  "CAULK",
  "AROMA",
  "CYNIC",
  "ROBIN",
  "ULTRA",
  "ULCER",
  "PAUSE",
  "HUMOR",
  "FRAME",
  "ELDER",
  "SKILL",
  "ALOFT",
  "PLEAT",
  "SHARD",
  "MOIST",
  "THOSE",
  "LIGHT",
  "WRUNG",
  "COULD",
  "PERKY",
  "MOUNT",
  "WHACK",
  "SUGAR",
  "KNOLL",
  "CRIMP",
  "WINCE",
  "PRICK",
  "ROBOT",
  "POINT",
  "PROXY",
  "SHIRE",
  "SOLAR",
  "PANIC",
  "TANGY",
  "ABBEY",
  "FAVOR",
  "DRINK",
  "QUERY",
  "GORGE",
  "CRANK",
  "SLUMP",
  "BANAL",
  "TIGER",
  "SIEGE",
  "TRUSS",
  "BOOST",
  "REBUS",
  "UNIFY",
  "TROLL",
  "TAPIR",
  "ASIDE",
  "FERRY",
  "ACUTE",
  "PICKY",
  "WEARY",
  "GRIPE",
  "CRAZE",
  "PLUCK",
  "BRAKE",
  "BATON",
  "CHAMP",
  "PEACH",
  "USING",
  "TRACE",
  "VITAL",
  "SONIC",
  "MASSE",
  "CONIC",
  "VIRAL",
  "RHINO",
  "BREAK",
  "TRIAD",
  "EPOCH",
  "USHER",
  "EXULT",
  "GRIME",
  "CHEAT",
  "SOLVE",
  "BRING",
  "PROVE",
  "STORE",
  "TILDE",
  "CLOCK",
  "WROTE",
  "RETCH",
  "PERCH",
  "ROUGE",
  "RADIO",
  "SURER",
  "FINER",
  "VODKA",
  "HERON",
  "CHILL",
  "GAUDY",
  "PITHY",
  "SMART",
  "BADLY",
  "ROGUE",
  "GROUP",
  "FIXER",
  "GROIN",
  "DUCHY",
  "COAST",
  "BLURT",
  "PULPY",
  "ALTAR",
  "GREAT",
  "BRIAR",
  "CLICK",
  "GOUGE",
  "WORLD",
  "ERODE",
  "BOOZY",
  "DOZEN",
  "FLING",
  "GROWL",
  "ABYSS",
  "STEED",
  "ENEMA",
  "JAUNT",
  "COMET",
  "TWEED",
  "PILOT",
  "DUTCH",
  "BELCH",
  "OUGHT",
  "DOWRY",
  "THUMB",
  "HYPER",
  "HATCH",
  "ALONE",
  "MOTOR",
  "ABACK",
  "GUILD",
  "KEBAB",
  "SPEND",
  "FJORD",
  "ESSAY",
  "SPRAY",
  "SPICY",
  "AGATE",
  "SALAD",
  "BASIC",
  "MOULT",
  "CORNY",
  "FORGE",
  "CIVIC",
  "ISLET",
  "LABOR",
  "GAMMA",
  "LYING",
  "AUDIT",
  "ROUND",
  "LOOPY",
  "LUSTY",
  "GOLEM",
  "GONER",
  "GREET",
  "START",
  "LAPEL",
  "BIOME",
  "PARRY",
  "SHRUB",
  "FRONT",
  "WOOER",
  "TOTEM",
  "FLICK",
  "DELTA",
  "BLEED",
  "ARGUE",
  "SWIRL",
  "ERROR",
  "AGREE",
  "OFFAL",
  "FLUME",
  "CRASS",
  "PANEL",
  "STOUT",
  "BRIBE",
  "DRAIN",
  "YEARN",
  "PRINT",
  "SEEDY",
  "IVORY",
  "BELLY",
  "STAND",
  "FIRST",
  "FORTH",
  "BOOBY",
  "FLESH",
  "UNMET",
  "LINEN",
  "MAXIM",
  "POUND",
  "MIMIC",
  "SPIKE",
  "CLUCK",
  "CRATE",
  "DIGIT",
  "REPAY",
  "SOWER",
  "CRAZY",
  "ADOBE",
  "OUTDO",
  "TRAWL",
  "WHELP",
  "UNFED",
  "PAPER",
  "STAFF",
  "CROAK",
  "HELIX",
  "FLOSS",
  "PRIDE",
  "BATTY",
  "REACT",
  "MARRY",
  "ABASE",
  "COLON",
  "STOOL",
  "CRUST",
  "FRESH",
  "DEATH",
  "MAJOR",
  "FEIGN",
  "ABATE",
  "BENCH",
  "QUIET",
  "GRADE",
  "STINK",
  "KARMA",
  "MODEL",
  "DWARF",
  "HEATH",
  "SERVE",
  "NAVAL",
  "EVADE",
  "FOCAL",
  "BLUSH",
  "AWAKE",
  "HUMPH",
  "SISSY",
  "REBUT",
  "CIGAR"
];
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
