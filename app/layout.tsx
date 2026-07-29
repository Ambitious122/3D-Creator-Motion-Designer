import type { Metadata } from "next";
import { Kanit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aryan — 3D Creator & Frontend Developer",
  description:
    "Portfolio of Aryan, a 3D creator and frontend developer building immersive, motion-first web experiences.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${kanit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <div className="grain-overlay" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
