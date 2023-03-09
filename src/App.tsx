import { Map, NavigationControl } from 'maplibre-gl';
import { type FC, useEffect, useRef } from 'react';

import 'maplibre-gl/dist/maplibre-gl.css';

// Style URL作成
const styleURL = `https://maps.geo.${import.meta.env.VITE_MAP_REGION}.amazonaws.com/maps/v0/maps/${
  import.meta.env.VITE_MAP_NAME
}/style-descriptor?key=${import.meta.env.VITE_MAP_API_KEY}`;

const App: FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstance.current) return;
    // Map作成
    mapInstance.current = new Map({
      container: mapContainerRef.current,
      style: styleURL,
      center: [139.7673068, 35.6809591],
      zoom: 15,
    });
    // Navigation Control追加
    mapInstance.current.addControl(
      new NavigationControl({
        showCompass: true,
        showZoom: true,
        visualizePitch: true,
      }),
      'top-right'
    );
  });
  return (
    <div ref={mapContainerRef} className={'relative w-full min-h-screen'}>
      <button
        className={
          'absolute top-2 left-2 z-10 rounded bg-white py-1 px-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
        }
        onClick={() => {
          mapInstance.current?.flyTo({
            center: [139.7673068, 35.6809591],
            zoom: 15,
          });
        }}
      >
        Go to Tokyo
      </button>
    </div>
  );
};

export default App;
