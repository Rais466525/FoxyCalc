import type { Metadata } from "next"
import "./globals.scss"
import { Header } from './layout/Header/Header'

export const metadata: Metadata = {
  title: "Foxy",
  description: "FoxyCalc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
