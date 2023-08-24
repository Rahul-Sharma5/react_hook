import logo from './logo.svg';
import './App.css';
import FocusInput from './Components/FocusInput';
import ClassTimer from './Components/ClassTimer';
import HookTimer from './Components/HookTimer';

function App() {
  return (
    <div className="App">
      <FocusInput/>
      <ClassTimer/>
      <HookTimer/>
    </div>
  );
}

export default App;
