import { Exo } from "next/font/google";
import "./globals.css";

const exo = Exo({ subsets: ["latin"] });

export const metadata = {
  title: "jlsude | Portfolio",
  description: "A portfolio website made by and for jlsude",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>{children}</body>
    </html>
  );
}
