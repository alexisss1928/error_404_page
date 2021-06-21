import "./App.css";
import Menu from "./components/Menu";
import Image404 from "./components/Image404";
import Info404 from "./components/Info404";
import Footer404 from "./components/Footer404";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="py-3 px-5">
      <Menu />
      <section className="wrapper fluid-container mt-5">
        <div className="row">
          <Image404 />
          <Info404 />
        </div>
      </section>
      <Footer404 />
    </div>
  );
}

export default App;
