import img from "../assets/images";

interface food {
  name: string;
  image: string;
  price: number;
  cal: number;
  time: number;
}

export const DUMMY_FOOD: food[] = [
  { name: "Sate Ayam", image: img.sateAyam, price: 20000, cal: 225, time: 5 },
];

// methods
export const getRandomFood: () => food = () => {
  return DUMMY_FOOD[Math.floor(Math.random() * DUMMY_FOOD.length)];
};
