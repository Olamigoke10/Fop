import { Link } from 'react-router-dom'
import { usePageSeo } from '../utils/usePageSeo'
import { useI18n } from '../context/I18nContext'

const POSTS = [
  {
    slug: 'welcome',
    title: 'Welcome to our new site',
    date: 'March 2026',
    excerpt: 'We are glad you are here. Here is what to expect as we grow this space together.',
  },
  {
    slug: 'faith-in-the-city',
    title: 'Faith in the city',
    date: 'February 2026',
    excerpt: 'Short reflections on serving our neighbourhood with love and integrity.',
  },
  {
    slug: 'prayer-week',
    title: 'Prayer week highlights',
    date: 'January 2026',
    excerpt: 'God moved among us. A few testimonies and next steps for the family.',
  },
]

export default function BlogPage() {
  const { t } = useI18n()

  usePageSeo({
    title: 'Blog | Flames of Power',
    description: 'Articles, devotionals, and updates from Flames of Power.',
    path: '/blog',
  })

  return (
    <div className="bg-zinc-50">
      <div className="border-b border-amber-200/40 bg-white px-4 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-zinc-900 md:text-5xl">{t('blogPage.title')}</h1>
          <p className="mt-4 text-lg text-zinc-600">{t('blogPage.meta')}</p>
          <p className="mt-4 text-sm text-zinc-500">{t('blogPage.intro')}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <ul className="space-y-6">
          {POSTS.map((post) => (
            <li key={post.slug}>
              <article
                id={post.slug}
                className="scroll-mt-24 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-amber-300/60 hover:shadow-md"
              >
                <time className="text-xs font-semibold uppercase tracking-wide text-amber-800">
                  {post.date}
                </time>
                <h2 className="mt-2 text-xl font-bold text-zinc-900">{post.title}</h2>
                <p className="mt-2 text-zinc-600">{post.excerpt}</p>
                <Link
                  to={`/blog#${post.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-amber-800 underline-offset-4 hover:underline"
                >
                  {t('blogPage.readMore')}
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
