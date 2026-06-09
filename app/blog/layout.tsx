import type { Metadata } from 'next';
import { inter, sora } from '../fonts';
import '../globals.css';
import Providers from '@/components/Providers';
import { NavbarWrapper } from '@/components/shared/navbar-wrapper';
import { FooterSection } from '@/components/landing/footer-section';

export const metadata: Metadata = {
  title: 'AAVORide Blogs | Travel Stories & Road Trip Guides',
  description: 'Stories that inform and inspire. Read travel tips, pilgrimage guides, luxury cab rental ideas, and discover the best routes in India with AAVORide.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'AAVORide Blogs | Travel Stories & Road Trip Guides',
    description: 'Stories that inform and inspire. Read travel tips, pilgrimage guides, luxury cab rental ideas, and discover the best routes in India with AAVORide.',
    url: 'https://aavoride.in/blog',
    siteName: 'AAVORide Blogs',
    images: [
      {
        url: '/aavoride_blog_hero.png',
        width: 1200,
        height: 630,
        alt: 'AAVORide Blogs - Stories That Inform and Inspire',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAVORide Blogs | Travel Stories & Road Trip Guides',
    description: 'Stories that inform and inspire. Read travel tips, pilgrimage guides, luxury cab rental ideas, and discover the best routes in India with AAVORide.',
    images: ['/aavoride_blog_hero.png'],
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <main className="flex-grow">{children}</main>
      <FooterSection />
    </Providers>
  );
}
