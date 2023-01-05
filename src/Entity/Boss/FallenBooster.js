import { TankBody } from "../Tank/TankBody.js";
import { Emies } from "../../coder/Emus.js";

export class FallenBooster{
    constructor(x, y) {
        this.tankBody = new TankBody({x: x, y: y}, 40, Emies.Color.Fallen);
        this.tankBody.team = Emies.Color.Null;

        this.changeTank = true;
    }
    setup() {
        this.tankBody.updateTank();

        if(this.changeTank) {
            this.tankBody.Name = "Fallen Booster";

            this.tankBody.viewRanage = 1000;
            this.tankBody.Ai = true;
            this.tankBody.spin = true;

            this.tankBody.maxHealth = 3000;
            this.tankBody.health = this.tankBody.maxHealth;
            this.tankBody.damagePertick = 1;
            this.tankBody.speed = 3;

            this.changeTank = false;
        }
    }
    update() {
        this.setup();
    }
}