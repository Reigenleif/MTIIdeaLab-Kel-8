export interface Kantin {
    id: string | number,
    name: string,
    position: [number, number],
    mapLink: string 
}

export const DUMMY_KANTIN: Kantin[] = [{
    id: 0,
    name: "Kantin Barat Laut",
    position: [-6.889275570739304, 107.61234024475048],
    mapLink: "https://www.google.com/maps/place/Kantin+Barat+Laut+ITB/@-6.8897646,107.6101291,17z/data=!3m1!4b1!4m5!3m4!1s0x2e68e657014903c5:0x5dbb23877ab82cf9!8m2!3d-6.8897703!4d107.6123782"
}]