import "./cart-dropdown.styles.scss";
import Button from "../button/button.component.jsx";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className='cart-items' />
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
