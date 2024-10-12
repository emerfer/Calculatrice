"use client";
import { React, useState } from "react";

/**
 *
 * Affichage de la calculatrice basée avec ChatGPT
 *
 * Permet de faire des calculs comme n'importe quel
 * calculatrice disponible sur un appareil mobile
 *
 */

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full">
        <div className="mb-4 text-right">
          <input
            type="text"
            className="w-full bg-gray-100 p-2 rounded text-right"
            readOnly
          />
          <div className="text-2xl mt-2"></div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/"].map((value) => (
            <button key={value} className="p-4 bg-gray-200 rounded text-lg">
              {value}
            </button>
          ))}
          {["4", "5", "6", "*"].map((value) => (
            <button key={value} className="p-4 bg-gray-200 rounded text-lg">
              {value}
            </button>
          ))}
          {["1", "2", "3", "-"].map((value) => (
            <button key={value} className="p-4 bg-gray-200 rounded text-lg">
              {value}
            </button>
          ))}

          <button className="p-4 bg-gray-200 rounded text-lg">+/-</button>
          <button className="p-4 bg-gray-200 rounded text-lg">0</button>
          <button className="p-4 bg-gray-200 rounded text-lg">.</button>
          <button className="p-4 bg-gray-200 rounded text-lg">+</button>
          <button className="col-span-2 p-4 bg-red-400 rounded text-lg">
            C
          </button>
          <button className="col-span-2 p-4 bg-green-400 rounded text-lg">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
