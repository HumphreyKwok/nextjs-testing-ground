import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import DarkModeProvider from "@/providers/DarkProvider";

export const metadata: Metadata = {
  title: "NextJS Testing Grond",
  description:
    "Testing all the latest Next.JS ans React features before adding them into future projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-sky-100 text-sky-800 dark:bg-slate-800 dark:text-slate-200">
        <DarkModeProvider>
          <div className="container mx-auto flex h-screen flex-col">
            {children}
            <Footer />
          </div>
        </DarkModeProvider>
      </body>
    </html>
  );
}
