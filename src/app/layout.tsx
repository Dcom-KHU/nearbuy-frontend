import './globals.css';
import Header from '@/components/layout/header/Header';
import { Providers } from './providers';
import Footer from '@/components/layout/footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <head />
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
