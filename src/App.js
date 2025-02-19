import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './Modules/About';
import Resume from './Modules/Resume';
import Navbar from './Modules/Navbar'

import Projects from './Modules/Projects';
import './App.css';

function App() {
  return (
    <>
    {/* <Navbar/>
    <About/> */}
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/samrat-portfolio' element={<About/>}/>
          <Route path='/' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>

      </BrowserRouter>
    
    </>
  );
}

export default App;
