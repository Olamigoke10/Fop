const AboutIntro = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-y border-amber-200/40 bg-gradient-to-b from-white to-amber-50/40 px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-700/90">
          Who we are
        </p>
        <h2 id="about-heading" className="mt-2 text-3xl font-extrabold text-zinc-900 md:text-4xl">
          Rooted in faith, built for people
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600">
          Flames of Power is a welcoming community where believers grow together through the Word,
          heartfelt worship, and practical love. Whether you are exploring faith or looking for a
          home to serve, there is a place for you here.
        </p>
      </div>
    </section>
  )
}

export default AboutIntro
