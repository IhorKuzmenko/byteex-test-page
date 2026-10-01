import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Byteex",
  description: "Byteex product page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
