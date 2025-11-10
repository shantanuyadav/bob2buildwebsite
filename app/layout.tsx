import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientThemeProvider from "@/components/ClientThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:6000'),
  title: {
    default: "bob2build | Web Development for Growing Businesses",
    template: "%s | bob2build"
  },
  description: "Professional web development agency specializing in custom websites, eCommerce solutions, and web applications for startups and growing businesses.",
  keywords: ["web development", "web design", "eCommerce", "web applications", "custom websites", "Shopify", "Next.js"],
  authors: [{ name: "bob2build" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bob2build.com",
    siteName: "bob2build",
    title: "bob2build | Web Development for Growing Businesses",
    description: "Professional web development agency specializing in custom websites, eCommerce solutions, and web applications.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "bob2build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "bob2build | Web Development for Growing Businesses",
    description: "Professional web development agency specializing in custom websites, eCommerce solutions, and web applications.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ClientThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
