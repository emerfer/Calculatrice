"use client";
import { Input } from "postcss";
import { React, useState } from "react";

/**
 *
 * Interface de la calculatrice basée avec ChatGPT
 *
 * Permet de faire des calculs comme n'importe quel
 * calculatrice disponible sur un appareil mobile
 *
 */

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const ajouterValeur = (valeur) => {
    setInput((base) => base + valeur);
  };

  const plusMoins = () => {
    let nombres = input.split(/([+\*/])/);
    let dernierNombre = nombres[nombres.length - 1];
    if (dernierNombre.startsWith("-")) {
      nombres[nombres.length - 1] = dernierNombre.slice(1);
    } else if (dernierNombre.indexOf("-") == -1) {
      nombres[nombres.length - 1] = "-" + dernierNombre;
    } else {
      nombres.pop();
      nombres = nombres.concat(dernierNombre.split(/([-/])/));
      nombres[nombres.length - 1] = "-" + nombres[nombres.length - 1];
    }
    setInput(nombres.join("").replace("--", "+"));
  };

  const supprimer = () => {
    setInput("");
    setResult("");
  };

  const calculer = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full">
        <div className="mb-4 text-right">
          <input
            type="text"
            className="w-full bg-gray-100 p-2 rounded text-right"
            value={input}
            readOnly
          />
          <div className="text-2xl mt-2">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/"].map((valeur) => (
            <button
              key={valeur}
              onClick={() => ajouterValeur(valeur)}
              className="p-4 bg-gray-200 rounded text-lg"
            >
              {valeur}
            </button>
          ))}
          {["4", "5", "6", "*"].map((valeur) => (
            <button
              key={valeur}
              onClick={() => ajouterValeur(valeur)}
              className="p-4 bg-gray-200 rounded text-lg"
            >
              {valeur}
            </button>
          ))}
          {["1", "2", "3", "-"].map((valeur) => (
            <button
              key={valeur}
              onClick={() => ajouterValeur(valeur)}
              className="p-4 bg-gray-200 rounded text-lg"
            >
              {valeur}
            </button>
          ))}

          <button
            onClick={plusMoins}
            className="p-4 bg-gray-200 rounded text-lg"
          >
            +/-
          </button>
          <button
            onClick={() => ajouterValeur("0")}
            className="p-4 bg-gray-200 rounded text-lg"
          >
            0
          </button>
          <button
            onClick={() => ajouterValeur(".")}
            className="p-4 bg-gray-200 rounded text-lg"
          >
            .
          </button>
          <button
            onClick={() => ajouterValeur("+")}
            className="p-4 bg-gray-200 rounded text-lg"
          >
            +
          </button>
          <button
            onClick={supprimer}
            className="col-span-2 p-4 bg-red-400 rounded text-lg"
          >
            C
          </button>
          <button
            onClick={calculer}
            className="col-span-2 p-4 bg-green-400 rounded text-lg"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
