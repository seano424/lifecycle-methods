import './App.css';
import Timeout from './components/Timeout'
import Wisdom from './components/Wisdom'
import Github from './components/Github'

function App() {
  return (
    <div className="App">
      <Timeout />
      <Wisdom />
      <Github username="seano424"/>
    </div>
  );
}

export default App;
