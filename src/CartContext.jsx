import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        return storedCartItems;
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        const existingItem = cartItems.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems, {...item, quantity: 1 }]);
        }
    }

    const removeFromCart = (item) => {
        const existingItem = cartItems.find(i => i.id === item.id);
        if (existingItem) {
            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                setCartItems([...cartItems]);
            } else {
                setCartItems(cartItems.filter(i => i.id!== existingItem.id));
            }
        }
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartCount }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}