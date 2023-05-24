import "./App.css";
import { Pay } from "./components/Pay";
import { Product } from "./components/Product";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { ProductList } from "./pages/ProductList";
import { ProductPage } from "./pages/ProductPage";
import { RegisterPage } from "./pages/RegisterPage";

const App = () => {
  return (
    <div className="App">
      <Pay />
    </div>
  );
};

export default App;
