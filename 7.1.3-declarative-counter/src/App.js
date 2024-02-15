import React, { useState } from 'react'

function App(){
  let [ counter, changeCounter ] = useState(1)
  window.changeCounter = changeCounter
  // counter++
  return (
    <div>
    <h1>Counter = {counter}</h1>
    <h4>Counter = {counter}</h4>
    <p>What happens if I add ++ to counter in the html: {counter++}</p>
    <p>The ++ activates in the previous line of html code and shows the previous value of counter, then adds one and now counter=: {counter}</p>
    </div>
  )
  
} 

export default App
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
        
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
      
//     </div>
//   );
// }

// export default App;
