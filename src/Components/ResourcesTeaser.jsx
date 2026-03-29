import { PlayCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline'

const ResourcesTeaser = () => {
  return (
    <section
      id="resources"
      aria-labelledby="resources-heading"
      className="scroll-mt-20 bg-white px-4 py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700/90">
            Grow with us
          </p>
          <h2 id="resources-heading" className="mt-2 text-3xl font-extrabold text-zinc-900 md:text-4xl">
            Sermons &amp; stories
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            Teaching and reflections to strengthen your walk — new content is on the way.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article
            id="sermons"
            className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50/80 p-8 shadow-sm transition hover:border-amber-300/60 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
              <PlayCircleIcon className="h-7 w-7" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">Sermons</h3>
            <p className="mt-2 flex-1 text-zinc-600">
              Messages from our services will be available here soon — subscribe at the bottom so
              you do not miss the launch.
            </p>
            <span className="mt-6 inline-flex w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900">
              Coming soon
            </span>
          </article>

          <article
            id="blog"
            className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50/80 p-8 shadow-sm transition hover:border-amber-300/60 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
              <BookOpenIcon className="h-7 w-7" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">Blog</h3>
            <p className="mt-2 flex-1 text-zinc-600">
              Devotionals, updates, and community highlights — we are preparing a space to share
              encouragement weekly.
            </p>
            <span className="mt-6 inline-flex w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900">
              Coming soon
            </span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ResourcesTeaser
