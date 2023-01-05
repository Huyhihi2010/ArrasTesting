import { Emies } from "../../coder/Emus.js";
import { TankBody } from "../Tank/TankBody.js";
import { Barrel } from "../Tank/Barrel.js";

export class Tridrone{
    constructor(x, y) {
        this.tankBody = new TankBody({x: x, y: y}, Math.floor(Math.random() * 10) + 7, Emies.Color.Pink);
        this.tankBody.team = Emies.Color.NoTeam;
        this.changeTank = true;
    }
    setup() {
        this.tankBody.updateTank();

        this.tankBody.Ai = true;
        this.tankBody.speed = 4;
        this.tankBody.FlagName = false;

        this.tankBody.viewRanage = 250;

        this.tankBody.damagePertick = 0.2;

        this.tankBody.score = 7;
        this.tankBody.canGetScore = false;

        if(this.changeTank) {
            this.tankBody.type = "Shape";
            this.tankBody.maxHealth = 7;
            this.tankBody.health = this.tankBody.maxHealth;
            this.tankBody.sides = 3;
            const chin = Math.floor(Math.random() * 10);
            if(chin < 2) {
                this.tankBody.barrels.push(
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        Math.PI,
                        {
                            lenghtRadius: 1.15,
                            widthRadius: 1.15
                        },
                        true,
                        2,
                        0,
                        0.7,
                        90,
                        "normal",
                        {
                            type: "drone",
                            sizeRadius: 0.7,
                            health: 0.5,
                            damage: 0.09,
                            speed: 7,
                            lifeTime: 0.2,
                            canControl: true,
                            outerShell: null
                        }
                    )
                )
            } else if(chin < 6) {
                this.tankBody.barrels.push(
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        0,
                        {
                            lenghtRadius: 1.65,
                            widthRadius: 1.05
                        },
                        true,
                        2,
                        0,
                        5,
                        2,
                        "normal",
                        {
                            type: "bullet",
                            sizeRadius: 1,
                            health: 0.5,
                            damage: 0.4,
                            speed: 7,
                            lifeTime: 0.4,
                            canControl: false,
                            outerShell: null
                        }
                    )
                )
            }
            this.changeTank = false;
        }
    }
    update() {
        this.setup();
    }
}