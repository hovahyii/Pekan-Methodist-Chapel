import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { openGraphImage } from './shared-metadata'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "北根卫理布道所",
  description: "欢迎加入我们的敬拜和团契，共同领受上帝的爱。 ❤️",
  keywords: ["北根卫理布道所", "教会", "敬拜", "团契", "基督教", "pekan methodist chapel", "pekan chapel", "church in pekan", "pekan methodist", "北根教会"],  // Add your keywords here
  openGraph: {
    ...openGraphImage,
    title: "北根卫理布道所",
    description: "欢迎加入我们的敬拜和团契，共同领受上帝的爱。 ❤️",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cn">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
