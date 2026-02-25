'use client'

import { InnerHero } from '@/components/inner-hero'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Share2 } from 'lucide-react'
import Image from 'next/image'

const galleryImages = [
    '/images/indaba/IMG_0619.jpg',
    '/images/indaba/IMG_0777.jpg',
    '/images/indaba/IMG_0781.jpg',
    '/images/indaba/IMG_0791.jpg',
    '/images/indaba/IMG_0796.jpg',
    '/images/indaba/IMG_0797.jpg',
    '/images/indaba/IMG_0803.jpg',
    '/images/indaba/IMG_0805.jpg',
    '/images/indaba/IMG_0838.jpg',
]

export default function ArticlePage() {
    return (
        <main className="bg-white dark:bg-gray-900 pb-20">
            {/* Hero Section */}
            <InnerHero
                title="Women in Mining DRC brille à Cape Town"
                subtitle="Célébration du leadership et de l'innovation au Mining Indaba 2026"
                backgroundImage="/images/indaba/IMG_0850.jpg"
                breadcrumbs={[
                    { label: 'Actualités', href: '/actualites' },
                    { label: 'Mining Indaba 2026', href: '#' }
                ]}
            />

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-12 border-b border-gray-100 pb-8">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>11 Février 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>Cape Town International Convention Centre (CTICC)</span>
                    </div>
                    <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors ml-auto">
                        <Share2 className="w-4 h-4" />
                        <span>Partager</span>
                    </button>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:text-primary dark:prose-headings:text-white prose-a:text-accent">

                    <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
                        WIM RDC a rassemblé des femmes leaders et des alliés au CTICC à l'occasion du Mining Indaba 2026 pour célébrer le leadership et l'innovation.
                    </p>

                    <p>
                        Women in Mining DRC (WIM RDC) a une fois de plus réaffirmé sa mission primordiale : promouvoir l'autonomisation et catalyser l'ascension des femmes dans le secteur minier congolais. Le 11 février 2026 à 17h00, un événement historique s'est tenu dans la somptueuse salle Okavango Delta Hall du Cape Town International Convention Centre (CTICC). Intitulé « Celebrating WIM DRC's Journey and the Women Who Dared to Lead », cet événement exclusif organisé en marge du prestigieux Mining Indaba 2026 a fait salle comble. Cette rencontre de haut vol a réuni des femmes leaders exceptionnelles, des expertes chevronnées, de nombreux professionnels de l'industrie ainsi que des partenaires mondiaux incontournables venus de la République Démocratique du Congo (RDC) et d'ailleurs. Au cœur des échanges figurait une ambition noble et essentielle : mettre en lumière le leadership transformationnel et les innovations portées par les femmes évoluant dans un secteur en pleine mutation.
                    </p>

                    <h2 className="mt-12 mb-6">Honorer un parcours de courage</h2>
                    <p>
                        Cet événement a constitué un moment solennel pour revenir sur le parcours remarquable de WIM RDC. Depuis sa création, l'association n'a cessé d'œuvrer pour bâtir une communauté soudée, plaider en faveur d'une véritable inclusion des genres et ouvrir des portes jadis inaccessibles. Ses efforts continus garantissent aujourd'hui aux femmes de nouvelles opportunités déterminantes, que ce soit dans l'ingénierie, la géologie, les opérations minières sur site, la haute finance, ou la gestion des normes environnementales, sociales et de gouvernance (ESG). Comme l'illustrent les magnifiques images capturées tout au long de la soirée, les puissants discours prononcés lors de la séance inaugurale et les longues ovations ont célébré avec brio cet héritage d'excellence. La cérémonie a offert une reconnaissance bien méritée aux pionnières qui ont « osé diriger » au sein d'environnements complexes. De cette soirée s'est dégagée une vérité indéniable : ce courage et cette persévérance forgent l'ossature d'une communauté inébranlable et pionnière.
                    </p>

                    {/* Mid-article Image Feature */}
                    <figure className="my-12">
                        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/indaba/IMG_0817.jpg"
                                alt="Les leaders de WIM DRC sur scène au CTICC"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <figcaption className="text-center text-sm text-gray-500 mt-3">Panel de discussion et interventions lors de l'événement WIM RDC</figcaption>
                    </figure>

                    <h2 className="mt-12 mb-6">Des femmes qui dirigent et innovent</h2>
                    <p>
                        Le sommet du rassemblement a été l'opportunité de donner la parole à des femmes qui, au quotidien, dirigent et redéfinissent les contours de l'innovation et de l'excellence opérationnelle. Directrices générales, gestionnaires de méga-projets d'infrastructures, ardentes défenseuses de l'ESG, ou encore bâtisseuses engagées dans le développement communautaire ont partagé des témoignages poignants. La dynamique capturée dans les photos des panels est révélatrice : des oratrices inspirantes échangeant depuis la scène principale, des sessions interactives, ainsi que de vibrants moments de transmission avec les médias et les alliés du réseau. Toutes ces réussites individuelles ne sont pas des exceptions isolées. Au contraire, elles font écho à une transition cruciale où l'on observe que les femmes s'affirment de plus en plus dans des postes de direction stratégique, technique et exécutive en RDC, résonnant puissamment avec l'essor extraordinaire des women in African mining.
                    </p>

                    <h2 className="mt-12 mb-6">Réseaux, mentors et nouvelles opportunités</h2>
                    <p>
                        Au croisement des sessions plénières et des remises de témoignages de reconnaissance s'est orchestré un foisonnement de rencontres formelles et informelles. L'ambiance des séances de réseautage a été l'un des joyaux de la soirée. Dans les vastes espaces du CTICC, des ponts intergénérationnels et transnationaux ont été érigés. Des professionnelles influentes ont pu nouer des liens cruciaux avec d'importants investisseurs, des ministres, des cadres de multinationales, ainsi qu'avec des étudiants prometteurs et de jeunes actifs de la diaspora et du continent. Ce terreau fertile de discussions et d'échanges a été pensé pour cultiver des opportunités professionnelles inédites. Soulignons au passage le rôle fondamental du mentorat : pour ces nombreuses jeunes professionnelles de la RDC et d'Afrique, la proximité et les conseils de modèles de réussite ("role models") féminins constituent de redoutables leviers d'accélération de carrière indispensables pour garantir une relève forte et innovante.
                    </p>

                    <h2 className="mt-12 mb-6">Une voix plus forte pour les femmes dans le secteur minier</h2>
                    <p>
                        En toile de fond de cette célébration magistrale, plusieurs messages vitaux ont convergé. L'audience a acquis la certitude inébranlable que l'inclusion n'est pas qu'une simple exigence morale, mais bel et bien un incroyable moteur de rentabilité et de performance. Les statistiques et les expériences le confirment : les équipes incluant des profils diversifiés innovent plus efficacement, conçoivent de meilleures stratégies de gestion de risque et construisent des solutions locales beaucoup plus pérennes. Pour que ce changement s'ancre dans la durée, les femmes doivent inévitablement détenir une voix forte et centrale aux tables des grandes décisions de l'industrie minière. Animée par les retours triomphants de cet événement, Women in Mining DRC continuera à promouvoir sans relâche ses programmes intensifs de renforcement de capacités, de formation au leadership, et de plaidoyer institutionnel, agissant pour offrir plus de visibilité aux femmes qui soutiennent au quotidien l'intégralité de la chaîne de valeur extractiviste, allant des découvertes exploratoires jusqu'à la chaîne de valorisation.
                    </p>

                    <p className="font-medium text-primary dark:text-white mt-8 p-6 bg-background-light dark:bg-gray-800 rounded-xl border-l-4 border-accent">
                        Ces espaces de dialogue exclusifs créés à l'occasion d'initiatives comme celles de Cape Town remplissent une finalité incontournable. Ils relient organiquement les expertes congolaises de l'exploitation minière à l'écosystème exceptionnellement riche de leurs partenaires continentaux et internationaux. Nous enjoignons nos concitoyens, l'industrie globale et nos futurs partenaires à continuer de suivre et soutenir les programmes phares, les formations et les prochaines alliances formées par l'association WIM RDC. Ensemble, œuvrons pour un secteur minier plus juste, plus inclusif et remarquablement orienté vers l'avenir.
                    </p>
                </div>

                {/* Photo Gallery Section */}
                <div className="mt-20 border-t border-gray-100 pt-16">
                    <h3 className="text-3xl font-display font-bold text-primary dark:text-white mb-8 text-center">
                        Galerie de l'Événement
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all"
                            >
                                <Image
                                    src={src}
                                    alt={`WIM DRC Mining Indaba Gallery ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </article>
        </main>
    )
}
