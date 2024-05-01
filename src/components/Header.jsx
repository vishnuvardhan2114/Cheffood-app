import React from "react";
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
const Header = () => {
  const OnlineStatus = useOnlineStatus();
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
            <li style={{ paddingTop: "13px" }}>
              <div
                style={{
                  paddingRight: "8px",
                  justifyItems: "center",
                  display: "flex",
                }}
              >
                <ShoppingCartCheckout />
              </div>
              Cart
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
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
