'use client';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Link from 'next/link';
import ButtonCta from './ButtonCta';
import { MenuIcon } from 'lucide-react';

export default function Header() {
  const NAV_MENU = ['Início', 'Sobre', 'Projetos', 'Blog'];
  const pathname = usePathname();
  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent mt-5 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <Logo />
        <div className="hidden gap-5 justify-between items-center md:flex lg:flex">
          <ul className="flex gap-6">
            {NAV_MENU.map((item) => {
              const href = `${item.toLowerCase()}`;
              const isActive = pathname === href;
              return (
                <li
                  key={item}
                  className="text-tertiary px-2 text-base hover:text-white transition-colors"
                >
                  <Link
                    href={href}
                    className={
                      isActive ? 'underline text-white' : 'no-underline'
                    }
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ButtonCta />
        </div>
        <MenuIcon color="white" className="flex md:hidden" size={28} />
      </div>
    </header>
  );
}
