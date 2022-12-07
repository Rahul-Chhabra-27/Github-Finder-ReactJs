import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import Alert from "./components/ui/alert";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/not-found";
import { GithubProvider } from "./context/finder/finder-context";
import { Alertprovider } from "./context/alert/alert-context";
function App() {
  return (
    <Alertprovider>
      <GithubProvider>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <main className='container mx-auto px-3 pb-12'>
          <Alert></Alert>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/not-found' element={<NotFound />}></Route>
              <Route path='/*' element={<NotFound />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </GithubProvider>
    </Alertprovider>
  );
}

export default App;
