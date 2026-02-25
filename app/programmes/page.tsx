import ProgramsContent from './programs-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Nos Programmes - Formation et Leadership | WIM RDC',
    description: 'Découvrez nos programmes d\'autonomisation : Formation Technique, Leadership Féminin et Entrepreneuriat dans le secteur minier.',
}

export default function ProgramsPage() {
    return <ProgramsContent />
}
