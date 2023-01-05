import { ctx, maxCanvas2 } from "../../client/installion.js";
import { Emies } from "../coder/Emus.js";

export class Wall{
    constructor({x, y}, size) {
        this.pos = {
            x: x,
            y: y
        }
        this.size = size;
        this.color = Emies.Color.Barrel;
        this.sides = 4;
        this.velocityRecoil = {x: 0, y: 0}
    }
    drawWall() {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(0);
        ctx.fillStyle = this.color.body;
        ctx.fillRect(0 - this.size, 0 - this.size, this.size * 2, this.size * 2);
        ctx.strokeStyle = this.color.stroke;
        ctx.lineWidth = 4;
        ctx.strokeRect(0 - this.size, 0 - this.size, this.size * 2, this.size * 2);
        ctx.restore();
    }
    updateWall() {
        if(maxCanvas2(this, this.size, this.size)) {
            this.drawWall();
        }
        this.pos.x += this.velocityRecoil.x;
        this.pos.y += this.velocityRecoil.y;
        this.velocityRecoil.x *= 0.93;
        this.velocityRecoil.y *= 0.93;
    }
}