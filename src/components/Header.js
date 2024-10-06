import { APP_LOGO } from "../utils/constant";
import { CART_LOGO } from "../utils/constant";

const Header = () => (
    <div className="header">
        <div className="logo">
            <img className="logo-img" alt="Food Delivery App Logo" src={APP_LOGO}/>
        </div>
        <div className="nav-bar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>
                    <img className="cart-logo" alt="Cart Logo" src={CART_LOGO} />
                </li>
            </ul>
        </div>
    </div>
);

export default Header