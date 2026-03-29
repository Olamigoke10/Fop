import FOP1 from '../assets/img/Fop1.jpg'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-zinc-900"
      aria-labelledby="hero-heading"
    >
      <div
        className="relative min-h-[22rem] bg-cover bg-center md:min-h-[32rem] md:bg-[center_30%]"
        style={{ backgroundImage: `url(${FOP1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-5 py-16 md:min-h-[32rem] md:px-16 md:py-24">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-300 md:text-base">
            Welcome to Flames of Power
          </p>
          <h1
            id="hero-heading"
            className="max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.1]"
          >
            Become part of a community that believes, worships, and serves together
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-200 md:text-xl">
            Gather with us as we pursue God, grow in His Word, and carry His love into everyday life.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg bg-amber-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 shadow-lg transition hover:bg-amber-200 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
            >
              Learn more
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
