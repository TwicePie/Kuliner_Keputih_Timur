import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Landing />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
