'use client';

import Link from 'next/link';

import Navigation from '@/components/Navigation/Navigation';

/*
  Header згідно ТЗ містить:

  - логотип;
  - навігацію;
  - інформацію про користувача.

  Авторизація поки не реалізована,
  тому використовується заглушка.
*/

export default function Header() {
  return (
    <header>
      <Link href="/">
        Tasteorama
      </Link>

      <Navigation />
    </header>
  );
}

