import { TankBody } from "../Tank/TankBody.js";
import { Emies } from "../../coder/Emus.js";

export class Spuare{
    constructor(x, y) {
        this.tankBody = new TankBody({x: x, y: y}, Math.floor(Math.random()) + 13, Emies.Color.NoTeam);
        this.tankBody.team = Emies.Color.NoTeam;
        this.changeTank = true;
    }
    setup() {
        this.tankBody.updateTank();

        this.tankBody.Ai = false;
        this.tankBody.FlagName = false;

        this.tankBody.canGetScore = false;

        this.tankBody.spin = true;

        if(this.changeTank) {
            this.tankBody.type = "Shape";
            this.tankBody.damagePertick = 0.4;
            this.tankBody.score = 10;
            this.tankBody.maxHealth = 10;
            this.tankBody.health = this.tankBody.maxHealth;
            this.tankBody.sides = 4;
            // gem
            if(Math.random() < 0.1) {
                this.tankBody.maxHealth = 50;
                this.tankBody.health = this.tankBody.maxHealth;

                this.tankBody.sides = 6;

                this.tankBody.color = Emies.Color.DarkPurple;

                this.tankBody.size = 6;

                this.tankBody.score = 500;
                this.tankBody.damagePertick = 1;
            }
            this.changeTank = false;
        }
    }
    update() {
        this.setup();
    }
}