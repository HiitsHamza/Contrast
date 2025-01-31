import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "@/components/codedComponents/header";

const inter = Inter({
  weight: ["400","600","800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contrast",
  description: "Price Comparison app for Ecom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {/* <Header/> */}
        {children}
      </body>
    </html>
  );
}
