import { TankBody } from "../Tank/TankBody.js";
import { Emies } from "../../coder/Emus.js";

export class Pentagon{
    constructor(x, y) {
        this.tankBody = new TankBody({x: x, y: y}, Math.floor(Math.random()) + 22, Emies.Color.DarkBlue);
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
            this.tankBody.maxHealth = 75;
            this.tankBody.score = 125;
            this.tankBody.health = this.tankBody.maxHealth;
            this.tankBody.sides = 5;
            const MY = Math.floor(Math.random() * 5);
            if(MY < 2) {
                gsap.to(this.tankBody, {
                    size: 70
                })
                this.tankBody.score = 7500;
                this.tankBody.maxHealth = 3500;
                this.tankBody.health = this.tankBody.maxHealth;
            }
            this.changeTank = false;
        }
    }
    update() {
        this.setup();
    }
}