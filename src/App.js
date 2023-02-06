// import logo from './logo.svg';
import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  // ram = "Jay Kastbhanjan dev"
  // https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c8116b26eaee4e9cb2bb9ef39e29aa9b

  // // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=732990b3e58d456280e08c11ae2d5064
  const pageSize = 15;
  // const apiKey = "c8116b26eaee4e9cb2bb9ef39e29aa9b"
  const apiKey = "732990b3e58d456280e08c11ae2d5064"
  // process.env.REACT_APP_NEWS_API;
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/general"><News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general" /></Route>
            <Route exact path="/business"><News key="business" apiKey={apiKey} pageSize={pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/health"><News key="health" apiKey={apiKey} pageSize={pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News key="science" apiKey={apiKey} pageSize={pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News key="sports" apiKey={apiKey} pageSize={pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
}


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

export default App;
