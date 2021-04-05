import './App.css';
import Ranking from './components/ranking';
import Games from './components/games';
import data from './play.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Ranking data={data}/>
      <Games data={data}/>
    </div>
  );
}

export default App;
