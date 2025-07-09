import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const cooperHewitt = localFont({
  src: "../public/fonts/CooperHewitt-Book.otf",
  variable: "--font-cooper-hewitt",
});

export const metadata: Metadata = {
  title: "Code Mine - Web ",
  description:
    "Accédez facilement aux textes légaux miniers officiels de la RDC.",
};

const anneeActuelle = new Date().getFullYear();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cooperHewitt.variable}  antialiased flex flex-col items-center`}
      >
        <div className=" w-[90%] lg:w-[80%]">
          <Header />
          <div className=" mt-32">{children}</div>
        </div>

        <footer className="bg-blue-600 w-full text-white py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm">
              Ministère des mines © {anneeActuelle}. Tous droits réservés.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
