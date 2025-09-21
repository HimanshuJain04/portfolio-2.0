import type { Metadata } from "next";
import { Footer } from "../components/common/footer";
import { Navbar } from "../components/common/navbar";
import { CustomThemeProvider } from "./CustomThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Himanshu Jain",
  description: "Himanshu Jain Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomThemeProvider>
          <header>
            <Navbar />
          </header>

          <main>{children}</main>

          <footer>
            <Footer />
          </footer>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
