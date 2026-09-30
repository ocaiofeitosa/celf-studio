import ButtonCta from './ButtonCta';
import Agents_Saas from '../public/agents-ai.jpg';
import Barber_Saas from '../public/barber-saas.jpg';
import Ecommerce from '../public/ecommerce.jpg';
import Image from 'next/image';
const DESIGN_EXAMPLES = [Agents_Saas, Barber_Saas, Ecommerce];

export default function BehindDesign() {
  return (
    <section className="w-full max-w-7xl mx-auto p-5 grid lg:grid-cols-2 mt-10 justify-between gap-10 lg:gap-30">
      <div className="flex flex-col gap-4">
        <span className="text-primary font-medium text-base">
          Por trás do design
        </span>
        <h3 className="text-4xl text-white leading-tight md:text-5xl font-bold">
          Criando experiências que simplificam a vida
        </h3>
      </div>
      <div className="grid gap-10">
        <h3 className="text-2xl lg:text-3xl text-white font-medium leading-8 md:leading-10">
          Desenvolvemos produtos focados em interfaces limpas e intuitivas que
          resolvem problemas do mundo real.
        </h3>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-5">
          <p className="text-tertiary max-w-full md:max-w-50">
            Vamos construir algo significativo juntos
          </p>
          <ButtonCta href="/contato" />
        </div>
      </div>
      <div className="col-span-2">
        <ul className="flex items-center gap-5 justify-between">
          {DESIGN_EXAMPLES.map((img) => (
            <li key={img.src} className="overflow-hidden rounded-4xl">
              <Image
                src={img}
                alt="Projetos Celf Studio"
                height={450}
                className="rounded-4xl grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 overflow-hidden"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
