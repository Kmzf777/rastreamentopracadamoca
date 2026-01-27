import type { Metadata } from "next";
import { Montserrat, Open_Sans, Great_Vibes } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praça da Moça Café",
  description: "Experiência de café premium que valoriza momentos de conexão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${greatVibes.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
