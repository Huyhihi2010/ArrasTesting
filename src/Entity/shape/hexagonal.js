import { TankBody } from "../Tank/TankBody.js";
import { Emies } from "../../coder/Emus.js";

export class Hexagonal{
    constructor(x, y) {
        this.tankBody = new TankBody({x: x, y: y}, Math.floor(Math.random()) + 30, Emies.Color.Hexagonal);
        this.tankBody.team = Emies.Color.NoTeam;
        this.changeTank = true;
    }
    setup() {
        this.tankBody.updateTank();

        this.tankBody.Ai = false;
        this.tankBody.FlagName = false;

        this.tankBody.damagePertick = 1;

        this.tankBody.spin = true;

        this.tankBody.canGetScore = false;

        if(this.changeTank) {
            this.tankBody.type = "Shape";
            this.tankBody.maxHealth = 1200;
            this.tankBody.health = this.tankBody.maxHealth;
            this.tankBody.sides = 6;
            this.tankBody.score = 500;
            const MY = Math.floor(Math.random() * 5);
            if(MY < 2) {
                gsap.to(this.tankBody, {
                    size: 90
                })
                this.tankBody.damagePertick = 2;
                this.tankBody.score = 15000;
                this.tankBody.maxHealth = 10000;
                this.tankBody.health = this.tankBody.maxHealth;
            }
            this.changeTank = false;
        }
    }
    update() {
        this.setup();
    }
}