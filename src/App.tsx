import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Measurements from './components/Measurements';
import TrainRegister from './components/TrainingRegister';
import TrainTracking from './components/TrainingTracking';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/measurements" element={<Measurements />} />
                <Route path="/training-register" element={<TrainRegister />} />
                <Route path="/training-tracking" element={<TrainTracking />} />
            </Routes>
        </Router>
    );
};

export default App;
