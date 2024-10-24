import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItermList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4">
      <div className=" text-center">
        <h1 className="font-bold text-6xl text-center">Cart</h1>
        <button
          className="font-bold border-black border-2 px-2 py-1 rounded-md m-4"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 mx-auto my-10">
        {cartItems.length === 0 && (
          <h1 className="text-center">Cart is Empty! Please Add Items...!</h1>
        )}
        <ItemList itemCards={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
