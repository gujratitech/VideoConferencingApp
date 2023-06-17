import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home/Home';
import Room from './components/Room/Room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room/:roomid' element={<Room/>}/>
      </Routes>
    </div>
  );
}

export default App;
