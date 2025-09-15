"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Confetti from "react-confetti";

export default function HomePage() {
  const [showConfetti, setShowConfetti] = useState(false);

  // Trigger confetti effect on page load
  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen mt-20 flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Confetti animation */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative inline-block"
        >
          {/* Kouman logo image */}
          <Image
            src="https://kouman.net/wp-content/uploads/2023/05/Kouman-copy_1.webp"
            width={500}
            height={500}
            alt="Kouman Logo"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-4xl sm:text-6xl font-extrabold mt-6 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent"
        >
          Experience Kouman
        </motion.h2>

        {/* Subheadline with small image */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl text-gray-300 max-w-2xl mt-4 mb-8 flex justify-center items-center"
        >
          Wear the vibe. Rule the streets.
          <Image
            src="https://kouman.net/wp-content/uploads/2023/04/Asset-31.svg"
            width={50}
            height={50}
            alt=""
          />
        </motion.p>

        {/* Call-to-action button */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/shop"
            className="px-10 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-[0_0_30px_#ec4899] transition"
          >
            Shop Now
          </Link>
        </motion.div>
      </section>

      {/* About Kouman Section */}
      <section className="bg-black/90 py-12 px-6 mb-[50px] text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            What Is Kouman? It’s not just merch—it’s a lifestyle. A whirlwind of
            energy, chaos, and pure creativity packed into every piece. When you
            wear Kouman, you’re not just wearing clothes—you’re wearing an
            attitude, a vibe, and a revolution. Join the movement. Stand out.
            Own the streets.
          </p>
        </div>
      </section>
    </main>
  );
}
