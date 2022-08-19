import img from "../assets/images";

export interface food {
  id: string | number;
  name: string;
  image: string;
  price: string;
  cal: number;
  time: number;
}

export const DUMMY_FOOD: food[] = [
  {
    id: 0,
    name: "Sate Ayam",
    image: img.sateAyam,
    price: "20.000",
    cal: 225,
    time: 5,
  },
  {
    id: 1,
    name: "Nasi Padang",
    image: img.nasiPadang,
    price: "25.000",
    cal: 380,
    time: 10,
  },
  {
    id: 2,
    name: "Nasi Goreng",
    image: img.nasiGoreng,
    price: "17.000",
    cal: 222,
    time: 10,
  },
  {
    id: 3,
    name: "Bakmi Gm",
    image: img.bakmiGM,
    price: "40.000",
    cal: 211,
    time: 15,
  },
  {
    id: 4,
    name: "Ayam Geprek",
    image: img.ayamGeprek,
    price: "20.000",
    cal: 255,
    time: 15,
  },
  {
    id: 5,
    name: "Ayam Spicy Jatinagor",
    image: img.ayamSpicyJatinangor,
    price: "29.000",
    cal: 275,
    time: 20,
  },
  {
    id: 6,
    name: "Soto-Ayam",
    image: img.sotoAyam,
    price: "13.000",
    cal: 489,
    time: 10,
  },
  {
    id: 7,
    name: "Gado-gado",
    image: img.gadoGado,
    price: "15.000",
    cal: 318,
    time: 7,
  },
  {
    id: 8,
    name: "rawon",
    image: img.rawon,
    price: "21.000",
    cal: 680,
    time: 8,
  },
  {
    id: 9,
    name: "pempek",
    image: img.pempek,
    price: "25.000",
    cal: 240,
    time: 11,
  },
];

// methods
export const getRandomFood: () => food = () => {
  console.log(Math.floor(Math.random() * DUMMY_FOOD.length));
  return DUMMY_FOOD[Math.floor(Math.random() * DUMMY_FOOD.length)];
};

export const getRandomFoodLink: () => string = () => {
  const foodId = getRandomFood().id;
  return `/food/${foodId}`;
};

export const getFoodById: (id: string | number) => food | null = (
  id: string | number
) => {
  for (let food of DUMMY_FOOD) {
    if (food.id == id) {
      return food;
    }
  }
  return null;
};
