"use client";

import { useEffect, useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function FarmMap() {
    const position: [number, number] = [-19.812222, -46.334166];
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const customIcon = useMemo(() => {
        return new L.Icon({
            iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
    }, []);

    if (!mounted) return (
        <div className="h-[500px] w-full bg-[var(--surface-card)] animate-pulse rounded-lg flex items-center justify-center text-[var(--text-muted)] border-4 border-white shadow-xl">
            Carregando mapa...
        </div>
    );

    return (
        <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-xl border-4 border-white z-0 relative">
             <MapContainer 
                center={position} 
                zoom={14} 
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
            >
                <LayersControl position="topright">
                    <LayersControl.BaseLayer name="Mapa">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer checked name="Satélite">
                        <TileLayer
                            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>
                
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        <strong>Fazenda Altos da Pratinha</strong><br />
                        Café Praça da Moça<br />
                        Pratinha, MG
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
