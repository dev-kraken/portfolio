import React from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { fontHeading, fontSans, fontUrban } from "@/assets/fonts";
import "@/styles/globals.css";
import Navbar from "@/components/layout/navbar";
import MobileNav from "@/components/layout/mobile-nav";
import { cn, constructMetadata } from "@/lib/utils";
import Footer from "@/components/layout/footer";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
