import type { Metadata } from "next";
import { inter, sora } from "./fonts";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title: "AAVORide - Outstation Taxi Booking App",
  description: "AAVORide outstation travel landing page",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.svg",
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
        <div className="pt-4 sm:pt-5 md:pt-6">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
