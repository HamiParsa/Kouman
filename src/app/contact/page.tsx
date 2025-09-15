"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiInstagram, SiYoutube, SiTiktok, SiMaildotru } from "react-icons/si";
import Image from "next/image";

export default function Contact() {
  // Array of social links with icons
  const socials = [
    {
      name: "Instagram",
      icon: <SiInstagram size={36} className="text-pink-400" />,
      link: "https://www.instagram.com/thekouman",
    },
    {
      name: "TikTok",
      icon: <SiTiktok size={36} className="text-pink-400" />,
      link: "https://www.tiktok.com/@thekouman",
    },
    {
      name: "YouTube",
      icon: <SiYoutube size={36} className="text-pink-400" />,
      link: "https://www.youtube.com/@kouman",
    },
    {
      name: "Email",
      icon: <SiMaildotru size={36} className="text-pink-400" />,
      link: "mailto:info@kouman.net",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-160px)] mt-[100px] px-6 py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center gap-16">
      {/* Header section with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-5xl font-extrabold text-pink-400 mb-4">
          Connect with K✦UMAN
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Stay updated with K✦UMAN latest collections, exclusive drops, and
          behind-the-scenes content. Follow us on social media or reach out
          directly—we love hearing from our community!
        </p>
      </motion.div>

      {/* Social media cards with hover animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl"
      >
        {socials.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(236,72,153,0.5)",
            }}
            className="flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-xl rounded-3xl p-6 cursor-pointer transition text-center"
          >
            {social.icon}
            <h3 className="text-pink-400 font-bold text-lg">{social.name}</h3>
          </motion.a>
        ))}
      </motion.div>

      {/* Brand philosophy / Why connect section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-4xl text-center flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-pink-400">
          Why Connect With Us?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          At K✦UMAN, we don’t just create clothing—we create experiences. By
          connecting with us on social media, you gain access to exclusive
          content, sneak peeks of upcoming collections, styling tips, and the
          story behind every design. Our community is at the heart of everything
          we do, and we love engaging with our fans and fashion enthusiasts.
        </p>
      </motion.div>

      {/* Call-to-action / Follow prompt */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="flex flex-col items-center gap-6"
      >
        <p className="text-gray-300 text-lg text-center max-w-2xl">
          Want to be the first to know about new drops and exclusive offers?
          Follow us on our social platforms or reach out directly via email.
        </p>
        <motion.a
          href="https://www.instagram.com/thekouman"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(236,72,153,0.5)",
          }}
          className="px-8 py-4 bg-pink-600 rounded-xl text-white font-bold cursor-pointer transition"
        >
          Follow on Instagram
        </motion.a>
      </motion.div>

      {/* Footer hero image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="flex justify-center  w-full max-w-5xl mx-auto h-80 relative rounded-3xl overflow-hidden shadow-lg"
      >
        <Image
          src="https://i.ibb.co/HTTFYN6P/T5.png"
          alt="K✦UMAN style"
          className="w-[300px] h-[400px] items-center"
          width={500}
          height={500}
        />
      </motion.div>
    </div>
  );
}
