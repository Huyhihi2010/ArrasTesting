import { box } from "../../nativi/Object.js";
import { Tanks } from "../Emus.js";
import tankBox from "./boxTank.js";

export default function getLevel(tank) {
    if(tank.create) {
        box.push(
            new tankBox({
                "tank": tank,
                "IdTank": Tanks.ArenaCloser,
                "classLevel": "box1",
                "id": "ArenaCloser",
                "level": 10,
                "color": "yellow"
            })
        )
        tank.create = false;
    }
    box.forEach((boxs) => {
        boxs.update();
    })
}