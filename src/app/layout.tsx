import type { Metadata } from "next";
import "./globals.css";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
