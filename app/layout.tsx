import { Exo, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const exo = Exo({ subsets: ["latin"] });

export const metadata = {
  title: "jlsude | Portfolio",
  description: "A portfolio website made by and for jlsude",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className={exo.className}>{children}</body>
    </html>
  );
}
