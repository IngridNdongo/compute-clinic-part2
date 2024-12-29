import { Route, Routes } from 'react-router-dom';
import Login from '../src/Pages/Login';
import Case from './Pages/Case';
import History from './Pages/History';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import './style.css';

function App() {
  return (

   <div className="App">

      <Routes>
       <Route path="/" element={ <Login/>}/>
       <Route path="/History" element={ <History/>}/>
       <Route path="/Case" element={ <Case/>}/>
       <Route path="/Profile" element={ <Profile/>}/>
       <Route path="/Home" element={ <Home/>}/>
       
       
      </Routes>

   </div>
    
  );
}

export default App;
