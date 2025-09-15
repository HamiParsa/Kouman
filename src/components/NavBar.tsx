"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCartStore } from "@/store/productStore";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation links
  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Get cart items from store and calculate total quantity
  const cartItems = useCartStore((state) => state.cart);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl flex sm:text-4xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-orange-400"
        >
          K✦UMAN
          <Image
            className="mt-2 ml-1"
            width={50}
            height={50}
            src="https://kouman.net/wp-content/uploads/2023/04/Asset-31.svg"
            alt="logo"
          />
        </motion.h1>

        {/* Desktop navigation menu */}
        <nav className="hidden md:flex gap-10 text-gray-300 font-medium">
          {links.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <Link href={link.href} className="hover:text-pink-400 transition">
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop cart icon */}
        <Link href="/cart">
          <div className="hidden md:flex relative">
            <motion.button whileHover={{ scale: 1.1 }} className="relative">
              <ShoppingCart className="w-7 h-7 text-pink-400" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQuantity}
                </span>
              )}
            </motion.button>
          </div>
        </Link>

        {/* Mobile menu toggle button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 flex flex-col gap-6 py-6 px-6"
        >
          {/* Mobile links */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 font-semibold text-lg hover:text-pink-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile cart display */}
          <Link href='/cart'>
            <div onClick={() => setMobileMenuOpen(false)} className="mt-4 text-white flex">
              Cart
              <motion.button whileHover={{ scale: 1.05 }} className="relative">
                <ShoppingCart className="w-7 h-7 text-pink-400" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </motion.button>
            </div>
          </Link>
        </motion.nav>
      )}
    </header>
  );
}
