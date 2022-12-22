import './App.css';
import {BrowserRouter as Router,Link, Route, Routes } from "react-router-dom"
import Routing from './Routing';
import Form from './Form';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Dashboard">Dashboard</Link></div>
      <Routes>
      <Route exact path="/" element={<Form/>}/>
      <Route exact path="/Dashboard" element={<Routing/>}/>
      </Routes>

    </Router>
  );
}

export default App;
