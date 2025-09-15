"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/productStore";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Handle checkout and clear cart
  const handleCheckout = () => {
    if (cart.length === 0) return;
    cart.forEach((item) => removeFromCart(item.id, item.size));
    setOrderPlaced(true);
  };

  // Display order confirmation when checkout is completed
  if (orderPlaced)
    return (
      <div className="min-h-[calc(100vh-160px)] mt-[100px] flex justify-center items-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-lg p-10 text-center"
        >
          <p className="text-6xl mb-4">✅</p>
          <h2 className="text-2xl font-bold text-white mb-2">Order Placed!</h2>
          <p className="text-gray-300">Your order has been successfully placed!</p>
        </motion.div>
      </div>
    );

  // Display empty cart message if no items in cart
  if (cart.length === 0)
    return (
      <div className="min-h-[calc(100vh-160px)] mt-[100px] flex justify-center items-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-lg p-10 text-center"
        >
          <p className="text-6xl mb-4">🛒</p>
          <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
          <p className="text-gray-300">Add products to see them here.</p>
        </motion.div>
      </div>
    );

  return (
    <div className="min-h-[calc(100vh-160px)] mt-[100px] px-6 mx-auto max-w-5xl flex flex-col gap-6">
      <AnimatePresence>
        {cart.map((item) => (
          // Individual cart item with animation
          <motion.div
            key={item.id + item.size}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.02]"
          >
            {/* Product image */}
            <div className="relative w-full sm:w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-white/5">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain rounded-lg"
              />
            </div>

            {/* Product details */}
            <div className="flex-1 flex flex-col justify-between w-full gap-2">
              <div>
                <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-400 text-sm">Size: {item.size}</p>
                <p className="text-pink-400 font-bold mt-1">${item.price}</p>
              </div>

              {/* Quantity controls and remove button */}
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                  className="px-3 py-1 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition"
                >
                  -
                </button>
                <span className="px-3 text-white">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                  className="px-3 py-1 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="ml-3 text-red-500 hover:text-red-400 font-bold transition"
                >
                  ✕
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Total price display */}
      <div className="flex justify-between items-center mt-4 px-4 py-3 bg-white/10 backdrop-blur-lg rounded-xl shadow-md">
        <p className="text-white font-semibold text-lg">Total:</p>
        <p className="text-pink-400 font-bold text-xl">${totalPrice()}</p>
      </div>

      {/* Checkout button */}
      <button
        onClick={handleCheckout}
        className="w-full py-3 mt-4 bg-pink-600 hover:bg-pink-700 rounded-xl text-white font-bold transition-transform transform hover:scale-105"
      >
        Checkout
      </button>
    </div>
  );
}
