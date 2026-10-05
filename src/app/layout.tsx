import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Mona Photo Studio | AI Photo Studio in Paranda, Maharashtra",
  description: "AI photo portraits, creative photo editing, wedding photography and professional photo services from Mona Photo Studio in Paranda, Maharashtra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} font-sans text-stone-900 antialiased bg-stone-50`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
