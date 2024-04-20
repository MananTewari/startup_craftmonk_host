import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

function IndiaMap() {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) return;

        console.log('Creating map instance...');
        
        const map = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [78.9629, 20.5937],
                zoom: 1
            })
        });

        console.log('Map created:', map);

        return () => {
            console.log('Disposing map instance...');
            map.dispose();
        };
    }, []);

    return (
        <div className="map-container">
            <div ref={mapRef} className="map"></div>
        </div>
    );
}

export default IndiaMap;
