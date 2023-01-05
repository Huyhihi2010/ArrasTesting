import { Projectile } from "./Projectile.js";
import { LimitArenaProjectile } from "../../vecto/collsion.js";
import { resolveCollision, resolveCollisionDrone, MakeSmall, distance, maxCanvas } from "../../../client/installion.js";
import { ctx } from "../../../client/installion.js";
import { arenas } from "../../nativi/Object.js";
import { Distance , Angle } from "../../../client/installion.js";
import { Emies } from "../../coder/Emus.js";

export class TankBody {
    constructor({x, y}, size, color) {
        this.Name = "Unknown Tank";
        this.pos = {
            x: x,
            y: y
        }
        this.create = true;
        this.isColor = true;
        this.canGetScore = true;
        this.level = 0;
        this.defaultLevel = 45;
        this.exp = 0;
        this.score = 0;
        this.type = null;
        this.giveScore = false;
        this.outerShell = null;
        this.changeShell = false;
        this.damagePertick = 1;
        this.size = size;
        this.color = color;
        this.team = color;
        this.barrels = [];
        this.addons = [];
        this.turrets = [];
        this.sides = null;
        this.health = null;
        this.Ai = false;
        this.AiCanControl = false;
        this.viewRanage = null;
        this.angle = null;
        this.angleAddon = null;
        this.teambases = [];
        this.velocity = {
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
        this.FlagName = true;
        this.FlagHealth = true;
        this.target = false;
        this.isTarget = false;
        this.startMove = false;
        this.canMove = true;
        this.startShot = false;
        this.autoShot = false;
        this.Shot = false;
        this.spin = false;
        this.autoSpin = false;
        this.useDrone = true;
        this.mouse = {
            x: null,
            y: null
        }
        this.alpha = 1;
        this.died = false;
        this.speed = null;
        this.mass = 1;
        this.health = 100;
        this.healthGen = 500;
        this.maxHealthGen = 500;
        this.maxHealth = 100;
        this.alphaHealth = 0;
        this.isAttacked = false;
        this.replceColor = false;
        this.isConTrol = false;
        this.isDrone = false;
        this.stopAi = false;
    }
    drawBody() {
        ctx.save();

        ctx.globalAlpha = this.alpha;

        if(this.isColor) {
            if(this.sides <= 2) {
                ctx.save();
                
                //Stroke Tank
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI*2, false);
                ctx.closePath();
                ctx.fillStyle = this.color.stroke;
                ctx.fill();
                ctx.restore();
                //Body Tank
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.size - (this.size / 20), 0, Math.PI*2, false);
                ctx.closePath();
                ctx.fillStyle = this.color.body;
                ctx.fill();
                ctx.restore();
                
                ctx.restore();
            } else {
                ctx.save();
                ctx.strokeStyle = this.color.stroke;
                ctx.lineWidth = 2;
                ctx.fillStyle = this.color.body;
                ctx.translate(this.pos.x, this.pos.y);
                ctx.rotate(this.angle + Math.PI*0.5*this.sides);
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
        } else {
            if(this.sides <= 2) {
                ctx.save();
                
                //Stroke Tank
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI*2, false);
                ctx.closePath();
                ctx.fillStyle = Emies.Color.Barrel.stroke;
                ctx.fill();
                ctx.restore();
                //Body Tank
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.size - (this.size / 20), 0, Math.PI*2, false);
                ctx.closePath();
                ctx.fillStyle = Emies.Color.Barrel.body;
                ctx.fill();
                ctx.restore();
                
                ctx.restore();
            } else {
                ctx.save();
                ctx.strokeStyle = Emies.Color.Barrel.stroke;
                ctx.lineWidth = 2;
                ctx.fillStyle = Emies.Color.Barrel.body;
                ctx.translate(this.pos.x, this.pos.y);
                ctx.rotate(this.angle + Math.PI*0.5*this.sides);
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
        }

        ctx.restore();
    }
    
    outerShellTank() {

        ctx.save();

        ctx.globalAlpha = this.alpha;

        if(this.outerShell === "sideTank") {
            this.damagePertick = 3;
            ctx.save();
            ctx.strokeStyle = "#202020";
            ctx.lineWidth = 2;
            ctx.fillStyle = "#202020";
            ctx.translate(this.pos.x, this.pos.y);
            ctx.rotate(this.angle + Math.PI*0.5*this.sides);
            ctx.beginPath();
            ctx.moveTo(0, this.size * 1.35);
            for(var i = 0; i < this.sides; i++) {
                ctx.rotate(360 / this.sides * (Math.PI / 180));
                ctx.lineTo(0, this.size * 1.35);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }
        if(this.changeShell) {
            let site = 0;
            if(this.outerShell === "domination") {
                site = 6;
                ctx.save();
                ctx.strokeStyle = "#202020";
                ctx.lineWidth = 2;
                ctx.fillStyle = "#202020";
                ctx.translate(this.pos.x, this.pos.y);
                ctx.rotate(Math.PI*0.5);
                ctx.beginPath();
                ctx.moveTo(0, this.size * 1.35);
                for(var i = 0; i < site; i++) {
                    ctx.rotate(360 / site * (Math.PI / 180));
                    ctx.lineTo(0, this.size * 1.35);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            }
            if(this.outerShell === "spike") {
                this.damagePertick = 4;
                site = 7;
                ctx.save();
                ctx.strokeStyle = "#202020";
                ctx.lineWidth = 2;
                ctx.fillStyle = "#202020";
                ctx.translate(this.pos.x, this.pos.y);
                ctx.rotate(this.angleShell._1);
                ctx.beginPath();
                ctx.moveTo(0, this.size * 1.35);
                for(var i = 0; i < site; i++) {
                    ctx.rotate(360 / site * (Math.PI / 180));
                    ctx.lineTo(0, this.size * 1.35);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();
                this.angleShell._1 += 0.1;
            }
            if(this.outerShell === "spike-2") {
                this.damagePertick = 6;
                site = 3;
                ctx.save();
                ctx.strokeStyle = "#202020";
                ctx.lineWidth = 2;
                ctx.fillStyle = "#202020";
                ctx.translate(this.pos.x, this.pos.y);
                ctx.rotate(this.angleShell._1);
                ctx.beginPath();
                ctx.moveTo(0, this.size * 1.65);
                for(var i = 0; i < site; i++) {
                    ctx.rotate(360 / site * (Math.PI / 180));
                    ctx.lineTo(0, this.size * 1.65);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();
                
                ctx.save();
                ctx.strokeStyle = "#202020";
                ctx.lineWidth = 2;
                ctx.fillStyle = "#202020";
                ctx.translate(this.pos.x, this.pos.y);
                ctx.rotate(this.angleShell._2);
                ctx.beginPath();
                ctx.moveTo(0, this.size * 1.65);
                for(var i = 0; i < site; i++) {
                    ctx.rotate(360 / site * (Math.PI / 180));
                    ctx.lineTo(0, this.size * 1.65);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();
                this.angleShell._1 += 0.1;
                this.angleShell._2 += -0.1;
            }
            if(this.outerShell === "mega-spike") {
                this.damagePertick = 8;
                site = 5;
                ctx.save();
                ctx.strokeStyle = "#202020";
                ctx.lineWidth = 2;
                ctx.fillStyle = "#202020";
                ctx.translate(this.pos.x, this.pos.y);
                ctx.rotate(this.angleShell._1);
                ctx.beginPath();
                ctx.moveTo(0, this.size * 1.55);
                for(var i = 0; i < site; i++) {
                    ctx.rotate(360 / site * (Math.PI / 180));
                    ctx.lineTo(0, this.size * 1.55);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();
                this.angleShell._1 += 0.1;
            }
            if(this.outerShell === "destroy-spike") {
                this.damagePertick = 70;
                site = 5;

                ctx.save();
                ctx.strokeStyle = "#202020";
                ctx.lineWidth = 2;
                ctx.fillStyle = "#202020";
                ctx.translate(this.pos.x, this.pos.y);
                ctx.rotate(this.angleShell._5);
                ctx.beginPath();
                ctx.moveTo(0, this.size * 5.95);
                for(var i = 0; i < 3; i++) {
                    ctx.rotate(360 / 3 * (Math.PI / 180));
                    ctx.lineTo(0, this.size * 5.95);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();

                ctx.save();
                ctx.strokeStyle = "#202020";
                ctx.lineWidth = 2;
                ctx.fillStyle = "#202020";
                ctx.translate(this.pos.x, this.pos.y);
                ctx.rotate(this.angleShell._4);
                ctx.beginPath();
                ctx.moveTo(0, this.size * 4.55);
                for(var i = 0; i < site; i++) {
                    ctx.rotate(360 / site * (Math.PI / 180));
                    ctx.lineTo(0, this.size * 4.55);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();

                ctx.save();
                ctx.strokeStyle = this.color.stroke;
                ctx.lineWidth = 2;
                ctx.fillStyle = this.color.body;
                ctx.translate(this.pos.x, this.pos.y);
                ctx.rotate(this.angleShell._3);
                ctx.beginPath();
                ctx.moveTo(0, this.size * 3.55);
                for(var i = 0; i < site; i++) {
                    ctx.rotate(360 / site * (Math.PI / 180));
                    ctx.lineTo(0, this.size * 3.55);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();

                ctx.save();
                ctx.strokeStyle = this.color.stroke;
                ctx.lineWidth = 2;
                ctx.fillStyle = this.color.body;
                ctx.translate(this.pos.x, this.pos.y);
                ctx.rotate(this.angleShell._2);
                ctx.beginPath();
                ctx.moveTo(0, this.size * 2.55);
                for(var i = 0; i < site; i++) {
                    ctx.rotate(360 / site * (Math.PI / 180));
                    ctx.lineTo(0, this.size * 2.55);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();

                ctx.save();
                ctx.strokeStyle = this.color.stroke;
                ctx.lineWidth = 2;
                ctx.fillStyle = this.color.body;
                ctx.translate(this.pos.x, this.pos.y);
                ctx.rotate(this.angleShell._1);
                ctx.beginPath();
                ctx.moveTo(0, this.size * 1.55);
                for(var i = 0; i < site; i++) {
                    ctx.rotate(360 / site * (Math.PI / 180));
                    ctx.lineTo(0, this.size * 1.55);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();

                this.angleShell._1 += 0.07;
                this.angleShell._2 -= 0.06;
                this.angleShell._3 += 0.05;
                this.angleShell._4 -= 0.04;
                this.angleShell._5 += 0.1;
            }
            this.changeShell = false;
        }

        ctx.restore();
    }
    
    flagName() {

        ctx.save();

        ctx.globalAlpha = this.alpha;

        if(this.FlagName) {
            ctx.save();
            
            ctx.translate(this.pos.x, this.pos.y);
            
            ctx.textAlign = "center";
            ctx.font = `${this.size / 1.5}px Arial, Helvetica, sans-serif`;
            ctx.lineWidth = this.size / 20;
            ctx.strokeStyle = "black";
            ctx.strokeText(this.Name, 0, 0 - this.size * 1.7);
            
            ctx.fillStyle = "white";
            ctx.fillText(this.Name, 0, 0 - this.size * 1.7);
            
            ctx.restore();

            ctx.save();
            
            ctx.translate(this.pos.x, this.pos.y);
            
            ctx.textAlign = "center";
            ctx.font = `${15}px Arial, Helvetica, sans-serif`;
            ctx.lineWidth = this.size / 40;
            ctx.strokeStyle = "black";
            ctx.strokeText(MakeSmall(this.score), 0, 12 - this.size * 1.6);
            
            ctx.fillStyle = "white";
            ctx.fillText(MakeSmall(this.score), 0, 12 - this.size * 1.6);
            
            ctx.restore();
        }

        ctx.restore();
    }
    
    flagHealth() {
        if(this.FlagHealth) {
            if(this.health > 0) {
                ctx.save();
            
                ctx.globalAlpha = this.alphaHealth;
            
                ctx.translate(this.pos.x, this.pos.y + this.size * 1.1);
                ctx.rotate(0);
            
                ctx.fillStyle = "lime";
                ctx.fillRect(0 - ((this.maxHealth / (this.maxHealth / 100)) * (this.size / 55)) / 2, 0, ((this.health / (this.maxHealth / 100)) * (this.size / 55)), 5);
           
                ctx.lineWidth = 2;
                ctx.strokeStyle = "green";
                ctx.strokeRect(0 - ((this.maxHealth / (this.maxHealth / 100)) * (this.size / 55)) / 2, 0, ((this.maxHealth / (this.maxHealth / 100)) * (this.size / 55)), 5);

                ctx.restore();
            }
        }
    }

    Attacked() {
        setInterval(() => {
            if(this.isAttacked) {
                if(this.replceColor) {
                    this.replceColor = false;
                } else {
                    this.replceColor = true;
                }
            }
        }, 8)
    }

    viewRanageShow() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.viewRanage, 0, Math.PI*2, false);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 0, 0, 0.2)";
        ctx.fill();
        ctx.restore();
    }

    TankIsAttacked() {
        if(this.isAttacked) {
            if(this.sides <= 2) {
                if(this.replceColor) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI*2, false);
                    ctx.closePath();
                    ctx.fillStyle = "rgb(255, 0, 0, 0.7)";
                    ctx.fill();
                    ctx.restore();
                } else {
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI*2, false);
                    ctx.closePath();
                    ctx.fillStyle = "rgb(255, 255, 255, 0.7)";
                    ctx.fill();
                    ctx.restore();
                }
            } else {
                if(this.replceColor) {
                    ctx.save();
                    ctx.strokeStyle = "rgb(255, 0, 0, 0.7)";
                    ctx.lineWidth = 2;
                    ctx.fillStyle = "rgb(255, 0, 0, 0.7)";
                    ctx.translate(this.pos.x, this.pos.y);
                    ctx.rotate(this.angle + Math.PI*0.5*this.sides);
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
                } else {
                    ctx.save();
                    ctx.strokeStyle = "rgb(255, 255, 255, 0.7)";
                    ctx.lineWidth = 2;
                    ctx.fillStyle = "rgb(255, 255, 255, 0.7)";
                    ctx.translate(this.pos.x, this.pos.y);
                    ctx.rotate(this.angle + Math.PI*0.5*this.sides);
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
            }
        }
    }
    
    updateTank() {

        if(maxCanvas(this, this.size)) {
            this.Attacked();
        }

        if(this.died) {
            if(this.alpha > 0) {
                gsap.to(this, {
                    size: this.size * 1.4
                })
                this.alpha -= 0.1;
            }
        }
        
        if(this.health >= this.maxHealth) {
            gsap.to(this, {
                alphaHealth: 0
            })
        } else {
            gsap.to(this, {
                alphaHealth: 1
            })
        }

        setInterval(() => {
            if(this.target) {
                this.target = false;
            }
            if(this.isTarget) {
                this.isTarget = false;
            }
        }, 100)

        setInterval(() => {
            if(this.isAttacked) {
                this.isAttacked = false;
            }
        }, 30)

        if(this.isAttacked) {
            this.healthGen = this.maxHealthGen;
        }

        if(this.health < this.maxHealth) {
            if(this.healthGen <= 0) {
                this.health += this.maxHealth / 1000;
            } else {
                this.healthGen--;
            }
        }
        
        if(this.health > this.maxHealth) {
            this.health = this.maxHealth;
        }
        
        this.teambases.forEach((teambase) => {
            teambase.updateTeamBase();
            teambase.pos.x = this.pos.x;
            teambase.pos.y = this.pos.y;
            teambase.color = this.color;
        })
        
        if(maxCanvas(this, this.size)) {
            this.outerShellTank();
        }

        this.addons.forEach((addon) => {
            addon.update();

            addon.tankBody.color = this.color;
            addon.tankBody.team = this.team;

            if(this.stopAi) {
                if(addon.canAi) {
                    addon.tankBody.Ai = false;
                }
            } else {
                if(addon.canAi) {
                    addon.tankBody.Ai = true;
                }
            }

            if(!addon.tankBody.target && addon.canControl) {
                if(addon.canShot) {
                    addon.tankBody.startShot = this.startShot;
                    addon.tankBody.autoShot = this.autoShot;
                    addon.tankBody.useDrone = this.useDrone;
                }
            }

            addon.tankBody.pos.x = this.pos.x + Math.cos(this.angle + addon.angle) * (this.size + addon.offset);
            addon.tankBody.pos.y = this.pos.y + Math.sin(this.angle + addon.angle) * (this.size + addon.offset);

            if(!addon.tankBody.target && addon.canControl) {
                if(this.startShot || this.autoShot || !this.useDrone) {
                    if(addon.canShot) {
                        gsap.to(addon.tankBody.mouse, {
                            x: this.mouse.x,
                            y: this.mouse.y
                        })
                    }
                } else {
                    gsap.to(addon.tankBody.mouse, {
                        x: addon.tankBody.pos.x + Math.cos(this.angle + addon.angle) * ((this.size * 2) + addon.offset),
                        y: addon.tankBody.pos.y + Math.sin(this.angle + addon.angle) * ((this.size * 2) + addon.offset)
                    })
                }
            }
        })
        
        this.barrels.forEach((barrel) => {
            barrel.pos.x = this.pos.x;
            barrel.pos.y = this.pos.y;
            barrel.size.lenght = this.size * barrel.sizeRadius.lenghtRadius;
            barrel.size.width = this.size * barrel.sizeRadius.widthRadius;
            if(barrel.barrelChange) {
                gsap.to(barrel, {
                    lenghtFake: barrel.size.lenght
                })
            }
            if(barrel.lenghtFake < barrel.size.lenght || !barrel.barrelChange) {
                setTimeout(() => {
                    barrel.barrelChange = true;
                }, barrel.repeat * 10)
            }
            barrel.alpha = this.alpha;
            barrel.updateBarrel();

            barrel.angle = this.angle;
            if(barrel.canShot) {
                if(barrel.projectile.type === "drone" || barrel.projectile.type === "nerco") {
                    if(barrel.projectiles.length < barrel.maxDrone) {
                        if(barrel.freeze <= 0) {
                            if(barrel.time <= 0) {
                                const velocity = {
                                    x: Math.cos((barrel.angle + barrel.angleGun)) * barrel.projectile.speed,
                                    y: Math.sin((barrel.angle + barrel.angleGun)) * barrel.projectile.speed
                                };
                                barrel.projectiles.push(new Projectile({x: (barrel.pos.x - (Math.cos(barrel.angle + barrel.angleGun) * barrel.offset)) + (Math.cos(barrel.angle + barrel.angleGun) * barrel.size.lenght), y: ((barrel.pos.y) + (Math.sin(barrel.angle + barrel.angleGun) * barrel.offset)) + (Math.sin(barrel.angle + barrel.angleGun) * barrel.size.lenght)}, barrel.angle + barrel.angleGun, barrel.projectile.type, ((barrel.size.width / 2) / 100) * (barrel.projectile.sizeRadius * 100), barrel.projectile.health, barrel.projectile.damage, velocity, barrel.projectile.speed, this.color, barrel.projectile.canControl, this.team, barrel.projectile.lifeTime, barrel.projectile.outerShell));
                                const velocityRecoil = {
                                    x: Math.cos(barrel.angle + barrel.angleGun) * barrel.recoil / 2,
                                    y: Math.sin(barrel.angle + barrel.angleGun) * barrel.recoil / 2,
                                }
                                barrel.barrelChange = false;
                                if(!barrel.barrelChange) {
                                    gsap.to(barrel, {
                                        lenghtFake: barrel.lenghtFake - (barrel.size.lenght / 10)
                                    })
                                }
                                this.velocityRecoil.x += velocityRecoil.x / 2;
                                this.velocityRecoil.y += velocityRecoil.y / 2;
                                barrel.time = barrel.repeat;
                            } else {
                                barrel.time-=0.1;
                            }
                        } else {
                            barrel.freeze-=0.1;
                        }
                    } else {
                        barrel.freeze = barrel.freezeMax;
                    }
                }
                if(barrel.projectile.type === "bullet" || barrel.projectile.type === "trap" || barrel.projectile.type === "minidrone") {
                    if(this.startShot || this.autoShot || this.Shot) {
                        if(barrel.freeze <= 0) {
                            if(barrel.time <= 0) {
                                const velocity = {
                                    x: Math.cos((barrel.angle + barrel.angleGun)) * barrel.projectile.speed,
                                    y: Math.sin((barrel.angle + barrel.angleGun)) * barrel.projectile.speed
                                };
                                barrel.projectiles.push(new Projectile({x: (barrel.pos.x - (Math.cos(barrel.angle + barrel.angleGun) * barrel.offset)) + (Math.cos(barrel.angle + barrel.angleGun) * barrel.size.lenght), y: ((barrel.pos.y) + (Math.sin(barrel.angle + barrel.angleGun) * barrel.offset)) + (Math.sin(barrel.angle + barrel.angleGun) * barrel.size.lenght)}, barrel.angle + barrel.angleGun, barrel.projectile.type, ((barrel.size.width / 2) / 100) * (barrel.projectile.sizeRadius * 100), barrel.projectile.health, barrel.projectile.damage, velocity, barrel.projectile.speed, this.color, barrel.projectile.canControl, this.team, barrel.projectile.lifeTime, barrel.projectile.outerShell));
                                const velocityRecoil = {
                                    x: Math.cos(barrel.angle + barrel.angleGun) * barrel.recoil / 2,
                                    y: Math.sin(barrel.angle + barrel.angleGun) * barrel.recoil / 2,
                                }
                                barrel.barrelChange = false;
                                if(!barrel.barrelChange) {
                                    gsap.to(barrel, {
                                        lenghtFake: barrel.lenghtFake - (barrel.size.lenght / 10)
                                    })
                                }
                                this.velocityRecoil.x += velocityRecoil.x / 2;
                                this.velocityRecoil.y += velocityRecoil.y / 2;
                                barrel.time = barrel.repeat;
                            } else {
                                barrel.time-=0.1;
                            }
                        } else {
                            barrel.freeze-=0.1;
                        }
                    } else {
                        barrel.freeze = barrel.freezeMax;
                    }
                }
            }
            barrel.projectiles.forEach((projectile) => {

                if(projectile.type === "drone" || projectile.type === "trap" || projectile.type === "nerco" || barrel.projectile.type === "minidrone") {
                    arenas.forEach((arena) => {
                        LimitArenaProjectile(arena, projectile);
                    })
                }
                
                if(projectile.type === "drone" || projectile.type === "nerco" || barrel.projectile.type === "minidrone") {
                    if(projectile.canControl) {
                        if(!this.spin && !this.autoSpin) {
                            if(this.startShot || this.autoShot || !this.useDrone) {
                                let angle;
                                if(this.useDrone) {
                                    angle = Math.atan2(this.mouse.y - projectile.pos.y, this.mouse.x - projectile.pos.x);
                                } else {
                                    angle = Math.atan2(projectile.pos.y - this.mouse.y, projectile.pos.x - this.mouse.x);
                                }
                                const velocity = {
                                    x: Math.cos(angle) * projectile.speed,
                                    y: Math.sin(angle) * projectile.speed
                                }
                                    
                                gsap.to(projectile.velocity, {
                                    x: velocity.x,
                                    y: velocity.y
                                })
                                gsap.to(projectile, {
                                    angle: angle
                                })
                            } else {
                                const angle = Math.atan2((projectile.pos.y + Math.cos(projectile.baseSpin.x)) - projectile.pos.y, (projectile.pos.x + Math.sin(projectile.baseSpin.y)) - projectile.pos.x);
                                gsap.to(projectile.pos, {
                                    x: this.pos.x + Math.cos(projectile.baseSpin.x) * (this.size * 1.8),
                                    y: this.pos.y + Math.sin(projectile.baseSpin.y) * (this.size * 1.8),
                                })
                                gsap.to(projectile, {
                                    angle: angle
                                })
                                projectile.baseSpin.x += projectile.speedSpin;
                                projectile.baseSpin.y += projectile.speedSpin;
                            }
                        } else {
                            var angle = Angle(projectile.pos.x, projectile.pos.y, this.pos.x + (Math.cos(this.angle) * (this.size * 2)), this.pos.y + (Math.sin(this.angle) * (this.size * 2)));
                            const velocity = {
                                x: Math.cos(angle) * projectile.speed,
                                y: Math.sin(angle) * projectile.speed
                            }
                                
                            gsap.to(projectile.velocity, {
                                x: velocity.x,
                                y: velocity.y
                            })
                            gsap.to(projectile, {
                                angle: angle
                            })
                        }
                    } else {
                        const angle = Math.atan2((projectile.pos.y + Math.cos(projectile.baseSpin.x)) - projectile.pos.y, (projectile.pos.x + Math.sin(projectile.baseSpin.y)) - projectile.pos.x);
                        gsap.to(projectile.pos, {
                            x: this.pos.x + Math.cos(projectile.baseSpin.x) * (this.size * 1.8),
                            y: this.pos.y + Math.sin(projectile.baseSpin.y) * (this.size * 1.8),
                        })
                        gsap.to(projectile, {
                            angle: angle
                        })
                        projectile.baseSpin.x += projectile.speedSpin;
                        projectile.baseSpin.y += projectile.speedSpin;
                    }
                }
                
                for(var i = 0; i < this.barrels.length; i++) {
                    for(var j = 0; j < this.barrels[i].projectiles.length; j++) {
                        if(this.barrels[i].projectiles[j].type === "trap" && projectile.type === "trap") {
                            if(projectile === this.barrels[i].projectiles[j]) continue;
                            if(Distance(projectile.pos.x, projectile.pos.y, this.barrels[i].projectiles[j].pos.x, this.barrels[i].projectiles[j].pos.y) - projectile.size * 1.8 < 0) {
                                resolveCollision(projectile, this.barrels[i].projectiles[j]);
                            }
                        }
                        if(this.barrels[i].projectiles[j].type === "drone" && projectile.type === "drone") {
                            if(projectile === this.barrels[i].projectiles[j]) continue;
                            if(Distance(projectile.pos.x, projectile.pos.y, this.barrels[i].projectiles[j].pos.x, this.barrels[i].projectiles[j].pos.y) - projectile.size * 1.8 < 0) {
                                resolveCollision(projectile, this.barrels[i].projectiles[j]);
                                resolveCollisionDrone(projectile, this.barrels[i].projectiles[j]);
                            }
                        }
                        if(this.barrels[i].projectiles[j].type === "minidrone" && projectile.type === "minidrone") {
                            if(projectile === this.barrels[i].projectiles[j]) continue;
                            if(Distance(projectile.pos.x, projectile.pos.y, this.barrels[i].projectiles[j].pos.x, this.barrels[i].projectiles[j].pos.y) - projectile.size * 1.8 < 0) {
                                resolveCollision(projectile, this.barrels[i].projectiles[j]);
                                resolveCollisionDrone(projectile, this.barrels[i].projectiles[j]);
                            }
                        }
                    }
                }
            })
        })
        
        if(this.spin || this.autoSpin) {
            this.angle += 0.01;
        } else {
            this.angle = Math.atan2(this.mouse.y - this.pos.y, this.mouse.x - this.pos.x);
        }

        if(maxCanvas(this, this.size)) {
            this.drawBody();
            // console.log("Out screen of Object "+this.type);
        }
        
        if(this.canMove) {
            this.pos.x += this.velocity.x;
            this.pos.y += this.velocity.y;
            this.pos.x += this.velocityRecoil.x;
            this.pos.y += this.velocityRecoil.y;
        }
        this.velocityRecoil.x *= 0.93;
        this.velocityRecoil.y *= 0.93;

        if(!this.startMove) {
            this.velocity.x *= 0.93;
            this.velocity.y *= 0.93;
        }

        if(maxCanvas(this, this.size)) {
            this.TankIsAttacked();
        }

        // this.viewRanageShow();
        if(maxCanvas(this, this.size)) {
            this.flagName();
            this.flagHealth();
        }
    }
}