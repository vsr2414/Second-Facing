import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
const [cartItems,setCartItems] = useState({});
const url = "http://localhost:4000"
const [token,setToken] = useState("");
const [food_list,setFoodList] = useState([])

const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
        setCartItems((prev) => ({...prev, [itemId]: 1}))
    } else {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    if (token) {
        await axios.post(url+"/api/cart/add" , {itemId},{headers:{token}})
    }

}
const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    if (token) {
        await axios.post(url+"/api/cart/remove" , {itemId},{headers:{token}})
    }
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

const fetchFoodList = async ()  => {
    const response = await axios.get(url + "/api/food/list"); 
    setFoodList(response.data.data)
}

const loadCartData = async (token) => {
    const response = await axios.post(url+"/api/cart/get", {},{headers:{token}});
    setCartItems(response.data.cartData);
}
  
      useEffect(()=> {
         async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")){
            setToken (localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"));
        }
         }
    loadData();
      },[])


    const contextValue = {
        food_list,   
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        getTotalCartAmount,
        url,
        token,
        setToken


}

return ( 
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
)

}

export default StoreContextProvider;