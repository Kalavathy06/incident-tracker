import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SecureSight",
  description: "Smart Security Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}