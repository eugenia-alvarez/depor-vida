import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "./ui/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DeporVida",
  description: "Depor Vida - Gimnasio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {children}
      <Footer/>
        </body>
    </html>
  );
}
