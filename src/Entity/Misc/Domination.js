import { TankBody } from "../Tank/TankBody.js";
import { setTank } from "../../coder/TankDefense.js";
import { Emies , Tanks } from "../../coder/Emus.js";

export class Domination{
    constructor(x, y, teambase, color) {
        this.tankBody = new TankBody({x: x, y: y}, 60, color);
        this.tankBody.teambases.push(teambase);
        this.tankBody.team = color;
        this.changeTank = true;
    }
    setup() {
        this.tankBody.updateTank();
        this.tankBody.FlagName = false;
        this.tankBody.outerShell = "domination";
        this.tankBody.type = "Domination";
        this.tankBody.changeShell = true;
        this.tankBody.damagePertick = 2;
        if(this.changeTank) {
            this.tankBody.Ai = true;
            this.tankBody.viewRanage = 1000;


            this.tankBody.isDrone = false;
            this.tankBody.isConTrol = false;

            this.tankBody.maxHealth = 10000;
            this.tankBody.health = this.tankBody.maxHealth;

            const id = Math.floor(Math.random() * 3);

            switch (id) {
                case 1:
                    setTank(Tanks.DominationH, this.tankBody);
                    break;
                case 2:
                    setTank(Tanks.DominationG, this.tankBody);
                    break;
                default:
                    setTank(Tanks.DominationT, this.tankBody);
                    this.tankBody.autoSpin = true;
                    break;
            }

            this.changeTank = false;
        }
    }
    update() {
        this.setup();
    }
}