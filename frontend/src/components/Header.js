import { APP_LOGO } from "../utils/constant";
import { CART_LOGO } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center px-4 py-2 shadow-md">
      <div className="w-24 border rounded-lg shadow-lg">
        <img className="logo-img" alt="Food Delivery App Logo" src={APP_LOGO} />
      </div>
      <div>
        <ul className="flex items-center">
          <li className="p-4 font-bold text-lg">Online Status: {onlineStatus ? "🟢" : " 🔴"}</li>
          <li className="p-4 font-bold text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 font-bold text-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4 font-bold text-lg">
            <Link to="/contacts">Contact Us</Link>
          </li>
          <li className="p-4 font-bold text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="w-10">
            <img className="cart-logo" alt="Cart Logo" src={CART_LOGO} />
          </li>
          <li>
            <button
              className="font-bold border border-solid border-black px-4 py-2 m-4 rounded-md"
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