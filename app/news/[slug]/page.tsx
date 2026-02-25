import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { ArrowLeft, Calendar, Share2, ChevronRight } from 'lucide-react'
import fs from 'fs'
import path from 'path'

async function getNewsData() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'content', 'news.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch {
    return []
  }
}

interface NewsArticle {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  image: string
  slug: string
}

// Gallery images from the Indaba 2026 event
const indabaGallery = [
  '/images/gallery/IMG_0619.jpg',
  '/images/gallery/IMG_0777.jpg',
  '/images/gallery/IMG_0781.jpg',
  '/images/gallery/IMG_0791.jpg',
  '/images/gallery/IMG_0796.jpg',
  '/images/gallery/IMG_0797.jpg',
  '/images/gallery/IMG_0803.jpg',
  '/images/gallery/IMG_0805.jpg',
  '/images/gallery/IMG_0806.jpg',
  '/images/gallery/IMG_0815.jpg',
  '/images/gallery/IMG_0817.jpg',
  '/images/gallery/IMG_0838.jpg',
]

export async function generateStaticParams() {
  const articles = await getNewsData()
  return articles.map((article: NewsArticle) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const articles = await getNewsData()
  const article = articles.find((a: NewsArticle) => a.slug === slug)

  if (!article) return { title: 'Article non trouvé | Women in Mining DRC' }

  return {
    title: `${article.title} | Women in Mining DRC`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const articles = await getNewsData()
  const article = articles.find((a: NewsArticle) => a.slug === slug)
  const otherArticles = articles.filter((a: NewsArticle) => a.slug !== slug).slice(0, 3)
  const isIndaba = slug === 'wim-drc-mining-indaba-2026-cape-town'

  if (!article) notFound()

  return (
    <div className="min-h-screen bg-white">

      {/* ── BREADCRUMB ── */}
      <div className="bg-[#002B49] text-white/70 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-2">
          <Link href="/" className="hover:text-[#DAA520] transition-colors">Accueil</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/#actualites" className="hover:text-[#DAA520] transition-colors">Actualités</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/50 line-clamp-1">{article.title}</span>
        </div>
      </div>

      {/* ── CINEMATIC HERO ── */}
      <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={isIndaba ? '/images/gallery/IMG_0852.jpg' : article.image}
          alt={article.title}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B49]/90 via-[#002B49]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002B49] via-transparent to-transparent opacity-80" />

        {/* Hero content */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#DAA520] text-[#002B49] text-xs font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5">
                Actualités · {article.date}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 [text-shadow:_0_2px_20px_rgb(0_0_0_/_40%)]">
                {article.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                {article.excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* MAIN COLUMN */}
          <main className="lg:col-span-8 space-y-10">

            {/* Article prose */}
            <div className="prose prose-lg max-w-none
              prose-headings:font-black prose-headings:text-[#002B49] prose-headings:leading-tight
              prose-h1:text-4xl prose-h1:mt-0
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-[#DAA520] prose-h2:pl-4
              prose-h3:text-xl prose-h3:mt-8
              prose-p:text-gray-700 prose-p:leading-[1.85] prose-p:text-[1.05rem]
              prose-strong:text-[#002B49] prose-strong:font-bold
              prose-a:text-[#DAA520] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-blockquote:not-italic prose-blockquote:border-l-[5px] prose-blockquote:border-[#DAA520]
              prose-blockquote:bg-gradient-to-r prose-blockquote:from-[#FDF8EC] prose-blockquote:to-transparent
              prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:my-8
              prose-li:text-gray-700 prose-li:leading-relaxed
            ">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{article.content}</ReactMarkdown>
            </div>

            {/* ── PHOTO GALLERY (Indaba only) ── */}
            {isIndaba && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-[#DAA520] rounded-full" />
                  <h2 className="text-2xl font-black text-[#002B49]">Galerie Photos — Mining Indaba 2026</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {indabaGallery.map((src, i) => (
                    <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl group">
                      <Image
                        src={src}
                        alt={`Indaba 2026 — Photo ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[#002B49]/0 group-hover:bg-[#002B49]/20 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
                {/* Second row — larger showcase */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {[
                    '/images/gallery/IMG_0850.jpg',
                    '/images/gallery/IMG_0870.jpg',
                  ].map((src, i) => (
                    <div key={i} className="relative aspect-video overflow-hidden rounded-xl group">
                      <Image
                        src={src}
                        alt={`Indaba 2026 — Highlight ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="50vw"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom nav */}
            <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/#actualites"
                className="inline-flex items-center gap-2 text-[#002B49] font-bold hover:text-[#DAA520] transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Retour aux actualités
              </Link>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Share2 className="w-4 h-4 text-[#DAA520]" />
                Partager cet article
              </div>
            </div>
          </main>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-8">

            {/* Feature image from gallery */}
            {isIndaba && (
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gallery/IMG_0873.jpg"
                  alt="Mining Indaba 2026 — WIM DRC"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B49]/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white text-sm font-semibold leading-snug">
                    CTICC — Cape Town, 11 février 2026
                  </p>
                  <p className="text-[#DAA520] text-xs mt-1">Mining Indaba 2026</p>
                </div>
              </div>
            )}

            {/* About card */}
            <div className="bg-[#002B49] text-white rounded-2xl p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DAA520]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="text-[#DAA520] font-black text-xl mb-3 leading-tight">Women in Mining DRC</div>
              <p className="text-white/75 text-sm leading-relaxed mb-5">
                Premier réseau dédié à l'autonomisation et au leadership des femmes dans l'industrie extractive congolaise, depuis 2019.
              </p>
              <Link
                href="/#a-propos"
                className="inline-flex items-center gap-2 bg-[#DAA520] text-[#002B49] font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg hover:bg-white transition-colors"
              >
                Découvrir WIM DRC
              </Link>
            </div>

            {/* Other Articles */}
            {otherArticles.length > 0 && (
              <div>
                <h3 className="text-[#002B49] font-black text-sm uppercase tracking-[0.12em] mb-5 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-[#DAA520] inline-block" />
                  Autres Actualités
                </h3>
                <div className="space-y-5">
                  {otherArticles.map((other: NewsArticle) => (
                    <Link
                      key={other.id}
                      href={`/news/${other.slug}`}
                      className="flex gap-4 group items-start"
                    >
                      <div className="relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={other.image}
                          alt={other.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-[#DAA520] font-bold uppercase tracking-widest mb-1">{other.date}</p>
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-[#002B49] transition-colors line-clamp-2 leading-snug">
                          {other.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="rounded-2xl overflow-hidden border border-[#DAA520]/30">
              <div className="bg-[#DAA520] px-6 py-4">
                <p className="text-[#002B49] font-black text-lg">Rejoignez le Mouvement</p>
              </div>
              <div className="p-6 bg-[#FDF8EC]">
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  Restez informée de nos actualités, formations et événements à venir.
                </p>
                <Link
                  href="/#contact"
                  className="block text-center bg-[#002B49] text-white font-bold text-sm px-5 py-3 rounded-lg hover:bg-[#DAA520] hover:text-[#002B49] transition-colors"
                >
                  Devenir Membre
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
