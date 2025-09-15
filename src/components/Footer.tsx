"use client";

import Link from "next/link";
import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-8 py-12 bg-black text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright text */}
        <p className="text-center md:text-left text-sm">
          © 2025 Kouman Merch ✦ All rights reserved.
        </p>

        {/* Social media links */}
        <div className="flex gap-6">
          <Link href="https://youtube.com/kouman" target="_blank" className="hover:text-pink-400 transition">
            <FaYoutube size={24} />
          </Link>
          <Link href="https://instagram.com/thekouman" target="_blank" className="hover:text-pink-400 transition">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://twitter.com/thekouman" target="_blank" className="hover:text-pink-400 transition">
            <FaTwitter size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
