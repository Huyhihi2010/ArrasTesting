import { TankBody } from "../Tank/TankBody.js";
import { Emies, Tanks } from "../../coder/Emus.js";
import { setTank } from "../../coder/TankDefense.js";

export class ArenaCloser{
    constructor(x, y) {
        this.tankBody = new TankBody({x: x, y: y}, 60, Emies.Color.NoTeam);
        this.tankBody.team = Emies.Color.NoTeam;
        this.changeTank = true;
    }
    setup() {

        this.tankBody.updateTank();

        if(this.changeTank) {

            this.tankBody.Ai = true;
            this.tankBody.spin = true;
            this.tankBody.startShot = false;

            this.tankBody.viewRanage = Infinity;

            this.tankBody.speed = 1.5;
            this.tankBody.damagePertick = 5;

            this.tankBody.Name = "Arena Closer";
            this.tankBody.FlagHealth = false;

            this.tankBody.maxHealth = Infinity;
            this.tankBody.health = this.tankBody.maxHealth;

            this.tankBody.healthGen = 0;
            this.tankBody.maxHealthGen = 0;

            setTank(Tanks.ArenaCloser, this.tankBody);
            this.changeTank = false;
        }
    }
    update() {
        this.setup();
    }
}