import React from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { fontHeading, fontSans, fontUrban } from "@/assets/fonts";
import "@/styles/globals.css";
import Navbar from "@/components/layout/navbar";
import MobileNav from "@/components/layout/mobile-nav";
import { cn, constructMetadata } from "@/lib/utils";
import Footer from "@/components/layout/footer";
import Script from "next/script";

export const metadata = constructMetadata();
const GA_TRACKING_ID = "G-J7ELDS83NQ";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
               gtag('config', '${GA_TRACKING_ID}');
            `,
        }}
      />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MobileNav />
          <Navbar scroll={true} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
