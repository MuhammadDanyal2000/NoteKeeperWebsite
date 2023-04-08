
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./menu.js"
import Important from './pages/important/important';
import Bin from './pages/bin/bin';
import Home from './pages/home/home';
import { NoteContextProvider } from './context/contex-provider';
function App() {
  return (
    <div className="App">
    <NoteContextProvider>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/important" element={<Important/>}/>
          <Route path="/bin" element={<Bin/>}/>
        </Routes>
      </Router>
      </NoteContextProvider>
    </div>
  );
}

export default App;
