import React from 'react';
import { useSelector } from 'react-redux';

//import { Counter } from './features/Counter';
import './App.css';
import { selectUser } from './features/userSlice';
import Login from './Login';

function App() {
  //const user = useSelector(selectUser);
  return (
    <div className="App">
      
  
       <br />
       <br />
       <hr />
      
          
          <Login />  
     
    </div>
  );
}

export default App;
