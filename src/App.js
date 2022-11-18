import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Error404 from './pages/Error404';

function App() {
  return (
    <div className="pageContainer">
      <div className='ContentWrap'>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<Error404 />}/>
          </Routes>
      </div>
      <Footer />
    </div>
  )
};

export default App;
