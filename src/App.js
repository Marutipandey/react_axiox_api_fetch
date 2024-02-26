import './App.css';
import Home from './components/Home';
// App.js
import Navbar from './components/Navbar'; // Use default import syntax (without curly braces)
import {
  BrowserRouter as Router,
  
  Routes,
  Route,
  
} from "react-router-dom";
function App() {
  return (

    <div className="App">
      
      
      <Router>
      <Routes>
          <Route path="/" element={ <Navbar />}> 
          </Route>
          <Route path="/Home" element={<Home />} >    
          </Route>
          </Routes>  

          </Router>
    </div>

    
  );
}

export default App;
