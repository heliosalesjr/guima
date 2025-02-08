import "./globals.css"

export const metadata = {
  title: "Guima",
  description: "This is GUIMAs landing page",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

