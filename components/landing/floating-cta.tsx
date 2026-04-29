"use client";


import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Whatsapp from "@/public/logo.png"
import Phone from "@/public/telephone.png"



export function FloatingCTA() {

  return (
    <div
      style={{
      }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-transform duration-300 ease-out hidden md:flex flex-col gap-3"
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center text-white rounded-l-xl transition-shadow duration-200 overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.6)]"
      >
        
        <span className="pr-1">
          <Image
            src={Whatsapp} 
            alt="whatsapp"
            width={50}
            height={50}
            className="w-12 h-12"
          />
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919876543210"
        className="group flex items-center rounded-l-xl animate-pulse"
      >
        
        <span className="pr-1">
          <Image
            src={Phone} 
            alt="whatsapp"
            width={50}
            height={50}
            className="w-12 h-12"
          />
        </span>
      </a>

      {/* Book Consultation Button */}
      <button
        className="group flex items-center rounded-l-xl animate-pulse"
      >
        
        <span className="pr-1">
          <Image
            src={Whatsapp} 
            alt="whatsapp"
            width={50}
            height={50}
            className="w-12 h-12"
          />
        </span>
      </button>
    </div>
  );
}
