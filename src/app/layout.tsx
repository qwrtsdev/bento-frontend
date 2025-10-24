import localFont from "next/font/local";
import "./globals.css";
import Navigator from "@/components/Navigator";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";

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
    default: "Chatty",
    template: "%s | Chatty",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider enableSystem={true} defaultTheme="system">
        <body
          className={`${LineSeed.className} relative h-screen w-screen overflow-hidden antialiased`}
        >
          <div className="scrollbar-hide h-full w-full overflow-auto flex justify-center items-center">
            <div className="max-w-4xl h-full w-full flex border-neutral-600 border-l border-r">
              <div className="w-[30%] border-r border-neutral-600 overflow-y-auto">
                <Navigator />
              </div>

              <div className="w-[70%] overflow-y-auto">{children}</div>
            </div>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
