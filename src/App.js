
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/Header"
import Footer from "./components/Footer"
// pages 
import Home from "./pages/Home"

function App() {
  return (
 <>
<Header />
<main>
  <Home />
</main>
<Footer />
 </>
  );
}

export default App;
