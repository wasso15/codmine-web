import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Globe } from "lucide-react";

const cooperHewitt = localFont({
  src: "../public/fonts/CooperHewitt-Book.otf",
  variable: "--font-cooper-hewitt",
});

export const metadata: Metadata = {
  title: "Code Mine - Web ",
  description:
    "Accédez facilement aux textes légaux miniers officiels de la RDC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cooperHewitt.variable} antialiased`}>
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo and Title */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    MINISTÈRE
                  </div>
                  <div className="text-xs text-gray-600">DES MINES</div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#"
                  className="text-blue-600 border-b-2 border-blue-600 pb-1 text-sm font-medium"
                >
                  Accueil
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  Code minier
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  Règlement minier
                </a>
              </nav>

              {/* Language Selector */}
              <div className="flex items-center space-x-2 text-sm">
                <Globe className="w-4 h-4" />
                <span>Français</span>
              </div>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-blue-600 text-white py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm">
              Ministère des mines © 2024. Tous droits réservés.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
