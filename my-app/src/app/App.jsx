
import NewOrder from "../components/NewOrder/NewOrder";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AboutPage from "../pages/AboutPage/AboutPage";
import HomePage from "../pages/HomePage/HomePage";
import OrderDetailPage from "../pages/OrderDetailPage/OrderDetailPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/single-order/:orderId" element={<OrderDetailPage />} />
                <Route path="/new-order" element={<NewOrder />} />
                <Route />
            </Route>
        </Routes>
    );
}

export default App;