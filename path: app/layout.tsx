import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EarnWatch – Earn ₹1 per 30s Ad',
  description: 'Watch ads and earn real money. Advertisers get genuine views.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-4 py-6 max-w-4xl">
          {children}
        </main>
      </body>
    </html>
  );
}
