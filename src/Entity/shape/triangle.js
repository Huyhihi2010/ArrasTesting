import { TankBody } from "../Tank/TankBody.js";
import { Emies } from "../../coder/Emus.js";

export class Triangle{
    constructor(x, y) {
        this.tankBody = new TankBody({x: x, y: y}, Math.floor(Math.random()) + 14, Emies.Color.Orange);
        this.tankBody.team = Emies.Color.NoTeam;
        this.changeTank = true;
    }
    setup() {
        this.tankBody.updateTank();

        this.tankBody.Ai = false;
        this.tankBody.FlagName = false;

        this.tankBody.damagePertick = 0.7;

        this.tankBody.spin = true;

        this.tankBody.score = 15;
        this.tankBody.canGetScore = false;

        if(this.changeTank) {
            this.tankBody.type = "Shape";
            this.tankBody.maxHealth = 25;
            this.tankBody.health = this.tankBody.maxHealth;
            this.tankBody.sides = 3;
            this.changeTank = false;
        }
    }
    update() {
        this.setup();
    }
}