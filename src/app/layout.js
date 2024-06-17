import { Inter } from "next/font/google";
import { Suspense } from "react";

// Imports from another files
import "./globals.css";
import Loading from "./loading";
import Provider from "./utils/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daily Sparks",
  description: "A News Article Website",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Provider>{children}</Provider>
        </Suspense>
      </body>
    </html>
  );
}
