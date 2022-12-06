import { Route, Routes } from 'react-router-dom';
import Navbar from './components/ui/navbar';
import Footer from './components/ui/footer';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/not-found';

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className='container mx-auto px-3 pb-12'>
        <Routes>
          <Route path ='/' element={<Home />}></Route>
          <Route path ='/about' element={<About />}></Route>
          <Route path ='/not-found' element={<NotFound />}></Route>
          <Route path ='/*' element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
