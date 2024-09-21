import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/shareComponent/Footer";
import Navbar from "@/components/shareComponent/Navbar/Navbar";
import Container from "@/components/shareComponent/Container";

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
    <html lang='en'>
      <body>
        <header>
          <Navbar></Navbar>
        </header>
        <main className='mx-auto bg-[#e2e7fc]'>
          <Container>
            <div className='min-h-[calc(100vh-280px)] py-12'>{children}</div>
          </Container>
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
