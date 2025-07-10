import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageContext";
import Footer from "@/components/Footer";
import ReactQueryProvider from "@/components/ReactQueryProvider";

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
        <ReactQueryProvider>
          <LanguageProvider>
            <div className=" w-[90%] lg:w-[80%]">
              <Header />
              <div className=" mt-32">{children}</div>
            </div>
          </LanguageProvider>
          <Footer year={anneeActuelle} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
