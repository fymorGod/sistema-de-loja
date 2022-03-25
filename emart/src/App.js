import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
