import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Signup from './SignUp';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/Dashboard">Dashboard</Link>
    </div>
    <Routes>
    <Route exact path='/' element={<Signup/>}></Route>
    <Route exact path='/Dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
