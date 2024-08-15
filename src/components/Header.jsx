import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import {
  Home,
  Info,
  Contactless,
  ShoppingCartCheckout,
  Wifi,
  WifiOff,
} from "@mui/icons-material";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const OnlineStatus = useOnlineStatus();
  const [loginbutton, setLoginButton] = useState("Logout");
  const { logedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <header className="header-container">
        <div className="logo-container">
          <Link to={"/"}>
            <img className="logo" src={LOGO_URL} />{" "}
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <div
                style={{
                  paddingRight: "8px",
                  justifyItems: "center",
                  display: "flex",
                }}
              >
                <Home />
              </div>
              <Link to={"/"}> Home</Link>
            </li>
            <li>
              <div
                style={{
                  paddingRight: "8px",
                  justifyItems: "center",
                  display: "flex",
                }}
              >
                <Info />
              </div>
              <Link to={"/about"}>About us</Link>
            </li>
            <li>
              <div
                style={{
                  paddingRight: "8px",
                  justifyItems: "center",
                  display: "flex",
                }}
              >
                <Contactless />
              </div>
              <Link to={"/contact"}>Contact</Link>
            </li>

            <li>
              <span style={{ paddingTop: "5px", display: "flex" }}>
                OnlineStatus:{" "}
                {OnlineStatus ? (
                  <div
                    style={{
                      paddingRight: "8px",
                      paddingLeft: "8px",
                      paddingBottom: "10px",
                      justifyItems: "center",
                      display: "flex",
                    }}
                  >
                    <Wifi sx={{ color: "lightgreen" }} />
                  </div>
                ) : (
                  <div
                    style={{
                      paddingRight: "8px",
                      paddingLeft: "8px",
                      justifyItems: "center",
                      display: "flex",
                    }}
                  >
                    <WifiOff sx={{ color: "red" }} />
                  </div>
                )}
              </span>

              <button
                className="px-6 mx-8 bg-green-600 rounded-lg"
                onClick={() => {
                  loginbutton === "Logout"
                    ? setLoginButton("Login")
                    : setLoginButton("Logout");
                }}
              >
                {loginbutton === "Logout" ? (
                  <Link to={"/about"}> {loginbutton} </Link>
                ) : (
                  <Link to={"/"}>{loginbutton}</Link>
                )}
              </button>
              <h1 className="text-sm mt-2 pr-3">{logedInUser}</h1>
            </li>
            <li style={{ paddingTop: "13px" }}>
              <div
                style={{
                  paddingRight: "8px",
                  justifyItems: "center",
                  display: "flex",
                }}
              >
                <Link to={"/cart"}>
                  {" "}
                  <ShoppingCartCheckout /> {cartItems.length}
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
