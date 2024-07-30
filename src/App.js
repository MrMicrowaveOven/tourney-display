import './App.css';

function App() {
  return (
    <div className="App">
      {[1,2,3,4,5,6,7,8].map(i => {
        return match("match" + i.toString())
      })}
    </div>
  );
}

const match = (name) =>
    <div className={`match ${name}`}>
        <input className="player-name player-name-top"/>
        <div className="hor-line hor-line-top"/>
        <div className='up-diagonal round-one joining'/>
        <div className='down-diagonal round-one joining'/>
        <input className="player-name player-name-bottom"/>
        <div className='hor-line hor-line-bottom'/>
    </div>

export default App;
