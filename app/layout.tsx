import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar1 from "@/components/Navbar1";
import Footer from "@/components/Footer";
import Providers from "@/redux/Providers";
import NextAuthProvider from "@/components/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sajith_site",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Providers>
            <Navbar1 />
            {children}
            <Footer />
          </Providers>
        </NextAuthProvider>
      </body>
    </html>
  );
}
