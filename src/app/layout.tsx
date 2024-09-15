import "reflect-metadata";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { Appbar } from "@/components/Appbar";

import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "IMPACT Recruitment Task",
  description: "IMPACT Recruitment Task",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Appbar />
        <div className="container mx-auto px-4">{children}</div>
        <ToastContainer />
      </body>
    </html>
  );
}
