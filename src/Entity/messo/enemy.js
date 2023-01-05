import { TankBody } from "../Tank/TankBody.js";
import { Emies } from "../../coder/Emus.js";

export class Enemy{
    constructor(x, y, size, color) {
        this.tankBody = new TankBody({x, y}, size, color);
        this.tankBody.team = color;
    }
    setup() {
        this.tankBody.updateTank();
        this.tankBody.Ai = true;
        this.tankBody.viewRanage = 1400;
        this.tankBody.speed = 2;
        this.tankBody.spin = true;

        this.tankBody.damagePertick = 3;
    }
    update() {
        this.setup();
    }
}