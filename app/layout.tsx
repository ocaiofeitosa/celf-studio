import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Celf Studio | Web Agency',
  description: 'Portfolio Celf Studio.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <Header />
      <body className="min-h-full flex flex-col bg-tertiary text-primary">
        {children}
      </body>
    </html>
  );
}
