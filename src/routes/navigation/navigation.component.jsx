import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../component/cart-icon/cart-icon.component.jsx";
import CartDropDown from "../../component/cart-dropdown/cart-dropdown.component.jsx";
import {CartContext} from "../../contexts/cart.context.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {cartDropDownShow} = useContext(CartContext);

  // setCartDropDownShow(true);
  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
    {cartDropDownShow &&
        <CartDropDown/>
    }
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
