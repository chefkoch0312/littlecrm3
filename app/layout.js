import { Inter } from "next/font/google";
import "./globals.css";

import myHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";

import '@/public/assets/css/style.css';
import MyHeader from "./components/MyHeader";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LittleCRM",
  description: "littlecrm v3.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>

        <header className="bg-orange-500 rounded-t-lg">
          <MyHeader />
        </header>

        <main>
          {children}
        </main>

        <footer className="bg-gray-200 rounded-b-lg">
          <MyFooter />
        </footer>

      </body>
    </html>
  );
}
