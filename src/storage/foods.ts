import img from "../assets/images";

interface food {
  name: string;
  image: string;
};


export const DUMMY_FOOD: food[] = [{ name: "Sate Ayam", image: img.sateAyam }];

// methods
export const getRandomFood: () => food = () => {
    return DUMMY_FOOD[Math.floor(Math.random()*DUMMY_FOOD.length)]
}