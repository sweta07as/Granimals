import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins, Manrope } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Granimals - Declare Your Freedom From Pain",
  description: "Get rid of your pain consulting best-in-class physiotherapists. Book a consultation with our experts now to get started on your journey to becoming a Granimal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${poppins.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
