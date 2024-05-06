import { Inter } from "next/font/google";
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digitals-insight",
  description: "Created by Tony",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
