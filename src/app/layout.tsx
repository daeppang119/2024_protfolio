import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: {
    template: `Yuna's Protofolio | %s`,
    default: `2024 `,
  },
  description: `Yuna's Protofolio 2024`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="dark:bg-black">
        <Provider>
          <Header />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
