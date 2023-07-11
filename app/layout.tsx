import './globals.css';
import { Footer, Navbar } from '@components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car hub',
  description: 'Discover the best car in the world.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
