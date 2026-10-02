import ButtonCta from './ButtonCta';
import Logo from './Logo';
export default function AboutSection() {
  return (
    <section className="w-full min-h-svh bg-cover bg-center bg-no-repeat bg-[linear-gradient(to_bottom,transparent_35%,rgba(0,0,0,0.75)_100%),url('/hero-bg-about.jpg')] lg:bg-[linear-gradient(to_bottom,transparent_35%,rgba(0,0,0,0.75)_100%),url('/hero-bg-about.jpg')]">
      <div className="w-full max-w-7xl px-5 flex justify-between mx-auto items-center mt-10">
        <Logo />
        <ButtonCta href={'/'} variant="black" />
      </div>
    </section>
  );
}
