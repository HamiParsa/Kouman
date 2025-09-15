"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  // Array of feature objects to display on the About page
  const features = [
    {
      icon: "🎨",
      title: "Unique Designs",
      desc: "K✦UMAN brings bold and distinctive fashion for individuals who dare to express themselves.",
    },
    {
      icon: "💎",
      title: "Premium Quality",
      desc: "Every product is made with attention to detail, high-quality fabrics, and perfect fit.",
    },
    {
      icon: "🤝",
      title: "Customer First",
      desc: "Your satisfaction is our top priority. We craft experiences, not just products.",
    },
    {
      icon: "🚀",
      title: "Innovative Style",
      desc: "Combining modern streetwear aesthetics with timeless elegance.",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-160px)] mt-[100px] px-6 py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Container with fade-in animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col items-center gap-8"
      >
        {/* Page heading with slide-in animation */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-pink-400 text-center mb-6"
        >
          About K✦UMAN
        </motion.h1>

        {/* Description paragraph with fade-in from below */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 text-center text-lg max-w-3xl leading-relaxed"
        >
          K✦UMAN is a modern fashion brand dedicated to creating bold, stylish, 
          and high-quality apparel. Our mission is to empower individuals to 
          express themselves confidently while wearing unique designs crafted 
          with precision and care.
        </motion.p>

        {/* Features grid with fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12"
        >
          {features.map((f, idx) => (
            // Individual feature card with hover animation
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(236,72,153,0.5)" }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center gap-4 text-center cursor-pointer transition"
            >
              <div className="text-4xl">{f.icon}</div>
              <h3 className="text-xl font-bold text-pink-400">{f.title}</h3>
              <p className="text-gray-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Hero image with zoom-in animation */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="flex justify-center w-full max-w-5xl mx-auto h-80 relative rounded-3xl overflow-hidden shadow-lg"
      >
        <Image
          src="https://i.ibb.co/XfR48rnF/T4.png"
          alt="K✦UMAN style"
          className="w-[300px] h-[400px] items-center"
          width={500}
          height={500}
        />
      </motion.div>
    </div>
  );
}
