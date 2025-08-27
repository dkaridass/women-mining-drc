import { Helmet } from 'react-helmet-async';
import { ArrowLeft, TrendingUp, DollarSign, Users, Lightbulb, Clock, MapPin, Award } from 'lucide-react';

export default function EntrepreneuriatPage() {
  return (
    <>
      <Helmet>
        <title>Programme d'Entrepreneuriat - Women in Mining DRC</title>
        <meta name="description" content="Accompagnement dans la création et la gestion de coopératives et d'entreprises minières dirigées par des femmes." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center mb-6 text-purple-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Programme d'Entrepreneuriat</h1>
            <p className="text-xl text-purple-100 max-w-3xl">
              Accompagnement dans la création et la gestion de coopératives et d'entreprises minières dirigées par des femmes
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Créez votre entreprise minière</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Notre programme d'entrepreneuriat accompagne les femmes dans la création et la gestion d'entreprises 
                  minières durables. De l'idée initiale à la croissance, nous fournissons les outils, les connaissances 
                  et le soutien nécessaires pour réussir dans l'entrepreneuriat minier.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <Lightbulb className="w-8 h-8 text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-gray-600">Développer des solutions créatives pour le secteur minier</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <DollarSign className="w-8 h-8 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Financement</h3>
                    <p className="text-gray-600">Accès au financement et gestion financière</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Parcours entrepreneurial</h3>
                <div className="space-y-6">
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                      <h4 className="text-xl font-semibold">Idéation & Validation</h4>
                    </div>
                    <div className="ml-14 bg-purple-50 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Identification d'opportunités dans le secteur minier</li>
                        <li>• Validation du concept d'entreprise</li>
                        <li>• Étude de marché et analyse de la concurrence</li>
                        <li>• Définition de la proposition de valeur</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                      <h4 className="text-xl font-semibold">Planification & Structure</h4>
                    </div>
                    <div className="ml-14 bg-blue-50 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Élaboration du business plan</li>
                        <li>• Choix de la structure juridique</li>
                        <li>• Formalités de création d'entreprise</li>
                        <li>• Mise en place de la gouvernance</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                      <h4 className="text-xl font-semibold">Financement & Lancement</h4>
                    </div>
                    <div className="ml-14 bg-green-50 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Recherche de financement (prêts, subventions)</li>
                        <li>• Gestion financière et comptabilité</li>
                        <li>• Lancement des opérations</li>
                        <li>• Marketing et développement client</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                      <h4 className="text-xl font-semibold">Croissance & Durabilité</h4>
                    </div>
                    <div className="ml-14 bg-orange-50 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Stratégies de croissance et expansion</li>
                        <li>• Pratiques minières durables</li>
                        <li>• Gestion des ressources humaines</li>
                        <li>• Innovation et amélioration continue</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Entreprises créées</h3>
                <div className="space-y-6">
                  <div className="border border-purple-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-purple-800">Coopérative Tumaini</h4>
                        <p className="text-gray-600">Extraction artisanale de cobalt</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">45</p>
                        <p className="text-sm text-gray-500">Employées</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Créée en 2023 avec l'accompagnement de WIM DRC, notre coopérative a multiplié sa production par 4 
                      et construit une école pour la communauté."
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-semibold">MK</span>
                      </div>
                      <span className="font-medium">Marie Kabongo, Présidente</span>
                    </div>
                  </div>

                  <div className="border border-blue-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-800">Espoir Mining Services</h4>
                        <p className="text-gray-600">Services d'équipements miniers</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">25</p>
                        <p className="text-sm text-gray-500">Employées</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Notre entreprise de location d'équipements miniers sert maintenant 15 coopératives dans la région. 
                      Nous avons créé 25 emplois pour les femmes."
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-semibold">JM</span>
                      </div>
                      <span className="font-medium">Jeanne Mukendi, CEO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Program Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Informations du programme</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Durée</p>
                      <p className="text-sm text-gray-600">12 mois + suivi 2 ans</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Participants</p>
                      <p className="text-sm text-gray-600">15 entrepreneures par cohorte</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Format</p>
                      <p className="text-sm text-gray-600">Incubation + Mentorat</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Support</p>
                      <p className="text-sm text-gray-600">Financement jusqu'à 5000$</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Nos résultats</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold">85</p>
                    <p className="text-purple-100">Entreprises créées</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">78%</p>
                    <p className="text-purple-100">Taux de survie à 2 ans</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">650+</p>
                    <p className="text-purple-100">Emplois créés</p>
                  </div>
                </div>
              </div>

              {/* Support Services */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services inclus</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-sm">Mentorat personnalisé</span>
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-sm">Accès au financement</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-sm">Réseau d'entrepreneures</span>
                  </li>
                  <li className="flex items-center">
                    <Lightbulb className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-sm">Ateliers spécialisés</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lancez votre entreprise</h3>
                <p className="text-gray-600 mb-4">
                  Transformez votre idée en entreprise minière prospère avec notre accompagnement complet.
                </p>
                <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Rejoindre l'incubateur
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
