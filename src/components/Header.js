import { APP_LOGO } from "../utils/constant";
import { CART_LOGO } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" alt="Food Delivery App Logo" src={APP_LOGO} />
      </div>
      <div className="nav-bar">
        <ul>
          <li>Online Statue: {onlineStatus ? "🟢" : " 🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contacts">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <img className="cart-logo" alt="Cart Logo" src={CART_LOGO} />
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                const toggle = loginBtn === "login" ? "logout" : "login";
                setLoginBtn(toggle);
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
