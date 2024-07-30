import { useState } from 'react';
import './App.css';

function App() {
  const [winners, setWinners] = useState(new Array(100).fill(""))
  return (
    <div className="App">
      {[1,2,3,4,5,6,7,8].map(i => {
        return match("match" + i, winners[i])
      })}
    </div>
  );
}

const match = (name, winner = "") => {
    return (
        <div className={`match ${name}`}>
            <input className="player-name player-name-top"/>
            <input type="checkbox" className='winner-checkbox winner-checkbox-top'/>
            <div className="hor-line hor-line-top"/>
            <div className='up-diagonal round-one joining'/>
            <div className="player-name player-name-winner">{winner}</div>
            <div className='hor-line hor-line-winner'/>
            <div className='down-diagonal round-one joining'/>
            <input className="player-name player-name-bottom"/>
            <input type="checkbox" className='winner-checkbox winner-checkbox-bottom'/>
            <div className='hor-line hor-line-bottom'/>
        </div>
    )
}

export default App;
