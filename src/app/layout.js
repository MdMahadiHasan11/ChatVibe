import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/shareComponent/Footer";
import Navbar from "@/components/shareComponent/Navbar/Navbar";
import Container from "@/components/shareComponent/Container";
import AuthProvider from "@/services/AuthProvider";
import { Toaster } from "react-hot-toast";

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
  description: "create with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <header>
            <Navbar></Navbar>
          </header>
          {/* bg-[#e2e7fc] */}
          <main className="mx-auto" style={{background:"linear-gradient(135deg, #e2e7fc 0%, #e2fcf5 100%)"}}>
            <Container>
              <div className="min-h-[calc(100vh-280px)] py-12">{children}</div>
            </Container>
          </main>
          <Footer></Footer>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
