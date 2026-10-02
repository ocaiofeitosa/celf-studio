import Link, { LinkProps } from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ButtonCtaProps extends LinkProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'white' | 'black';
}

const variants = {
  primary: {
    button: 'bg-primary text-white hover:bg-white hover:text-primary',
    icon: 'bg-white text-primary group-hover:bg-primary group-hover:text-white',
  },
  white: {
    button: 'bg-white text-primary hover:bg-primary hover:text-white',
    icon: 'bg-primary text-white group-hover:bg-white group-hover:text-primary',
  },
  black: {
    button: 'bg-white text-secondary hover:bg-primary hover:text-white',
    icon: 'bg-primary text-white group-hover:bg-white group-hover:text-primary',
  },
};

export default function ButtonCta({
  children = 'Entre em contato',
  variant = 'primary',
  ...props
}: ButtonCtaProps) {
  const styles = variants[variant];

  return (
    <Link
      {...props}
      className={`${styles.button} group flex w-fit items-center gap-3 rounded-full px-5 py-2 font-medium transition-colors`}
    >
      {children}

      <span
        className={`flex size-10 items-center justify-center rounded-full transition-colors ${styles.icon}`}
      >
        <ArrowUpRight size={20} />
      </span>
    </Link>
  );
}
