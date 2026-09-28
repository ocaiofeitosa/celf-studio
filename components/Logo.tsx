import Image from 'next/image';
import CelfLogo from '../public/logo-celf-studio.webp';
import Link from 'next/link';
export default function Logo() {
  return (
    <Link href={'/'}>
      <Image
        src={CelfLogo}
        width={30}
        height={30}
        alt="Celf Studio - Web Agency"
        className="filter brightness-0 invert cursor-pointer"
      />
    </Link>
  );
}
