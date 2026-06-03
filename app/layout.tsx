import type { Metadata } from "next";
import { inter, sora } from "./fonts";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { NavbarWrapper } from "@/components/shared/navbar-wrapper";

export const metadata: Metadata = {
  title: "AAVORide - Outstation Taxi Booking App",
  description: "AAVORide outstation travel landing page",
  icons: {
    icon: [
      { url: "/Icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/con.svg",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${inter.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--page-background)] text-[var(--foreground)]">
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
