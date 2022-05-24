import './App.css';
import React from 'react';
import Login from './components/login/Login';
import Dashboard from './components/Main-Dashboard/Dashboard/Dashboard';
import { Routes, Route } from "react-router-dom";
import Home2 from './components/Main-Dashboard/Home/Home2';
import About from './components/Main-Dashboard/Product/Product';
import Setting from './components/Main-Dashboard/Settings/SettingPage/Setting';
import './extarnal_Script.js'

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Login/> } />
        <Route  path='/Dashboard' element={<Dashboard/> } />
        <Route  path='/Home2' element={<Home2/> } />
        <Route  path='/About' element={<About/> } />
        <Route  path='/Setting' element={<Setting/> } />
      </Routes>
    </div>
  );
}

export default App;
