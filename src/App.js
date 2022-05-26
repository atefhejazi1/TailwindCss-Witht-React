import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div>
      <Products />
      <Navbar />
      <About />
    </div>
  );
}

export default App;
