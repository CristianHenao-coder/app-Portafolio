import Link from "next/link";
// ✅ Componente de Next.js para navegación interna sin recargar la página.

export default function Home() {
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
        className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300 shadow-lg cursor-pointer"
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
    </div>
  );
}
