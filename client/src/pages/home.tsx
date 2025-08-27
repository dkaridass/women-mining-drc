import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Women in Mining DRC - Autonomiser les femmes dans le secteur minier</title>
        <meta name="description" content="Women in Mining DRC (WIM.DRC) œuvre pour l'autonomisation des femmes dans le secteur minier de la République Démocratique du Congo." />
        <meta property="og:title" content="Women in Mining DRC" />
        <meta property="og:description" content="Autonomiser les femmes dans le secteur minier de la RDC" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Women in Mining DRC
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Autonomiser les femmes dans le secteur minier de la République Démocratique du Congo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-mining text-lg px-8 py-3 animate-bounce">
                  S'engager
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Femmes formées</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
              <div className="text-gray-600">Programmes actifs</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">8</div>
              <div className="text-gray-600">Provinces clés</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Rejoignez notre mission
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ensemble, nous pouvons transformer le secteur minier et créer des opportunités durables pour les femmes en RDC.
            </p>
            <button className="btn-mining text-lg px-8 py-3">
              Devenir membre
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
