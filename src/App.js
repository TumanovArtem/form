import './App.css';
import FunctionalForm from './FunctionalForm/FunctionalForm.js';
import ObjectOrientedForm from './ObjectOrientedForm/ObjectOrientedForm.js';

function App() {
  return (
    <div className="App">
      <FunctionalForm userName="Artem" age="23" />
      <ObjectOrientedForm userName="Alexandr" age="35" />
    </div>
  );
}

export default App;
