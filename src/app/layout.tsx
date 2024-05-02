import type { Metadata } from "next";
import "./globals.css";
import NextThemeProvider from "./providers";

export const metadata: Metadata = {
  title: {
    template: `Yuna's Protofolio | %s`,
    default: `2024`,
  },
  description: `Yuna's Protofolio 2024`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressContentEditableWarning>
      <body className="">
        <NextThemeProvider>
          <main>{children}</main>
        </NextThemeProvider>
      </body>
    </html>
  );
}
