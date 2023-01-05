import { TankBody } from "../Tank/TankBody.js";
import { setTank } from "../../coder/TankDefense.js";
import { Emies , Tanks } from "../../coder/Emus.js";

export default class Base{
    constructor(x, y, color) {
        this.tankBody = new TankBody({x: x, y: y}, 135, color);
        this.tankBody.team = color;
        this.changeTank = true;
    }
    setup() {
        this.tankBody.updateTank();
        this.tankBody.FlagName = false;
        this.tankBody.outerShell = "domination";
        this.tankBody.type = "Base";
        this.tankBody.changeShell = true;
        this.tankBody.damagePertick = 2;
        if(this.changeTank) {
            this.tankBody.Ai = true;
            this.tankBody.viewRanage = 1000;


            this.tankBody.isDrone = false;
            this.tankBody.isConTrol = false;

            this.tankBody.maxHealth = Infinity;
            this.tankBody.health = this.tankBody.maxHealth;

            setTank(Tanks.Base, this.tankBody);

            this.changeTank = false;
        }
    }
    update() {
        this.setup();
    }
}