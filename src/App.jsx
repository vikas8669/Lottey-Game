import "./App.css";
import Lottery from "./Lottery/Lottery";
import { sum } from "./Lottery/helper";
function App() {
  let winCondition = (ticekt) => {
    return sum (ticekt) === 15;
  };
  return (
    <>
      <div className="App">
        <Lottery winCondition={winCondition} />
      </div>
    </>
  );
}

export default App;
