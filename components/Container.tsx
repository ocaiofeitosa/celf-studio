'use client';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return <main className="w-full">{children}</main>;
}
