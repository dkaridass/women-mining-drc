import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Users, BookOpen, Award, Clock, MapPin } from 'lucide-react';

export default function FormationTechniquePage() {
  return (
    <>
      <Helmet>
        <title>Formation Technique - Women in Mining DRC</title>
        <meta name="description" content="Programmes de formation spécialisés en techniques minières, sécurité, et utilisation d'équipements modernes pour autonomiser les femmes dans le secteur minier." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center mb-6 text-blue-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Formation Technique</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Programmes de formation spécialisés en techniques minières, sécurité, et utilisation d'équipements modernes
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Vue d'ensemble du programme</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Notre programme de formation technique est conçu pour équiper les femmes des compétences pratiques 
                  nécessaires pour exceller dans l'industrie minière. Nous couvrons tous les aspects, de la sécurité 
                  de base aux techniques avancées d'extraction et de traitement des minerais.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Modules théoriques</h3>
                    <p className="text-gray-600">Fondamentaux de la géologie, minéralogie et techniques d'extraction</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <Users className="w-8 h-8 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Pratique sur terrain</h3>
                    <p className="text-gray-600">Expérience pratique avec des équipements réels dans nos centres</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Modules de formation</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-6 py-4">
                    <h4 className="text-lg font-semibold">1. Sécurité minière et EPI</h4>
                    <p className="text-gray-600">Protocoles de sécurité, utilisation d'équipements de protection individuelle</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6 py-4">
                    <h4 className="text-lg font-semibold">2. Techniques d'extraction</h4>
                    <p className="text-gray-600">Méthodes d'extraction artisanale et semi-industrielle</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-6 py-4">
                    <h4 className="text-lg font-semibold">3. Utilisation d'équipements</h4>
                    <p className="text-gray-600">Formation sur l'utilisation et la maintenance des équipements modernes</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6 py-4">
                    <h4 className="text-lg font-semibold">4. Traitement des minerais</h4>
                    <p className="text-gray-600">Techniques de concentration et de purification des minerais</p>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Témoignages</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-600 mb-4 italic">
                      "Grâce à la formation technique de WIM DRC, j'ai pu améliorer mes techniques d'extraction 
                      et augmenter ma production de 300%. Je suis maintenant formatrice dans ma communauté."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold">MK</span>
                      </div>
                      <div>
                        <p className="font-semibold">Marie Kabongo</p>
                        <p className="text-sm text-gray-500">Coopérative Tumaini, Kolwezi</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-600 mb-4 italic">
                      "La formation en sécurité m'a sauvé la vie. Maintenant, je forme d'autres femmes 
                      sur l'importance des équipements de protection."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold">JM</span>
                      </div>
                      <div>
                        <p className="font-semibold">Jeanne Mukendi</p>
                        <p className="text-sm text-gray-500">Coopérative Espoir, Lubumbashi</p>
                      </div>
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
                      <p className="text-sm text-gray-600">3 mois (120 heures)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Participants</p>
                      <p className="text-sm text-gray-600">25 femmes par session</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Lieux</p>
                      <p className="text-sm text-gray-600">Kolwezi, Lubumbashi, Likasi</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Certification</p>
                      <p className="text-sm text-gray-600">Certificat reconnu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Nos résultats</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold">450+</p>
                    <p className="text-blue-100">Femmes formées</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">89%</p>
                    <p className="text-blue-100">Taux de réussite</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">12</p>
                    <p className="text-blue-100">Sessions par an</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Intéressée ?</h3>
                <p className="text-gray-600 mb-4">
                  Rejoignez notre prochaine session de formation technique et développez vos compétences.
                </p>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  S'inscrire maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
