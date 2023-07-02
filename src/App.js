import './App.css';
import Start from "./pages/Start";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
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
import {useEffect, useState} from "react";
import AuthService from "./api/AuthService";
import EventBus from "./api/EventBus";
import ScrollToTop from "./components/ScrollToTop";


function App() {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, []);

    const logOut = () => {
        AuthService.logout();
        setCurrentUser(null);
    };



    return (
    <div className="App">
        <BrowserRouter className="siteContainer">
            <Header user={currentUser}/>
            <div className="content">
                <Routes className="content container-fluid">
                    <Route path="/" element={<Start />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/account" element={<Account/>}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/test" element={<Test />}></Route>
                    <Route path="/checkout" element={<Checkout />}></Route>
                    <Route path="/events/:id" element={<Event />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/imprint" element={<Imprint />}></Route>
                </Routes>
            </div>
            <Footer/>
            <ScrollToTop/>
        </BrowserRouter>
    </div>
  );
}

export default App;

