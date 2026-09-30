export default function Hero() {
  return (
    <main className="w-full bg-cover bg-center bg-no-repeat bg-[linear-gradient(to_bottom,transparent_35%,rgba(0,0,0,0.75)_100%),url('/banner-hero-mobile.jpg')] lg:bg-[linear-gradient(to_bottom,transparent_35%,rgba(0,0,0,0.75)_100%),url('/hero-bg.jpg')]">
      <section className="flex min-h-svh flex-col justify-center gap-16 py-30 md:gap-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-5 px-5 lg:flex-row lg:items-center">
          <div className="max-w-xl grid gap-4">
            <span className="text-sm text-white md:text-base">
              We design and build digital experiences.
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Desenvolvimento <br />
              de Software
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base font-medium text-white md:text-xl">
              Um bom design não precisa chamar atenção.
            </p>
            <p className="mt-4 text-base text-white/80">
              Do logo ao código, criamos marcas que conectam e convertem.
            </p>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 text-white md:flex md:flex-row md:items-center md:justify-between">
          {[
            'Design de Produtos',
            'Design de Interfaces',
            'Desenvolvimento Web',
            'Desenvolvimento Fullstack',
          ].map((item, i) => (
            <div key={item}>
              <span className="font-medium">
                <span className="text-primary">#</span>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
