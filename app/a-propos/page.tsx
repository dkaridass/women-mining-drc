import AboutContent from './about-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'À Propos - Notre Mission et Histoire | Women in Mining RDC',
    description: 'Découvrez WIM RDC, notre mission pour l\'autonomisation des femmes dans les mines, notre histoire depuis 2019 et l\'équipe dirigeante.',
    openGraph: {
        title: 'À Propos de Women in Mining RDC',
        description: 'Promouvoir le leadership féminin dans le secteur minier congolais.',
    }
}

export default function AboutPage() {
    return <AboutContent />
}
