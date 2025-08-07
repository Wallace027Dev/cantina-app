import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import NewSale from "./pages/Sales/New";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/sales/new" element={<NewSale />} />

        <Route path="*" element={<h1>404 - Rota não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
