import { TankBody } from "../Tank/TankBody.js";
import { Emies } from "../../coder/Emus.js";

export class Astass{
    constructor(x, y) {
        this.tankBody = new TankBody({x: x, y: y}, 30, Emies.Color.Pink);
        this.tankBody.team = Emies.Color.NoTeam;
        this.changeTank = true;
    }
    
    setup() {
        this.tankBody.updateTank();
        
        this.tankBody.Name = "Astass";
        this.tankBody.Ai = true;
        this.tankBody.sides = 0;
        this.tankBody.canGetScore = false;
        this.tankBody.score = 30000;
        this.tankBody.speed = 1;
        this.tankBody.damagePertick = 3;
        this.tankBody.spin = true;
        this.tankBody.outerShell = "spike";
        this.tankBody.changeShell = true;
        this.tankBody.viewRanage = 1000;
        this.tankBody.canMove = true;
    }
    
    update() {
        this.setup();
        
        if(this.changeTank) {
            setTank(Tanks.DominationH, this.tankBody);

            this.tankBody.maxHealth = 3000;
            this.tankBody.health = this.tankBody.maxHealth;
            this.changeTank = false;
        }
    }
}