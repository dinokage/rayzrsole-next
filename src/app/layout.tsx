import type { Metadata } from "next";
import { Inter, Dancing_Script, Playfair_Display, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define a CSS variable for Inter font
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
  variable: "--font-dancing-script", // Define a CSS variable for Dancing Script font
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair", // Elegant serif font
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // Modern sans-serif
});

export const metadata: Metadata = {
  title: "RayzrSole - Coming Soon!",
  description: "RayzrSole is transforming industries through cutting-edge AI & ML solutions. Be the first to know when we launch.",
  keywords: ["RayzrSole", "AI", "ML", "artificial intelligence", "machine learning", "Kolkata", "India", "AI solutions", "technology"],
  authors: [{ name: "RayzrSole" }],
  creator: "RayzrSole",
  publisher: "RayzrSole",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rayzrsole.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rayzrsole.com',
    siteName: 'RayzrSole',
    title: 'RayzrSole - Coming Soon!',
    description: 'RayzrSole is transforming industries through cutting-edge AI & ML solutions. Be the first to know when we launch.',
    images: [
      {
        url: '/og-image.jpeg', // Add your OG image to public folder
        width: 1200,
        height: 630,
        alt: 'RayzrSole - Coming Soon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RayzrSole - Coming Soon!',
    description: 'RayzrSole is transforming industries through cutting-edge AI & ML solutions. Be the first to know when we launch.',
    images: ['/og-image.jpeg'], // Same image as OG
    creator: '@rayzrsole', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Preconnect to Google Fonts for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RayzrSole",
              "url": "https://rayzrsole.com",
              "logo": "https://rayzrsole.com/logo.png",
              "description": "Transforming Industries Through AI & ML Solutions",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kolkata",
                "addressRegion": "West Bengal",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-6291-858-320",
                "email": "rayzrsole.office@gmail.com",
                "contactType": "customer support"
              },
              "sameAs": [
                "https://facebook.com/rayzrsole",
                "https://twitter.com/rayzrsole",
                "https://instagram.com/rayzrsole"
              ]
            })
          }}
        />

        {/* Event structured data for coming soon launch */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "RayzrSole Platform Launch",
              "startDate": "2026-06-15T11:00:00+05:30",
              "endDate": "2026-06-15T12:00:00+05:30",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "location": {
                "@type": "VirtualLocation",
                "url": "https://rayzrsole.com"
              },
              "organizer": {
                "@type": "Organization",
                "name": "RayzrSole",
                "url": "https://rayzrsole.com"
              },
              "description": "Launch of the RayzrSole platform - transforming industries through cutting-edge AI & ML solutions"
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${dancingScript.variable} ${playfairDisplay.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}