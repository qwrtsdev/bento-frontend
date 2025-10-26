import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

const LineSeed = localFont({
  src: [
    {
      path: "../../public/fonts/LINESeedSansTH_W_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/LINESeedSansTH_W_Bd.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Bento",
    template: "%s | Bento",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${LineSeed.className} relative h-screen w-screen overflow-hidden antialiased`}
      >
        <div className="scrollbar-hide h-full w-full overflow-auto flex justify-center items-center">
          <ThemeProvider enableSystem={true} defaultTheme="system">
            <Theme>{children}</Theme>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
