import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Users, Target, TrendingUp, Clock, MapPin, Award } from 'lucide-react';

export default function LeadershipPage() {
  return (
    <>
      <Helmet>
        <title>Programme de Leadership - Women in Mining DRC</title>
        <meta name="description" content="Développement des compétences en leadership pour permettre aux femmes d'occuper des postes de responsabilité dans le secteur minier." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center mb-6 text-green-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Programme de Leadership</h1>
            <p className="text-xl text-green-100 max-w-3xl">
              Développement des compétences en leadership pour permettre aux femmes d'occuper des postes de responsabilité
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Développez votre potentiel de leader</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Notre programme de leadership est spécialement conçu pour les femmes du secteur minier qui aspirent 
                  à des rôles de direction. Nous développons les compétences nécessaires pour diriger avec confiance, 
                  inspirer les équipes et créer un impact positif durable.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <Target className="w-8 h-8 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Vision stratégique</h3>
                    <p className="text-gray-600 text-sm">Développer une vision claire et inspirante</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Gestion d'équipe</h3>
                    <p className="text-gray-600 text-sm">Motiver et diriger des équipes diverses</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Croissance</h3>
                    <p className="text-gray-600 text-sm">Développement personnel et professionnel</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Curriculum du programme</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-800 mb-3">Module 1: Leadership Personnel</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Connaissance de soi et intelligence émotionnelle</li>
                      <li>• Confiance en soi et présence de leader</li>
                      <li>• Communication assertive et persuasive</li>
                      <li>• Gestion du stress et résilience</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Module 2: Leadership d'Équipe</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Motivation et engagement des équipes</li>
                      <li>• Délégation efficace et autonomisation</li>
                      <li>• Gestion des conflits et médiation</li>
                      <li>• Coaching et développement des talents</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Module 3: Leadership Organisationnel</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Vision stratégique et planification</li>
                      <li>• Gestion du changement et innovation</li>
                      <li>• Négociation et influence</li>
                      <li>• Leadership éthique et responsabilité sociale</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Module 4: Leadership dans le Secteur Minier</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Défis spécifiques du secteur minier</li>
                      <li>• Leadership féminin dans l'industrie</li>
                      <li>• Développement durable et responsabilité</li>
                      <li>• Réseautage et partenariats stratégiques</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Histoires de réussite</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4 italic">
                      "Le programme de leadership m'a transformée. Je dirige maintenant une coopérative de 80 femmes 
                      et nous avons triplé notre production. J'ai appris à inspirer et à mobiliser mon équipe."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-semibold">AM</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Alphonsine Mbuyi</p>
                        <p className="text-sm text-gray-600">Présidente, Coopérative Amani</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4 italic">
                      "Grâce aux compétences acquises, j'ai été promue superviseure dans ma mine. 
                      Je gère maintenant une équipe de 45 personnes avec confiance et efficacité."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-semibold">DM</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Dorothée Masele</p>
                        <p className="text-sm text-gray-600">Superviseure, Mine Kamoto</p>
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
                      <p className="text-sm text-gray-600">6 mois (180 heures)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Participants</p>
                      <p className="text-sm text-gray-600">20 femmes par cohorte</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Format</p>
                      <p className="text-sm text-gray-600">Présentiel + Coaching individuel</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Certification</p>
                      <p className="text-sm text-gray-600">Certificat de Leadership WIM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Impact du programme</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold">180+</p>
                    <p className="text-green-100">Leaders formées</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">75%</p>
                    <p className="text-green-100">Promotions obtenues</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">4</p>
                    <p className="text-green-100">Cohortes par an</p>
                  </div>
                </div>
              </div>

              {/* Prerequisites */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prérequis</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Expérience de 2+ ans dans le secteur minier</li>
                  <li>• Potentiel de leadership identifié</li>
                  <li>• Engagement à participer activement</li>
                  <li>• Disponibilité pour les sessions</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prête à diriger ?</h3>
                <p className="text-gray-600 mb-4">
                  Développez votre potentiel de leadership et créez un impact durable dans votre organisation.
                </p>
                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Candidater maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
