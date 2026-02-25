'use client'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '1rem'
}

const center = {
    lat: -11.666, // Lubumbashi coords
    lng: 27.483
}

export function MapEmbed() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    if (!apiKey) {
        return (
            <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/attached_assets/map-placeholder.png')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="relative z-10 text-center p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                    <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-primary dark:text-white">Siège WIM RDC</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Lubumbashi, Haut-Katanga</p>
                    <p className="text-xs text-gray-400 mt-2 max-w-[200px]">(Carte interactive disponible avec clé API)</p>
                </div>
            </div>
        )
    }

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
                options={{
                    disableDefaultUI: true,
                    zoomControl: true,
                    styles: [ // Custom dark/gold style if desired, or standard
                        {
                            featureType: "all",
                            elementType: "geometry",
                            stylers: [{ color: "#242f3e" }]
                        },
                        {
                            featureType: "all",
                            elementType: "labels.text.stroke",
                            stylers: [{ color: "#242f3e" }]
                        },
                        {
                            featureType: "all",
                            elementType: "labels.text.fill",
                            stylers: [{ color: "#746855" }]
                        },
                        {
                            featureType: "administrative.locality",
                            elementType: "labels.text.fill",
                            stylers: [{ color: "#d59563" }]
                        },
                    ]
                }}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    )
}
