import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import Stand1 from './Component/Stand/Stand1/Stand1';
import Stand2 from './Component/Stand/Stand2/Stand2';
import Stand3 from './Component/Stand/Stand3/Stand3';
import Stand4 from './Component/Stand/Stand4/Stand4';
import Stand5 from './Component/Stand/Stand5/Stand5';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/stand1" element={<Stand1 />} />
        <Route path="/stand2" element={<Stand2 />} />
        <Route path="/stand3" element={<Stand3 />} />
        <Route path="/stand4" element={<Stand4 />} />
        <Route path="/stand5" element={<Stand5 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
