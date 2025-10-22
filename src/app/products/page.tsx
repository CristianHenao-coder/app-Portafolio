"use client"
// ⛔ Necesario porque usamos `useRouter` (hook del cliente).

import React from "react";
import products from "@/constant/main"; // ✅ Importa los datos simulados de productos.
import { useRouter } from "next/navigation"; // ✅ Permite navegar entre páginas programáticamente.

const Products = () => {
  const router = useRouter();
  // 🔹 Crea una instancia del enrutador de Next.js (App Router)
  // para poder redirigir al usuario con código.

  const handleProduct = (id: number) => {
    router.push(`/products/${id}`);
    // 🔸 Redirige al usuario a la ruta dinámica `/products/id`.
  };

  return (
    <div className="min-h-screen bg-purple-900 py-12 px-6">
      {/* 
        min-h-screen → altura mínima igual a la altura total de la ventana (100vh).
        bg-purple-900 → fondo morado oscuro, genera contraste elegante con las cajas negras.
        py-12 px-6 → padding vertical (3rem) y horizontal (1.5rem) para espaciar el contenido.
      */}

      <div className="max-w-6xl mx-auto">
        {/* 
          max-w-6xl → ancho máximo de 72rem (~1152px), mantiene el contenido centrado y legible.
          mx-auto → centra el contenedor horizontalmente.
        */}

        <h1 className="text-3xl font-bold text-white mb-10 text-center">
          Productos Tecnológicos
        </h1>
        {/* 
          text-3xl → tamaño de fuente grande (~1.875rem).
          font-bold → texto en negrita.
          text-white → color de texto blanco para contrastar con el fondo morado.
          mb-10 → margen inferior grande (2.5rem) para separación con el grid.
          text-center → centra el título horizontalmente.
        */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* 
            grid → convierte el contenedor en cuadrícula.
            grid-cols-1 → 1 columna por defecto.
            sm:grid-cols-2 → 2 columnas en pantallas ≥640px.
            md:grid-cols-3 → 3 columnas en pantallas ≥768px.
            gap-8 → espacio entre tarjetas de 2rem.
          */}

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black shadow-lg rounded-2xl p-6 border border-gray-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              // 💡 Cada tarjeta de producto:
              // bg-black → fondo negro elegante que contrasta con el fondo morado.
              // shadow-lg → sombra moderada para darle profundidad.
              // rounded-2xl → bordes muy redondeados para estilo moderno.
              // p-6 → padding interno de 1.5rem.
              // border-gray-800 → línea de borde gris muy oscuro, casi imperceptible.
              // hover:shadow-2xl → sombra más profunda al pasar el mouse (efecto flotante).
              // hover:-translate-y-1 → se eleva 4px al hacer hover.
              // transition-all duration-300 → animación suave de 0.3s para todos los efectos.
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                {product.nombre}
              </h2>
              {/* 
                text-xl → tamaño de texto grande (~1.25rem).
                font-semibold → seminegrita, para destacar el nombre.
                text-white → texto blanco para contraste sobre fondo negro.
                mb-2 → margen inferior de 0.5rem.
              */}

              <p className="text-sm text-gray-400 mb-1">
                <span className="font-medium text-gray-300">Categoría:</span>{" "}
                {product.categoria}
              </p>
              {/* 
                text-sm → texto pequeño (~0.875rem).
                text-gray-400 → gris claro, mantiene jerarquía sin quitar contraste.
                text-gray-300 (en el span) → un poco más claro para destacar “Categoría:”.
                mb-1 → separación sutil antes del siguiente texto.
              */}

              <p className="text-lg font-semibold text-purple-400 mb-4">
                ${product.precio.toLocaleString()}
              </p>
              {/* 
                text-lg → fuente mediana-grande (~1.125rem).
                font-semibold → seminegrita.
                text-purple-400 → tono morado más claro que resalta el precio.
                mb-4 → margen inferior para separar del botón.
              */}

              <button
                onClick={() => handleProduct(product.id)}
                className="w-full bg-purple-600 text-white font-medium py-2 rounded-xl hover:bg-purple-700 transition-colors duration-300 cursor-pointer"
              >
                Leer más
              </button>
              {/* 
                w-full → botón ocupa todo el ancho de la tarjeta.
                bg-purple-600 → morado medio para el botón.
                text-white → texto blanco sobre fondo morado.
                font-medium → grosor medio de fuente.
                py-2 → padding vertical de 0.5rem (12px).
                rounded-xl → bordes redondeados amplios.
                hover:bg-purple-700 → fondo morado más oscuro al pasar el mouse.
                transition-colors duration-300 → transición de color suave (0.3s).
                cursor-pointer → muestra el cursor de mano interactiva.
              */}
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
