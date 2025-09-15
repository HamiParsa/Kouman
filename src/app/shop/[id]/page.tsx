"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useCartStore } from "@/store/productStore";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  images: string[];
  sizes: string[];
}

// Array of products for the detail page
const products: Product[] = [
  {
    id: 1,
    name: "King Kourosh T-Shirt",
    price: "$35.00",
    description:
      "Experience the ultimate vibe with the King Kourosh T-Shirt. High-quality fabric, perfect fit, and bold style that rules the streets.",
    images: ["https://i.ibb.co/rfmc4Vg5/T9.png"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Dogm Nabash T-Shirt",
    price: "$35.00",
    description:
      "Stay bold and confident with the Dogm Nabash T-Shirt. Perfect for everyday wear with a sleek, stylish design.",
    images: ["https://i.ibb.co/GzjdRjW/T-1.png"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Dogm Nabash T-Shirt",
    price: "$35.00",
    description:
      "Comfort meets style in the Dogm Nabash T-Shirt. High-quality material for ultimate softness and durability.",
    images: ["https://i.ibb.co/Z6xGNZfS/T2.png"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Zolaldel T-Shirt",
    price: "$35.00",
    description:
      "Express yourself with the Zolaldel T-Shirt. Bold graphics and premium fabric for a standout look.",
    images: ["https://i.ibb.co/WN0V7TFq/T3.png"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "JooJoo T-Shirt",
    price: "$35.00",
    description:
      "The JooJoo T-Shirt combines comfort and style effortlessly. Perfect fit for a casual yet trendy outfit.",
    images: ["https://i.ibb.co/XfR48rnF/T4.png"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Mia Vs Kourosh T-Shirt",
    price: "$35.00",
    description:
      "Make a statement with the Mia Vs Kourosh T-Shirt. Unique design and soft fabric for everyday wear.",
    images: ["https://i.ibb.co/HTTFYN6P/T5.png"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Iman Desktop",
    price: "$35.00",
    description:
      "The Iman Desktop T-Shirt features a sleek design with ultimate comfort. Perfect for casual outings or work-from-home days.",
    images: ["https://i.ibb.co/ccscStpw/T6.png"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Kouman Cart Grey",
    price: "$35.00",
    description:
      "Kouman Cart Grey T-Shirt, a modern classic. Soft fabric with a stylish grey design that pairs well with any outfit.",
    images: ["https://i.ibb.co/JWwT3pqy/T7.png"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "Kouman Cart Grey",
    price: "$35.00",
    description:
      "Classic Kouman Cart Grey T-Shirt. Perfect for layering or wearing solo, combines comfort and style seamlessly.",
    images: ["https://i.ibb.co/Rkb5mzZh/T8.png"],
    sizes: ["S", "M", "L", "XL"],
  },
];

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  // Unwrap the promise to get product ID
  const { id } = use(params);
  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);

  // State hooks for image, quantity, and size selection
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "M");

  const addToCart = useCartStore((state) => state.addToCart);

  // Swipe handlers for image carousel
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setSelectedImage((prev) => (prev + 1) % (product?.images.length || 1)),
    onSwipedRight: () =>
      setSelectedImage(
        (prev) =>
          (prev - 1 + (product?.images.length || 1)) %
          (product?.images.length || 1)
      ),
    trackMouse: true,
  });

  // Return if product not found
  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white bg-black">
        <p>Product not found.</p>
      </main>
    );
  }

  // Add selected product to cart
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: 35,
      quantity,
      size: selectedSize,
      image: product.images[selectedImage],
    });
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col lg:flex-row gap-10">
      {/* Product images carousel */}
      <div className="lg:w-1/2 lg:mt-[200px] mt-20 flex flex-col items-center gap-4">
        <div
          {...handlers}
          className="relative w-full h-96 rounded-2xl overflow-hidden bg-white/5 shadow-lg cursor-grab"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail previews */}
        <div className="flex gap-3 mt-2">
          {product.images.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedImage(idx)}
              className={`w-20 h-20 rounded-xl overflow-hidden border-2 cursor-pointer transition ${
                selectedImage === idx ? "border-pink-500" : "border-white/10"
              }`}
            >
              <Image
                src={img}
                alt={`${product.name} ${idx + 1}`}
                width={80}
                height={80}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product details section */}
      <div className="lg:w-1/2 flex flex-col justify-center gap-6">
        <h1 className="text-4xl font-extrabold text-pink-400">
          {product.name}
        </h1>
        <p className="text-gray-300 text-xl">{product.price}</p>
        <p className="text-gray-400 leading-relaxed">{product.description}</p>

        {/* Size selection buttons */}
        <div className="flex items-center gap-4 mt-2">
          <span className="font-semibold">Size:</span>
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 rounded-lg border transition ${
                selectedSize === size
                  ? "bg-pink-600 text-white"
                  : "border-white/20 text-gray-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Quantity selector */}
        <div className="flex items-center gap-3 mt-2">
          <span className="font-semibold">Qty:</span>
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1 rounded-lg border border-white/20"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1 rounded-lg border border-white/20"
          >
            +
          </button>
        </div>

        {/* Add to cart button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(236,72,153,0.7)",
          }}
          onClick={handleAddToCart}
          className="px-6 py-3 bg-pink-600 rounded-xl hover:bg-pink-700 transition text-white font-semibold w-max mt-4"
        >
          Add to Cart
        </motion.button>

        {/* Back to shop link */}
        <Link
          href="/shop"
          className="text-pink-400 hover:underline mt-2 inline-block"
        >
          Back to Shop
        </Link>
      </div>
    </main>
  );
}
