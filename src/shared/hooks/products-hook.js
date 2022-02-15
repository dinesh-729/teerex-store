import { useState, useEffect, useCallback } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
            const productsData = await response.json();
        
            setProducts(productsData)
        }
        fetchProducts()
    }, [])

    const addCartItem = useCallback((product)=>{
        const cartProducts = [...cartItems]
        cartProducts.push(product)
        setCartItems(cartProducts)
    },[cartItems])

    const removeCartItem = useCallback((product)=>{
        const cartProducts = [...cartItems]
        for(let i=0; i<cartProducts.length; i++) {
            const cartProduct = cartProducts[i]
            if(cartProduct.id===product.id) {
                cartProducts.splice(i,1)
            }
        }
        setCartItems(cartProducts)
    },[cartItems])

    return { products, addCartItem, removeCartItem }
};
