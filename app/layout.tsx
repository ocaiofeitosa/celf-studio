import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Celf Studio | Web Agency',
  description:
    'Portfolio demo using SF Pro typography and a custom design palette.',
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
