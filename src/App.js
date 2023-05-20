import './App.css';
import EventBoxList from "./components/EventBoxList";

function App() {
  return (
    <div className="App">
        <div className="Table">
            <h1>Skindividual</h1>
            <EventBoxList query="/events?page=1&per-page=6"/>
        </div>
    </div>
  );
}

export default App;


