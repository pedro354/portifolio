import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";
const poppins = Poppins({ subsets: ["latin"], weight:['400', '700'] });
export const metadata: Metadata = {
  title: "Portifólio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}, ) {
    return (
    <html lang="pt-BR" >
      <body className={poppins.className} >
        <div>
          <Header />
        </div>
        {children}
        <Footer />
        <Script src="https://unpkg.com/@popperjs/core@2" />
      </body>
    </html>
    
  );
}