import { Barrel } from "./Barrel.js";
import { ctx, maxCanvas } from "../../../client/installion.js";

export class Projectile{
    constructor({x, y}, angle, type, size, health, damage, velocity, speed, color, canControl, team, lifeTime, outerShell) {
        this.pos = {
            x: x,
            y: y
        }
        this.angle = angle;
        this.type = type;
        this.size = size;
        this.health = health;
        this.damage = damage;
        this.speed = speed;
        this.color = color;
        this.team = team;
        this.lifeTime = lifeTime;
        this.outerShell = outerShell;
        this.damagePertick = 1;
        this.sides = null;
        this.barrels = [];
        this.addons = [];
        this.turrets = [];
        this.startShot = false;
        this.canControl = canControl;
        this.spin = false;
        this.baseSpin = {
            x: angle,
            y: angle
        };
        this.speedSpin = Math.random() / 10 + 0.002;
        this.velocity = velocity;
        this.mouse = {
            x: null,
            y: null
        }
        this.velocityRecoil = {
            x: null,
            y: null
        }
        this.angleShell = {
            _1: 0,
            _2: 0,
            _3: 0,
            _4: 0,
            _5: 0,
            _6: 0,
            _7: 0,
            _8: 0,
            _9: 0,
            _10: 0,
            _11: 0,
            _12: 0,
            _13: 0,
            _14: 0
        }
        this.changeShell = true;
        this.alpha = 1;
        this.mass = 1;
    }
    drawProjectile() {
        ctx.save();
        
        ctx.globalAlpha = this.alpha;
        
        if(this.type === "bullet") {
            ctx.save();
            
            //Stroke Projectile
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI*2, false);
            ctx.closePath();
            ctx.fillStyle = this.color.stroke;
            ctx.fill();
            ctx.restore();
            //Body Projectile
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.size - (this.size / 20), 0, Math.PI*2, false);
            ctx.closePath();
            ctx.fillStyle = this.color.body;
            ctx.fill();
            ctx.restore();
            
            ctx.restore();
        }
        if(this.type === "drone") {
            
            this.sides = 3;
            
            ctx.save();
            ctx.strokeStyle = this.color.stroke;
            ctx.lineWidth = 2;
            ctx.fillStyle = this.color.body;
            ctx.translate(this.pos.x, this.pos.y);
            ctx.rotate(this.angle - Math.PI*0.5);
            ctx.beginPath();
            ctx.moveTo(0, this.size);
            for(var i = 0; i < this.sides; i++) {
                ctx.rotate(360 / this.sides * (Math.PI / 180));
                ctx.lineTo(0, this.size);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }

        if(this.type === "minidrone") {
            
            this.sides = 3;
            
            ctx.save();
            ctx.strokeStyle = this.color.stroke;
            ctx.lineWidth = 2;
            ctx.fillStyle = this.color.body;
            ctx.translate(this.pos.x, this.pos.y);
            ctx.rotate(this.angle - Math.PI*0.5);
            ctx.beginPath();
            ctx.moveTo(0, this.size);
            for(var i = 0; i < this.sides; i++) {
                ctx.rotate(360 / this.sides * (Math.PI / 180));
                ctx.lineTo(0, this.size);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }

        if(this.type === "trap") {
            
            this.sides = 3;
            
            ctx.save();
            ctx.strokeStyle = this.color.stroke;
            ctx.lineWidth = 2;
            ctx.fillStyle = this.color.body;
            ctx.translate(this.pos.x, this.pos.y);
            ctx.rotate(this.angle - Math.PI*0.5);
            ctx.beginPath();
            ctx.moveTo(0, this.size);
            for(var i = 0; i < this.sides; i++) {
                ctx.rotate(360 / this.sides * (Math.PI / 180));
                ctx.lineTo(0, this.size);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();

        }
        
        ctx.restore();
    }
    updateProjectile() {
        this.barrels.forEach((barrel) => {
            barrel.pos.x = this.pos.x + Math.cos(this.angle) * barrel.offset;
            barrel.pos.y = this.pos.y + Math.sin(this.angle) * barrel.offset;
            barrel.updateBarrel();
        })
        
        if(maxCanvas(this, this.size)) {
            this.drawProjectile();
        }

        if(this.type === "trap") {
            this.velocity.x *= 0.96;
            this.velocity.y *= 0.96;
            this.angle *= 0.92;
        }
        
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
        this.pos.x += this.velocityRecoil.x;
        this.pos.y += this.velocityRecoil.y;
        this.velocityRecoil.x *= 0.95;
        this.velocityRecoil.y *= 0.95;
    }
}