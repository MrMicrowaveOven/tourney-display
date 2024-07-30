import { useState } from 'react';
import './App.css';

function App() {
  const [winners, setWinners] = useState(new Array(100).fill(""))
  return (
    <div className="App">
      {[1,2,3,4,5,6,7,8].map(i => {
        return Match("match" + i)
      })}
    </div>
  );
}

const Match = (name) => {
    const [winner, setWinner] = useState(null)
    const [firstChecked, setFirstChecked] = useState(false)
    const [secondChecked, setSecondChecked] = useState(false)

    const [playerOneName, setPlayerOneName]= useState("")
    const [playerTwoName, setPlayerTwoName]= useState("")

    let winnerName = ""
    if (firstChecked) {
      winnerName = playerOneName
    } else if (secondChecked) {
      winnerName = playerTwoName
    }

    const winnerDisplay = 
        <div>
            <div className='up-diagonal round-one joining'/>
            <div className={`${winnerName ? "round-two" : "invisible"}`}>
                <div className={`player-name player-name-winner`}>{winnerName}</div>
                <div className='hor-line hor-line-winner'/>
            </div>
            <div className='down-diagonal round-one joining joining-bottom'/>
        </div>

    return (
        <div className={`match ${name}`} key={name}>
            <input
              className="player-name player-name-top"
              onChange={(event) => setPlayerOneName(event.target.value)}
            />
            <input
              type="checkbox"
              className='winner-checkbox winner-checkbox-top'
              onChange={() => setFirstChecked(!firstChecked)}
              disabled={secondChecked}
            />
            <div className="hor-line hor-line-top"/>
            {winnerDisplay}
            <input
              className="player-name player-name-bottom"
              onChange={(event) => setPlayerTwoName(event.target.value)}
            />
            <input
              type="checkbox"
              className='winner-checkbox winner-checkbox-bottom'
              onChange={() => setSecondChecked(!secondChecked)}
              disabled={firstChecked}
            />
            <div className='hor-line hor-line-bottom'/>
        </div>
    )
}

export default App;
