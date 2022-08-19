import { useLocation, useParams } from "react-router";
import FoodUI from "../components/Food";
import { getFoodById } from "../storage/foods";
import Notfound from "./Notfound";

export default function Food() {
    const {foodId} = useParams()
    if (!foodId) {
        return <Notfound/>
    }

    const food = getFoodById(foodId)

    if (!food) {
        return <Notfound/>
    }

    return <FoodUI {...food}/>

}