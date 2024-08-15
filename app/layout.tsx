import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EMI Calculator",
  description: "EMI Calculator for Home Loan, Car Loan & Personal Loan in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

	<meta http-equiv="x-ua-compatible" content="ie=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no" />
	<meta name="theme-color" content="#ffffff" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7513233271674477"
	crossOrigin="anonymous"></script>
	<meta name="google-adsense-account" content="ca-pub-7513233271674477" />

	<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'/>
	<title>EMI Calculator for Home Loan, Car Loan &amp; Personal Loan in India</title>

	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="EMI Calculator for Home Loan, Car Loan &amp; Personal Loan in India" />

	<meta property="og:site_name" content="EMI Calculator" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
