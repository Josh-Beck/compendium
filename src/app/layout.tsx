import type { Metadata } from "next";
import './globals.css'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Siderbar from "@/components/Sidebar"

export const metadata: Metadata = {
  title: "Compendium!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  );
}
