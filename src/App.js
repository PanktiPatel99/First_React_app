import "./App.css";
import HelloWorld from "./components/HelloWorld";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className="App">
      <h1>React Application</h1>
      <HelloWorld></HelloWorld>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
