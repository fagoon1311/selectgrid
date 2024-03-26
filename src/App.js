
import './App.css';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <h1 className='font-bold text-3xl'>Grid Selector</h1>
      <Grid rows={10} cols={10}/>
    </div>
  );
}

export default App;
