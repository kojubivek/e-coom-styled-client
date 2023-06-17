import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Pay } from "./components/Pay";
import { Product } from "./components/Product";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { ProductList } from "./pages/ProductList";
import { ProductPage } from "./pages/ProductPage";
import { RegisterPage } from "./pages/RegisterPage";
import { BrowserRouter } from "react-router-dom";
import { Success } from "./pages/Success";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PrivateRouter } from "./components/PrivateRouter";
import { Dashboard } from "./pages/Dashboard";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* {!user && (
            <> */}
          <Route exact path="/login" element={<LoginPage />} />

          <Route exact path="/register" element={<RegisterPage />} />
          {/* </>
          )} */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:category" element={<ProductList />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />

          <Route
            path="/dashboard/:id"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
