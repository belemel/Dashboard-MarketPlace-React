import React from 'react'
import './App.css';
import AuthRoutes from './routes/AuthRoutes';
import DashboardRoutes from './routes/DashboardRoutes';


function App() {
  return (
    <div className="App">
        <DashboardRoutes />
    </div>
  );
}

export default App;
