import { ctx, maxCanvas2 } from "../../client/installion.js";

export class TeamBase{
    constructor({x, y}, {width, height}, color, base) {
        this.pos = {
            x: x,
            y: y
        }
        this.size = {
            width: width,
            height: height
        }
        this.color = color;
        this.base = base;
        this.alpha = 0.08;
    }
    drawTeamBase() {
        ctx.save();
        
        ctx.globalAlpha = this.alpha;
        
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(0);
        ctx.fillStyle = this.color.body;
        ctx.fillRect(0 - this.size.width, 0 - this.size.height, this.size.width * 2, this.size.height * 2);
        ctx.restore();
    }
    updateTeamBase() {
        if(maxCanvas2(this, this.size.width, this.size.height)) {
            this.drawTeamBase();
        }
    }
}