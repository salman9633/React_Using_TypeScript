import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Basic from './pages/Basic';

function App() {


  return (
    <>
      <Router>
        <Routes>
        
        
        <Route path="/" Component={Basic}/>
        

        </Routes>
      </Router>

    </>
  )
}

export default App
