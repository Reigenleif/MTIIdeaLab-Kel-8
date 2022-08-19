export interface Kantin {
  id: string | number;
  name: string;
  position: [number, number];
  mapLink: string;
  location: string;
}

export const DUMMY_KANTIN: Kantin[] = [
  {
    id: 0,
    name: "Kantin Barat Laut (KBL)",
    position: [-6.889275570739304, 107.61234024475048],
    mapLink: "https://goo.gl/maps/FXs76ULMksRgTyF19",
    location: "Labtek VII (Gedung Freeport SBM)",
  },
  {
    id: 1,
    name: "Kantin IWK (Kantin GKU Barat)",
    position: [-6.890395436806694, 107.60882413736488],
    mapLink: "https://goo.gl/maps/jZ7LCKNXu5KCu3xEA",
    location: "Gedung Kuliah Umun Barat (GKU-B)",
  },
  {
    id: 2,
    name: "Kantin Tunnel",
    position: [-6.888199872720435, 107.61044999924634],
    mapLink: "https://goo.gl/maps/jEHGsJ7c4fYJXgrK6",
    location: "Sunken Court ITB",
  },
  {
    id: 3,
    name: "Kantin Eititu",
    position: [-6.891079016798578, 107.61075941538438],
    mapLink: "https://goo.gl/maps/Jzfh5Mf2qzwYQ8HU6",
    location: "Campus Center Timur",
  },
  {
    id: 4,
    name: "Kantin Borju",
    position: [-6.890546142442376, 107.60979811455151],
    mapLink: "https://goo.gl/maps/RvDQafaxxFgZPbwy7",
    location: "Labtek V (Gedung Benny Subianto)",
  },
  {
    id: 4,
    name: "Kantin Barrac",
    position: [-6.891553474448049, 107.61166623174302],
    mapLink: "https://goo.gl/maps/DuzRHUGS8v6aXiJ7A",
    location: "Gedung Planologi",
  },
  {
    id: 4,
    name: "Kantin SF",
    position: [-6.8900576297226275, 107.61056431472961],
    mapLink: "https://goo.gl/maps/uAQsZF81PTXjEku1A",
    location: "Basement Labtek VII (Sekolah Farmasi ITB)",
  },
];
