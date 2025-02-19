import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './Modules/About';
import Resume from './Modules/Resume';
import Navbar from './Modules/Navbar'

import Projects from './Modules/Projects';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          {/* <Route path='/about' element={<About/>}/> */}
          <Route path='/resume' element={<Resume/>}/>
        </Routes>

      </BrowserRouter>
    
    </>
  );
}

export default App;
