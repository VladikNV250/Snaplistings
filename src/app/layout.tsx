import type { Metadata } from "next";
import { OpenSauceSans } from "./font";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Snaplistings",
  description: "Created by NeM1CHeff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OpenSauceSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
