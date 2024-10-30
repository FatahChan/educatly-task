import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TanStackQueryProvider from "@/context/tan-stack-query-provider";
import { Toaster } from "@/components/ui/sonner";
import { ToggleBetweenLoadAndPageProvider } from "@/context/toggle-between-load-and-page-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dev Blog",
  description: "Your one stop shop for all things Dev",
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
        <ToggleBetweenLoadAndPageProvider>
          <TanStackQueryProvider>{children}</TanStackQueryProvider>
        </ToggleBetweenLoadAndPageProvider>
        <Toaster />
      </body>
    </html>
  );
}
