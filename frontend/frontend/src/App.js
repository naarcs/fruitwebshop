import { BrowserRouter as Router, NavLink, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from "./contact";
import Login from "./Login";
import Registration from "./Registration";
import AboutUs from "./aboutus";


function App() {
  const [loggedIn, setLoggedIn] = useState(false); // bejelentkezés állapot
  const [username, setUsername] = useState(""); // felhasználónév állapot
  const navigate = useNavigate;

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    const username = localStorage.getItem("username");

    if (loggedInStatus === "true" && username) {
      setLoggedIn(true);
      setUsername(username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    setLoggedIn(false);
    setUsername("");
    toast.success("Viszlát!", { autoClose: 1000 });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
            <NavLink to={`/Home`} className="nav-link">
                <span className="nav-link">Főoldal</span>
                </NavLink>
              </li>
              <li className="nav-item dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <NavLink to={`/products`} className="nav-link">
                <span className="nav-link dropdown-toggle">Termékek</span>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <NavLink id="" style={{ textDecoration: "none" }} to={""}>
                      <li>
                        <s className="dropdown-item" href="1">Általános gyümölcsök</s>
                      </li>
                    </NavLink>
                    <NavLink id="" style={{ textDecoration: "none" }} to={""}>
                      <li>
                        <s className="dropdown-item" href="2">Szezonális gyümölcsök</s>
                      </li>
                    </NavLink>
                    <NavLink id="" style={{ textDecoration: "none" }} to={""}>
                      <li>
                        <s className="dropdown-item" href="3">Egzotikus gyümölcsök</s>
                      </li>
                    </NavLink>
                  </ul>
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={`/contact`} className="nav-link">
                <span className="nav-link">Kapcsolat</span>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={`/orderinformation`} className="nav-link">
                <span className="nav-link">Rendelési információk</span>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={`/aboutus`} className="nav-link">
                <span className="nav-link">Rólunk</span>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={`/cart`} className="nav-link">
                <span className="nav-link">Kosár</span>
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              {loggedIn ? (
                <>
                  <li className="nav-item nav-link">Üdv, {username}!</li>
                  <button className="btn btn-danger btn-rounded" onClick={handleLogout}>Kijelentkezés</button>
                  <NavLink to="/basket" className="nav-link">
                    <i className="bi bi-basket-fill"></i> (
                    {JSON.parse(localStorage.getItem("cart"))?.length || 0})
                  </NavLink>
                  </>
                ) : (
                  <>
                  <NavLink id="" style={{ textDecoration: "none" }} to={"/Login"}>
                    <li className="nav-item nav-link">Bejelentkezés</li>
                  </NavLink>
                  <NavLink id="registration" style={{ textDecoration: "none" }} to={"/Registration"}>
                    <li className="nav-item nav-link">Regisztráció</li>
                  </NavLink>
                  </>)}
            </ul>
          </div>
        </nav>
        <Routes>
        <Route path="/contact" exact element={<Contact/>}/>

        <Route path="/aboutus" exact element={<AboutUs/>}/>
        <Route path="/Login" exact element={<Login/>}/>
        <Route path="/Registration" exact element={<Registration/>}/>
        </Routes>
      </Router>
      <ToastContainer />

      {/*LÁBLÉC KEZDETE*/}
      <footer className="text-center text-lg-start bg-dark text-muted header-footer-background-image">
        <section>
          <div className="container text-center text-md-start ">
            <div className="row ">
              <div className=" col-auto col-md-auto col-lg-4 col-xl-3 mx-auto mb-4">
                <br></br>
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="bold-white-color">ÉdenKert Webshop</i>
                </h6>
                <p className="bold-white-color">
                  Szeretettel köszöntjük az ÉdenKert honlapján!
                </p>
                <img
                  title="bblogo"
                  decoding="async"
                  src="/img/footerlogo.webp"
                  alt="brand"
                  width="240"
                  height="120"
                />
              </div>
              
              <div className="col-auto col-md-auto col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                <br></br>
                <h6 className="text-uppercase fw-bold mb-4 bold-white-color">
                  Elérhetőség:
                </h6>
                <ul>
                  <li className="bold-white-color">
                    Cím:3525 Miskolc, Palóczy László utca 3.
                  </li>
                  <li className="bold-white-color">Telefon: +36 46 500 930</li>
                  <li className="bold-white-color footermargin">
                    E-mail:gardenofeden@gmail.com
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="bold-white-color none-text-decoration"
                      href="https://www.kkszki.hu/"
                    >
                      <img
                        src="/img/kandologo.webp"
                        decoding="async"
                        title="kandologo"
                        alt="brand"
                        width="80"
                        height="80"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </footer>
      {/*Lábléc vége*/}
    </div>
  );
}

export default App;
