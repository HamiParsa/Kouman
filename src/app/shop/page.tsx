"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Array of products to display on the shop page
const products = [
  {
    id: 1,
    name: "King Kourosh T-Shirt",
    price: "$35.00",
    image: "https://i.ibb.co/rfmc4Vg5/T9.png",
  },
  {
    id: 2,
    name: "Dogm Nabash T-Shirt",
    price: "$35.00",
    image: "https://i.ibb.co/GzjdRjW/T-1.png",
  },
  {
    id: 3,
    name: "Dogm Nabash T-Shirt",
    price: "$35.00",
    image: "https://i.ibb.co/Z6xGNZfS/T2.png",
  },
  {
    id: 4,
    name: "Zolaldel T-Shirt",
    price: "$35.00",
    image: "https://i.ibb.co/WN0V7TFq/T3.png",
  },
  {
    id: 5,
    name: "JooJoo T-Shirt",
    price: "$35.00",
    image: "https://i.ibb.co/XfR48rnF/T4.png",
  },
  {
    id: 6,
    name: "Mia Vs Kourosh T-Shirt",
    price: "$35.00",
    image: "https://i.ibb.co/HTTFYN6P/T5.png",
  },
  {
    id: 7,
    name: "Iman Desktop",
    price: "$35.00",
    image: "https://i.ibb.co/ccscStpw/T6.png",
  },
  {
    id: 8,
    name: "Kouman Cart Grey",
    price: "$35.00",
    image: "https://i.ibb.co/JWwT3pqy/T7.png",
  },
  {
    id: 9,
    name: "Kouman Cart Grey",
    price: "$35.00",
    image: "https://i.ibb.co/Rkb5mzZh/T8.png",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen mt-20 bg-black text-white px-6 py-16">
      {/* Page heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-pink-400">
        Kouman Merch
      </h1>

      <div className="flex justify-center">
        {/* Products grid */}
        <div className="w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 justify-items-center">
          {products.map((product) => (
            // Tilt effect for each product card
            <Tilt
              key={product.id}
              glareEnable={true}
              glareMaxOpacity={0.25}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl overflow-hidden transition-all duration-300"
              >
                {/* Product image */}
                <div className="relative w-full aspect-[4/3] p-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Product details */}
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                  <p className="text-gray-400 mb-3">{product.price}</p>
                  <Link
                    href={`/shop/${product.id}`}
                    className="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 hover:shadow transition text-sm inline-block"
                  >
                    View Product
                  </Link>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </main>
  );
}
