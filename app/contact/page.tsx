import ContactContent from './contact-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contactez WIM RDC | Inscription et Partenariat',
    description: 'Entrez en contact avec Women in Mining RDC. Adresse à Lubumbashi, email et formulaire pour adhésions ou partenariats.',
}

export default function ContactPage() {
    return <ContactContent />
}
