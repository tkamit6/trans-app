import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <div className="App">
    
     <Dashboard/>
    </div>
  );
}

export default App;
