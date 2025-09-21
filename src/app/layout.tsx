import type { Metadata } from "next";
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
          <main>{children}</main>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
