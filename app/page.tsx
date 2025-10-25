"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import FooterNav from "./_components/FooterNav";
import RightSidebar from "./_components/RightSidebar";

export default function Home() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-89.4, 43.07],
      zoom: 12,
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="h-full w-full bg-[#F8F4EE] flex items-center justify-center">
      {/* main content */}
      <main className="relative w-7xl h-[720px] bg-gray-200 rounded-[48px] shadow-lg overflow-hidden flex flex-col">
        {/* map */}
        <div
          ref={mapContainer}
          className="flex-1"
          style={{ overflow: "hidden" }}
        />
        {/* right sidebar */}
        <RightSidebar />
        {/* footer navigation */}
        <FooterNav />
      </main>
    </div>
  );
}
