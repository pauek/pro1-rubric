import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PRO1 - Rúbrica de Correcció",
  description:
    "Text detallant els aspectes i criteris de la" +
    " rúbrica de correcció de problemes de programació de PRO1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-8 max-w-[54rem] m-auto min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
