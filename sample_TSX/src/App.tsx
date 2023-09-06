import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Basic from './pages/Basic';
import Events from './pages/Events';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Basic} />
          <Route path="/events" Component={Events} />
        </Routes>
      </Router>

    </>
  )
}

export default App
