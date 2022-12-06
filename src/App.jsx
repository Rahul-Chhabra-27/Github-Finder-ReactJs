import Navbar from './components/ui/navbar';
import Footer from './components/ui/footer';

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main>Main</main>
      <Footer />
    </div>
  );
}

export default App;
