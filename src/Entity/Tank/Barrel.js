import { ctx, maxCanvas } from "../../../client/installion.js";
import { Emies } from "../../coder/Emus.js";

export class Barrel{
    constructor({x, y}, offset, angleGun, {lenghtRadius, widthRadius}, canShot, recoil, freeze, repeat, maxDrone, typeGun, {type, sizeRadius, health, damage, speed, lifeTime, canControl, outerShell}) {
        this.pos = {
            x: x,
            y: y
        }
        this.offset = offset;
        this.angle = null;
        this.angleGun = angleGun;
        this.sizeRadius = {
            lenghtRadius: lenghtRadius,
            widthRadius: widthRadius
        }
        this.size = {
            lenght: 0,
            width: 0
        }
        this.color = Emies.Color.Barrel;
        this.lenghtFake = 0;
        this.recoil = recoil;
        this.freeze = freeze;
        this.freezeMax = freeze;
        this.time = 0.2;
        this.repeat = repeat;
        this.canShot = canShot;
        this.maxDrone = maxDrone;
        this.typeGun = typeGun;
        this.projectiles = [];
        this.projectile = {
            type: type,
            sizeRadius: sizeRadius,
            health: health,
            damage: damage,
            speed: speed,
            lifeTime: lifeTime,
            canControl: canControl,
            outerShell: outerShell
        }
        this.barrelChange = true;
        this.alpha = 1;
    }
    drawBarrel() {
        ctx.save();

        ctx.globalAlpha = this.alpha;

        if(this.typeGun === "normal") {
            ctx.save();
            ctx.translate(this.pos.x, this.pos.y);
            ctx.rotate(this.angle + this.angleGun);
            ctx.fillStyle = this.color.body;
            ctx.fillRect(0, (0) - (this.size.width / 2) + this.offset, this.lenghtFake, this.size.width);
            ctx.lineWidth = 2;
            ctx.strokeStyle = this.color.stroke;
            ctx.strokeRect(0, (0) - (this.size.width / 2) + this.offset, this.lenghtFake, this.size.width);
            ctx.restore();
        }

        ctx.restore();
    }
    updateBarrel() {
        
        this.projectiles.forEach((projectile, index) => {
            if(projectile.lifeTime > 0) {
                projectile.updateProjectile();
                projectile.lifeTime-=0.002;
            } else {
                setTimeout(() => {
                    this.projectiles.splice(index, 1);
                }, 0)
            }
            if(projectile.lifeTime < 0.016) {
                gsap.to(projectile, {
                    size: projectile.size * 1.6
                })
                gsap.to(projectile, {
                    alpha: 0
                })
            }
        })

        if(maxCanvas(this, this.size.lenght)) {
            this.drawBarrel();
        }
    }
}