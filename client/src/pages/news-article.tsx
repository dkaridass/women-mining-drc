import { useEffect, useState } from 'react';
import { useParams } from 'wouter';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  slug: string;
}

export default function NewsArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch('/content/news.json');
        const articles: NewsArticle[] = await response.json();
        const foundArticle = articles.find(a => a.slug === slug);
        setArticle(foundArticle || null);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Chargement...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Article non trouvé</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} - Women in Mining DRC</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.image} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm text-gray-600">
              <a href="/" className="hover:text-blue-600">Accueil</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Actualités</span>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{article.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="p-8">
              <div className="text-sm text-gray-500 mb-4">{article.date}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {article.title}
              </h1>
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {article.content}
                </ReactMarkdown>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
