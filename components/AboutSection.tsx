import ButtonCta from './ButtonCta';
import Logo from './Logo';
export default function AboutSection() {
  return (
    <>
      <section className="w-full min-h-svh grid items-baseline bg-cover bg-center bg-no-repeat bg-[linear-gradient(to_bottom,transparent_35%,#0d0d0d_100%),url('/hero-bg-about.jpg')] lg:bg-[linear-gradient(to_bottom,transparent_35%,#0d0d0d_100%),url('/hero-bg-about.jpg')]">
        <div className="w-full max-w-7xl px-5 flex justify-between mx-auto items-center mt-10">
          <Logo />
          <ButtonCta href={'/'} variant="black" />
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-0 w-full max-w-7xl mx-auto px-5">
          <div className="grid gap-3 md:gap-5 self-end">
            <p className="text-tertiary text-sm font-medium md:text-xl">
              Web Designer & Desenvolvedor de Software
            </p>
            <h3 className="text-4xl md:text-7xl lg:text-8xl text-white font-medium">
              Sobre
            </h3>
          </div>
          <div className="flex flex-col md:items-end">
            <div className="md:max-w-87.5 grid gap-3 md:gap-5 md:mb-25">
              <span className="text-white font-medium text-xl">
                A mente por trás do trabalho.
              </span>
              <p className="text-tertiary text-base">
                Uma mente criativa que captura histórias nos detalhes mais
                sutis, transformando momentos cotidianos em imagens atemporais.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-5 md:gap-0 pb-20 md:py-20 px-5">
        <div className="flex flex-col gap-4 col-span-2 md:col-span-1 mt-20">
          <span className="text-primary font-medium text-base">
            Quem eu sou
          </span>
          <h3 className="text-3xl text-white leading-tight md:text-4xl lg:text-5xl font-bold">
            Design com propósito e personalidade
          </h3>
        </div>
        <div className="flex flex-col items-end">
          <div className="md:max-w-90 grid gap-5">
            <h4 className="text-white text-xl md:text-2xl font-medium">
              Construindo marcas relevantes por meio de estratégia, criatividade
              e colaboração.
            </h4>
            <p className="text-tertiary">
              Sou um desenvolvedor de software focado na criação de produtos
              digitais, aplicações web e experiências que unem tecnologia,
              design e funcionalidade. Transformo ideias e problemas reais em
              soluções digitais intuitivas, explorando cada detalhe para criar
              produtos que não apenas funcionam, mas fazem sentido para quem os
              utiliza.
            </p>
            <p className="text-tertiary">
              Com uma sólida base em pensamento de produto e design, foco na
              criação de experiências claras, intuitivas e com propósito. Seja
              uma marca, um produto ou um simples app, minha abordagem combina
              estratégia com visuais que despertam emoções, que não apenas têm
              boa aparência, mas também resolvem problemas reais e criam uma
              conexão profunda com as pessoas.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-secondary h-9"></div>
    </>
  );
}
