
import { useMemo, useState } from 'react'
import './App.css'
// use memo assignment 1
// function App() {
//  const [input, setInput] = useState(0)

// const answer = useMemo(() => {
//   let answer = 1;
//     for(let i = 1; i<= input; i++) {
//       answer = answer * i
//     }
//   return answer;
// },[input])

//   return (
//     <>
//       <input type="number" value={input} onChange={(e) => setInput(Number(e.target.value))}/>
//       <p>calculated Value: {answer}</p>
//     </>
//   )
// }

// export default App
const word = ["hi", "my", "name", "is", "Nikhil"];;
const totalLine = 1000;
const ALL_WORD = [];
for(let i = 0; i < totalLine; i++) {
  let sentence = "";
  for(let j = 0; j < word.length; j++) {
    sentence += word[Math.floor(Math.random() * word.length)]
    sentence += " "
  }
  ALL_WORD.push(sentence)
}

function App() {

  const [sentences, setSentences] = useState(ALL_WORD);
  const [filter, setFilter] = useState("");
  const filteredSentence = useMemo(() => {
    return sentences.filter(x => x.includes(filter))
  },[sentences, filter])
  return(
    <>
    <input type='text' onChange={(event) => {
      setFilter(event.target.value)
    }}/>
    {filteredSentence.map(word => <div key={1}>{word}</div>)}
    </>
  )
  
}

export default App