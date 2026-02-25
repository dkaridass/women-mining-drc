'use client'

import { InnerHero } from '@/components/inner-hero'
import { motion } from 'framer-motion'
import { CheckCircle2, Target, Users } from 'lucide-react'
import { partners } from '@/app/data/partners'
import { team } from '@/app/data/team'
import { history } from '@/app/data/history'

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
}

export default function AboutContent() {
    return (
        <main className="bg-white dark:bg-gray-900">
            <InnerHero
                title="À Propos de Nous"
                subtitle="Découvrez l'histoire, la mission et l'équipe derrière Women in Mining RDC."
                backgroundImage="/attached_assets/hero-bg-2.jpg"
                breadcrumbs={[{ label: 'À Propos', href: '/a-propos' }]}
            />

            {/* MISSION / VISION / VALUES */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {/* Mission */}
                        <motion.div variants={itemVariants} className="bg-background-light dark:bg-gray-800 p-8 rounded-2xl border-l-4 border-accent shadow-soft">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-primary dark:text-white mb-4">Notre Mission</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Mettre fin à toutes formes de discriminations dont sont victimes les femmes du secteur minier de la RDC et promouvoir leur leadership à tous les niveaux.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div variants={itemVariants} className="bg-primary text-white p-8 rounded-2xl shadow-premium relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4">Notre Vision</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Une République Démocratique du Congo développée où l'industrie extractive intègre pleinement l'approche genre et bénéficie équitablement à toutes et tous.
                            </p>
                        </motion.div>

                        {/* Values */}
                        <motion.div variants={itemVariants} className="bg-background-light dark:bg-gray-800 p-8 rounded-2xl border-l-4 border-accent shadow-soft">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-primary dark:text-white mb-4">Nos Valeurs</h3>
                            <ul className="space-y-3">
                                {['Transparence & Intégrité', 'Excellence & Leadership', 'Solidarité & Inclusivité', 'Partenariat Stratégique'].map((val, i) => (
                                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                                        {val}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* HISTORY */}
            <section className="py-24 bg-background-light dark:bg-gray-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                            Notre <span className="text-accent">Histoire</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Depuis 2019, WIM RDC trace la voie pour l'excellence féminine dans les mines.
                        </p>
                    </div>

                    <div className="relative border-l-2 border-accent/20 ml-4 md:ml-0 md:pl-0 space-y-12">
                        {history.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 items-center group"
                            >
                                <div className="hidden md:flex flex-col items-center col-span-1 justify-self-end">
                                    <span className="text-accent font-bold text-xl">{item.year}</span>
                                </div>
                                <div className="absolute left-[-5px] top-1 md:left-auto md:right-[-5px] md:relative md:col-span-0 w-3 h-3 bg-accent rounded-full group-hover:scale-150 transition-transform shadow-glow"
                                    style={{ left: 'calc(0% - 6px)' }}
                                >
                                    <div className="md:hidden absolute left-8 top-0 text-accent font-bold">{item.year}</div>
                                </div>
                                <div className="col-span-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="text-xl font-bold text-primary dark:text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
                            L'Équipe <span className="text-accent">Dirigeante</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <div key={member.id} className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all">
                                <div className="absolute inset-0 bg-gray-200">
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-500">
                                            <Users className="w-12 h-12 opacity-50" />
                                        </div>
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                                    <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">{member.role}</p>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNERS */}
            <section className="py-20 bg-background-light dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-center text-xl font-bold text-gray-500 mb-12 uppercase tracking-widest">Ils nous accompagnent</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
                        {partners.map((partner) => (
                            <div key={partner.id} className="text-center grayscale hover:grayscale-0 transition-all">
                                <span className="font-bold text-lg text-primary dark:text-white">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
