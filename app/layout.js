import "./globals.css"
import { Archivo_Narrow } from "next/font/google"

// Fonte de destaque (títulos, navbar). Variável: eixo 400–700 completo.
const display = Archivo_Narrow({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
})

export const metadata = {
  title: "Guima",
  description: "This is GUIMAs landing page",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={display.variable}>
      <body>{children}</body>
    </html>
  )
}
