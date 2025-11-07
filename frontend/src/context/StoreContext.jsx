import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
const [cartItems,setCartItems] = useState({});
const url = "http://localhost:4000"
const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
        setCartItems((prev) => ({...prev, [itemId]: 1}))
    } else {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
}
const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
}

const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += cartItems[item] * itemInfo.price;
        }
    }
    return totalAmount;
}

    const contextValue = {
        food_list,   
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        getTotalCartAmount,
        url

}

return ( 
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
)

}

export default StoreContextProvider;