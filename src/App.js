import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Helmet } from "react-helmet";

import './App.css';

// Components
import Home from "./components/Home";
import Navigation from "./components/Navigation";


function App() {
  return (
    <>
    <Helmet title='VEO Veneht'/>
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </main>
      </div>
    </Router>
    </>
  );
}

export default App;