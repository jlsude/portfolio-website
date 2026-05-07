import type { Metadata } from "next";
import Footer from "../components/layout/Footer";
import SecondaryWaves from "../features/about/SecondaryWaves";
import About from "./about/page";
import Mainpage from "./main/page";
import Projects from "./projects/page";

export const metadata: Metadata = {
  metadataBase: new URL("https://jlsude.web.app"),
  title: {
    default: "jlsude | Portfolio",
    template: "%s | jlsude",
  },
  description:
    "Portfolio of jlsude — Full Stack Developer. Projects, skills, and experience.",
  keywords: [
    "portfolio",
    "full stack developer",
    "react",
    "next.js",
    "typescript",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jlsude.web.app",
  },
  openGraph: {
    title: "jlsude | Portfolio",
    description:
      "Portfolio of jlsude — Full Stack Developer. Projects, skills, and experience.",
    url: "https://jlsude.web.app",
    siteName: "jlsude | Portfolio",
    images: [
      {
        url: "/static/og-image.png",
        width: 1200,
        height: 630,
        alt: "jlsude Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "jlsude | Portfolio",
    description:
      "Portfolio of jlsude — Full Stack Developer. Projects, skills, and experience.",
    images: ["/static/og-image.png"],
  },
};

export default function Page() {
  return (
    <main className="scrollBar dark bg-background relative overflow-x-hidden">
      <Mainpage />
      <About />
      <SecondaryWaves />
      <Projects />
      <Footer />
    </main>
  );
}
