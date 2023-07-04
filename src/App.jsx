import { Routes, Route } from "react-router-dom";
import './App.css'


import Main from './pages/Main.jsx';
import Stopwatch from './pages/Stopwatch';
import Timer from './pages/Timer';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/timer" element={<Timer/>} />
      </Routes>
    </div>
  )
}

export default App
