interface Product {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  marca: string;
  descripcion: string;
}
// 🧱 Interface que define la estructura que debe tener cada producto.

const products: Product[] = [
  // ✅ Array con productos de ejemplo.
  // Cada objeto cumple con la interfaz `Product`.
  {
    id: 1,
    nombre: "Laptop Lenovo IdeaPad 5",
    categoria: "Computadores",
    precio: 3200,
    stock: 15,
    marca: "Lenovo",
    descripcion: "Laptop con procesador AMD Ryzen 5, 16GB RAM y SSD de 512GB."
  },
  // ... más productos
];

export default products;
// 📤 Exporta los productos para usarlos en otras partes del proyecto.
