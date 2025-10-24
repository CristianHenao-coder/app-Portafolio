import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 🔸 Metadata que aparecerá en el head del HTML.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 🔹 Este layout envuelve todas las páginas de la app.
  // Todo lo que pongas aq  u í (header, footer, etc.) se verá en todas las rutas.

  return (
    <html lang="en">
      <body
      
        // antialiased → mejora la suavidad del texto (mejor renderizado de fuentes)
      >
        {children}
      </body>
    </html>
  );
}