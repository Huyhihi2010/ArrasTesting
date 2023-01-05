import { TankBody } from "../Tank/TankBody.js";
import { canvas, ctx } from "../../../client/installion.js";
import Camera from "../../vecto/camera.js";
import getLevel from "../../coder/level/tankData.js";

export class Player{
    constructor(color) {
        this.tankBody = new TankBody({x: canvas.width / 2, y: canvas.height / 2}, 25, color);
        this.changeTank = true;
        this.tankBody.team = color;
    }
    setup() {
        this.tankBody.updateTank();
        this.tankBody.canMove = false;
        this.tankBody.speed = 3;
        this.tankBody.level = 1;

        if(this.changeTank) {
            // this.tankBody.damagePertick = 6;
            this.tankBody.maxHealth = Infinity;
            this.tankBody.health = this.tankBody.maxHealth;
            this.tankBody.speed = 4;
            this.changeTank = false;
        }

        this.tankBody.outerShell = "domination";
        this.tankBody.changeShell = true;

        this.tankBody.type = "Player";
    }
    update() {
        this.setup();
        getLevel(this.tankBody);
    }
}