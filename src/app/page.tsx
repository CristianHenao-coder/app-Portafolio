"use client"


import { useEffect, useState } from "react";
import { count, error } from "console";
import Link from "next/link";
import { Notificaction } from '@/helpers/utils';
import { ToastContainer } from 'react-toastify';
import { Button } from "@/components/buttton/button"; // Ajusta la ruta según tu estructura
import { FaArrowRight } from "react-icons/fa"; // Ejemplo de icono

// ✅ Componente de Next.js para navegación interna sin recargar la página.

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count<0){
      Notificaction("que pasa vale", "error")
    }
    if (count>10){
      Notificaction("vampos por más", "success")
    }

  },[count])

  ///agregar toastre nuyevo botton impementado 

    const handleClick = () => {
    alert("¡Hiciste clic en el botón!");
  };


  const handleCountPlus = ()=> {

    if (count < 15) {setCount(count+1)
  }else {
     Notificaction("no se puede más", "error")
  }
}


 return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      {/*
        h-screen → hace que el contenedor ocupe el 100% de la altura de la pantalla.
        flex → usa Flexbox.
        flex-col → organiza los elementos en columna (primero el texto, luego el botón).
        justify-center → centra verticalmente.
        items-center → centra horizontalmente.
        bg-black → fondo completamente negro.
        text-white → todo el texto por defecto será blanco.
      */}

      <h1 className="text-4xl font-bold mb-8 tracking-wide">
        Bienvenido a mi Portafolio
      </h1>
      {/*
        text-4xl → fuente grande (~2.25rem).
        font-bold → texto en negrita fuerte.
        mb-8 → margen inferior de 2rem (espacio entre el título y el botón).
        tracking-wide → aumenta el espacio entre letras (más aire).
      */}

      <Link
        href={"/products"}
        className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300 shadow-lg cursor-pointer mb-6"
      >
        Ir a Productos
      </Link>
      {/*
        bg-purple-700 → color morado principal del botón.
        hover:bg-purple-800 → tono morado más oscuro al pasar el mouse.
        text-white → texto blanco sobre fondo morado.
        font-medium → grosor medio de fuente.
        py-3 px-6 → padding vertical 0.75rem y horizontal 1.5rem.
        rounded-xl → bordes redondeados grandes.
        transition-colors duration-300 → animación suave de cambio de color en 0.3s.
        shadow-lg → sombra suave para resaltar el botón.
        cursor-pointer → muestra el cursor tipo mano.
      */}

      {/* nuevo boton creado */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <Button label="Continuar" icon={<FaArrowRight />} onClick={handleClick} />
    </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-700 p-3 rounded-xl flex justify-center items-center mt-6">
            {/* Contenedor del contador con color azul morado */}
              <div className="flex items-center space-x-4">
                <div 
                  onClick={() => setCount(count - 1)} 
                  className="bg-purple-800 hover:bg-purple-900 text-white py-2 px-4 rounded-xl cursor-pointer"
                >
                  -1
                </div>
                <h2 className="text-white text-2xl">{count}</h2>
                <div 
                  onClick={() => setCount(0)} 
                  className="bg-purple-800 hover:bg-purple-900 text-white py-2 px-4 rounded-xl cursor-pointer"
                >
                  reset
                </div>
                <div 
                  onClick={handleCountPlus} 
                  className="bg-purple-800 hover:bg-purple-900 text-white py-2 px-4 rounded-xl cursor-pointer"
                >
                  +1
                </div>
                <ToastContainer/>

                
            </div>
      </div>
    </div>
  );
}