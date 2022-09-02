import { useState , createContext} from "react";



export const CartContext = createContext({
  cartDropDownShow: null,
  setCartDropDownShow: () => {}
});



export const CartProvider = ({children}) => {

  const [cartDropDownShow, setCartDropDownShow] = useState(false);
  const value = {cartDropDownShow, setCartDropDownShow};

  return <CartContext.Provider value={value}>
           {children}
         </CartContext.Provider>;

}
