import type { Metadata } from "next";
import { Geist, Geist_Mono, Bubblegum_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import Provider from "./Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bubblegumSans = Bubblegum_Sans({
  weight: "400",
  variable: "--font-bubblegum-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Memoria",
  description: "S3 bucket++",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-900 ${geistSans.variable} ${geistMono.variable} ${bubblegumSans.variable} antialiased`}
      >
        <Provider>
          <Toaster position="bottom-right" reverseOrder={true} />
          {children}
        </Provider>
      </body>
    </html>
  );
}
