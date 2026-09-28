import Image from 'next/image';
import BoatBrand from '../public/boat-logo.png';
import MetaBrand from '../public/meta-logo.png';
import PumaBrand from '../public/puma-logo.png';
import RhodeBrand from '../public/rhode-logo.png';
export default function TrustedBrands() {
  const trusted_list = [BoatBrand, MetaBrand, PumaBrand, RhodeBrand];
  return (
    <section className="w-full rounded-b-4xl mb-50 bg-quaternary">
      <div className="max-w-7xl mx-auto py-20 grid lg:grid-cols-[250px_1fr] grid-cols-1 items-center px-4 gap-10">
        <div>
          <p className="text-tertiary text-xl md:text-2xl">
            Aprovado pelas marcas que ajudei a moldar
          </p>
        </div>
        <div className="lg:justify-self-end">
          <ul className="flex flex-wrap gap-5 md:gap-10 items-end">
            {trusted_list.map((item) => (
              <Image
                key={item.src}
                alt=""
                src={item}
                width={150}
                className="w-auto h-auto max-w-35.5"
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
