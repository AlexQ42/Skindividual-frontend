import './App.css';
import Start from "./pages/Start";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";
import Test from "./pages/Test";
import Cart from "./pages/Cart";
import Event from "./pages/Event";
import Imprint from "./pages/Imprint";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes className="content container-fluid">
                <Route path="/" element={<Start />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/account" element={<Account/>}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/test" element={<Test />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                <Route path="/event" element={<Event />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/imprint" element={<Imprint />}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;

