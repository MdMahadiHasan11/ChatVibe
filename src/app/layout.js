import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./(component)/Navbar";

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

export const metadata = {
  title: "Chatvibe",
  description: "Connect with won",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-screen-2xl mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
