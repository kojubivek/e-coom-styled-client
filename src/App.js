import "./App.css";
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
      <Cart />
    </div>
  );
};

export default App;
