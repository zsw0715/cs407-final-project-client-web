import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ActiveTabProvider } from "./_context/ActiveTabContext";
import { SidebarProvider } from "./_context/SidebarContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knot Client (Web)",
  description: "CS407 Final Project - Knot Client Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <ActiveTabProvider>
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </ActiveTabProvider>
      </body>
    </html>
  );
}
