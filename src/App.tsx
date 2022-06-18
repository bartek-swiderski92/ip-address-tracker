import './App.scss';
// @ts-ignore
import Header from './Header.tsx';
// @ts-ignore
import DataDisplay from './DataDisplay.tsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <DataDisplay />
    </div>
  );
}

export default App;
