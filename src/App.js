
import './App.css';
import {  

  Routes,  
  Route,  
 
}   
from 'react-router-dom';  
import Exercise from './component/screens/exercise/Exercise';
import User from './component/screens/user/User';
function App() {
  return (
    <div className="App">
      <Routes>  
    <Route exact path='/' element={< Exercise />}></Route>  
    <Route exact path='/user' element={< User />}></Route>  
    
    
</Routes>  

      
    </div>
  );
}

export default App;
