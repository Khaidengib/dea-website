import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: "Dallas Entrepreneurial Alliance | Student Leadership, Economics & Entrepreneurship",
    template: "%s | Dallas Entrepreneurial Alliance",
  },
  description: site.description,
  openGraph: {
    title: "Dallas Entrepreneurial Alliance",
    description: site.description,
    url: `https://${site.domain}`,
    siteName: site.name,
    images: ["/dea-logo.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dallas Entrepreneurial Alliance",
    description: site.description,
    images: ["/dea-logo.png"],
  },
  icons: {
    icon: "/dea-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: `https://${site.domain}`,
              logo: `https://${site.domain}/dea-logo.png`,
              description: site.description,
              sameAs: [site.social.instagram, site.social.linkedin],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
