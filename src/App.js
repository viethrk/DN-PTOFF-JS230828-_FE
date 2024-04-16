import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/auth/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./pages/product/product.list";
import WrapperRoute from "./route/wrapper.route";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<WrapperRoute />}>
            <Route path="/product" element={<ProductList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
