import AboutSvg from '../assets/svgs/AboutSvg.svg'
import bibleSvg from '../assets/svgs/bibleStudy.svg'
import WorshipSvg from '../assets/svgs/WorshipSvg.svg'

const cards = [
  {
    title: 'About us',
    icon: AboutSvg,
    text: 'We are a community grounded in faith, love, and service — living out the gospel with humility and joy.',
  },
  {
    title: 'Bible study',
    icon: bibleSvg,
    text: 'Interactive sessions that open Scripture, answer questions, and equip you to walk in truth.',
  },
  {
    title: 'Worship',
    icon: WorshipSvg,
    text: 'Passionate praise that lifts Jesus high and draws hearts into His presence.',
  },
]

const Relevant = () => {
  return (
    <section
      id="fellowship"
      aria-labelledby="fellowship-heading"
      className="scroll-mt-20 w-full bg-gradient-to-b from-amber-50 to-orange-50/80 px-4 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-800/80">
            Get involved
          </p>
          <h2 id="fellowship-heading" className="mt-2 text-3xl font-extrabold text-zinc-900 md:text-4xl">
            Fellowship with us
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            Three ways to plug in — discover who we are, study the Word, and encounter God in worship.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-2xl border border-amber-200/50 bg-white p-8 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-lg"
            >
              <div className="mb-5 flex justify-center">
                <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-amber-300 shadow-inner ring-4 ring-amber-100">
                  <img src={card.icon} alt="" className="h-10 w-10" width={40} height={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-orange-800">{card.title}</h3>
              <p className="mt-3 flex-1 text-left text-sm leading-relaxed text-zinc-600 md:text-[15px]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Relevant
