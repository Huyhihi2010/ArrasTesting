import { ctx } from "../../client/installion.js";

export class Arena{
    constructor({x, y}, {width, height}) {
        this.pos = {x:x, y:y};
        this.size = {width:width,height:height}
    }
    drawArena() {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(0);
        ctx.fillStyle = "rgb(188, 188, 188)";
        ctx.fillRect(0 - this.size.width, 0 - this.size.height, this.size.width * 2, this.size.height * 2);
        ctx.restore();
    }
    drawStuff() {
        for(var x = 0; x < this.size.width * 2; x += (this.size.width * 2) / 40) {
            for(var y = 0; y < this.size.height * 2; y += (this.size.height * 2) / 40) {
                ctx.fillStyle = "rgb(178, 178, 178)";
                ctx.fillRect((this.pos.x - this.size.width) + (x - 1), (this.pos.y - this.size.height), 2, this.size.height * 2);
                ctx.fillRect((this.pos.x - this.size.width), (this.pos.y - this.size.height) + ( y - 1), this.size.width * 2, 2);
            }
        }
    }
    update() {
        this.drawArena();
        this.drawStuff();
    }
}