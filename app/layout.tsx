import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrueSite | Aerial Construction Progress Documentation",
  description:
    "Recurring drone photography and video documentation for construction projects across Southwest Florida.",
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
