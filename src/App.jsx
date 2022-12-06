import Navbar from './components/ui/navbar';
import Footer from './components/ui/footer';

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className='container mx-auto px-3 pb-12'>Content</main>
      <Footer />
    </div>
  );
}

export default App;
