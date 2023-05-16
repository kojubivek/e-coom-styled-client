import "./App.css";
import { Product } from "./components/Product";
import { Home } from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import { ProductPage } from "./pages/ProductPage";
import { RegisterPage } from "./pages/RegisterPage";

const App = () => {
  return (
    <div className="App">
      <RegisterPage />
    </div>
  );
};

export default App;
