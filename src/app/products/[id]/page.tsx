"use client"
// ⛔ Indica que este componente se ejecutará en el CLIENTE (navegador) y no en el servidor.
// Esto es obligatorio cuando usas hooks como `useParams` o `useRouter`.

import React from 'react'
import { useParams } from 'next/navigation'
// ✅ Importa el hook `useParams` que permite leer los parámetros dinámicos de la URL,
// por ejemplo, en `/products/1`, `id` será "1".

const Details = () => {

  const {id} = useParams();
  // 🔹 `useParams()` devuelve un objeto con los parámetros dinámicos definidos entre corchetes `[id]`.
  // En este caso, `{ id: '1' }` o el número correspondiente.

  return (
    <div>El ID del producto seleccionado es: {id}</div>
    // 🔸 Muestra en pantalla el id obtenido de la URL.
    // Podrías extender esto para buscar el producto con ese ID y mostrar su información.
  )
}

export default Details;
