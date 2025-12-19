import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",

  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "meatdata and og images",
  description: "Next js metadata example",
  openGraph: {
    title: "Home Page",
    description: "Learn more about our company and team.",
    images: ["/cat.png"],
    url: "https://localhost:3000", // Replace with your actual URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
