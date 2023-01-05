import { walls } from "../nativi/Object.js";
import { CollsiionWall2, ProjectileCollision, Tank_ProjectileCollision } from "../vecto/collsion.js";
import { Emies } from "./Emus.js";

export function AI(AI, EntityOther) {
    if(AI.tankBody.Ai) {
        const distance = Math.hypot(AI.tankBody.pos.x - EntityOther.tankBody.pos.x, AI.tankBody.pos.y - EntityOther.tankBody.pos.y);
        if(distance - AI.tankBody.viewRanage - EntityOther.tankBody.size < 1) {
            if(EntityOther.tankBody.type !== "CCB") {
                if(EntityOther.tankBody.team !== AI.tankBody.team || EntityOther.tankBody.team === Emies.Color.Null) {
                    if(!AI.tankBody.target) {
                        AI.tankBody.target = true;
                        if(!EntityOther.tankBody.isTarget) {
                            EntityOther.tankBody.isTarget = true;
                        }
                    }
                    if(AI.tankBody.target && EntityOther.tankBody.isTarget) {
                        if(AI.tankBody.type !== "CCB") {
                            gsap.to(AI.tankBody.velocity, {
                                x: Math.cos(Math.atan2(EntityOther.tankBody.pos.y - AI.tankBody.pos.y, EntityOther.tankBody.pos.x - AI.tankBody.pos.x)) * AI.tankBody.speed,
                                y: Math.sin(Math.atan2(EntityOther.tankBody.pos.y - AI.tankBody.pos.y, EntityOther.tankBody.pos.x - AI.tankBody.pos.x)) * AI.tankBody.speed
                            })
                        }
                        gsap.to(AI.tankBody.mouse, {
                            x: EntityOther.tankBody.pos.x,
                            y: EntityOther.tankBody.pos.y
                        })
                    }
                }
            }
        }
        if(AI.tankBody.target) {
            AI.tankBody.spin = false;
            AI.tankBody.startShot = true;
            AI.tankBody.startMove = true;
        } else {
            if(AI.tankBody.type !== "CCB") {
                AI.tankBody.spin = true;
            }
            if(AI.tankBody.startShot) {
                AI.tankBody.startShot = false;
            }
            if(AI.tankBody.startMove) {
                AI.tankBody.startMove = false;
            }
        }
    }
}

export function AIGroup(AITank, Tank) {
    AITank.forEach((ai) => {
        Tank.forEach((tank) => {
            AI(ai, tank);

            AI(tank, ai);
        })
    });
}

export function AIType(AITank) {
    AITank.forEach((ai) => {
        for(let i = 0; i < AITank.length; i++) {
            if(ai.tankBody === AITank.tankBody) continue;

            AI(ai, AITank[i]);

            AI(AITank[i], ai);
        }
    });
}

export function AIinTank(TankTeam, TankEnemy) {
    // walls.forEach((wall) => {
        TankTeam.forEach((tankTeam, index1) => {
            TankEnemy.forEach((tankEnemy, index2) => {
                tankTeam.tankBody.addons.forEach((addon1) => {
                    tankEnemy.tankBody.addons.forEach((addon2) => {
                        addon1.tankBody.barrels.forEach((barrel1) => {
                            addon2.tankBody.barrels.forEach((barrel2) => {
                                barrel1.projectiles.forEach((projectile1, indexP1) => {
                                    barrel2.projectiles.forEach((projectile2, indexP2) => {
                                        ProjectileCollision(projectile1, projectile2, barrel1.projectiles, barrel2.projectiles, indexP1, indexP2);
                                    })
                                })
                            })
                        })
                    })
                })
                tankTeam.tankBody.turrets.forEach((turret1) => {
                    tankEnemy.tankBody.turrets.forEach((turret2) => {
                        turret1.tankBody.barrels.forEach((barrel1) => {
                            turret2.tankBody.barrels.forEach((barrel2) => {
                                barrel1.projectiles.forEach((projectile1, indexP1) => {
                                    barrel2.projectiles.forEach((projectile2, indexP2) => {
                                        ProjectileCollision(projectile1, projectile2, barrel1.projectiles, barrel2.projectiles, indexP1, indexP2);
                                    })
                                })
                            })
                        })
                    })
                })
                tankTeam.tankBody.addons.forEach((ai) => {
                    ai.tankBody.barrels.forEach((barrel) => {
                        barrel.projectiles.forEach((projectile, index3) => {
                            tankEnemy.tankBody.barrels.forEach((barrel2) => {
                                barrel2.projectiles.forEach((projectile2, index4) => {
                                    ProjectileCollision(projectile, projectile2, barrel.projectiles, barrel2.projectiles, index3, index4);
                                })
                            })
                            Tank_ProjectileCollision(tankEnemy.tankBody, tankTeam.tankBody, projectile, TankEnemy, barrel.projectiles, index2, index3);
                        })
                    })
    
                    AI(ai, tankEnemy);
    
                    // AI(tankEnemy, ai);
                })
                tankTeam.tankBody.turrets.forEach((ai) => {
                    ai.tankBody.barrels.forEach((barrel) => {
                        barrel.projectiles.forEach((projectile, index3) => {
                            tankEnemy.tankBody.barrels.forEach((barrel2) => {
                                barrel2.projectiles.forEach((projectile2, index4) => {
                                    ProjectileCollision(projectile, projectile2, barrel.projectiles, barrel2.projectiles, index3, index4);
                                })
                            })
                            Tank_ProjectileCollision(tankEnemy.tankBody, tankTeam.tankBody, projectile, TankEnemy, barrel.projectiles, index2, index3);
                        })
                    })
    
                    AI(ai, tankEnemy);
    
                    // AI(tankEnemy, ai);
                })
                tankEnemy.tankBody.addons.forEach((ai) => {
                    ai.tankBody.barrels.forEach((barrel) => {
                        barrel.projectiles.forEach((projectile, index3) => {
                            tankTeam.tankBody.barrels.forEach((barrel2) => {
                                barrel2.projectiles.forEach((projectile2, index4) => {
                                    ProjectileCollision(projectile, projectile2, barrel.projectiles, barrel2.projectiles, index3, index4);
                                })
                            })
                            Tank_ProjectileCollision(tankTeam.tankBody, tankEnemy.tankBody, projectile, TankTeam, barrel.projectiles, index1, index3);
                        })
                    })
    
                    AI(ai, tankTeam);
    
                    // AI(tankTeam, ai);
                })
                tankEnemy.tankBody.turrets.forEach((ai) => {
                    ai.tankBody.barrels.forEach((barrel) => {
                        barrel.projectiles.forEach((projectile, index3) => {
                            tankTeam.tankBody.barrels.forEach((barrel2) => {
                                barrel2.projectiles.forEach((projectile2, index4) => {
                                    ProjectileCollision(projectile, projectile2, barrel.projectiles, barrel2.projectiles, index3, index4);
                                })
                            })
                            Tank_ProjectileCollision(tankTeam.tankBody, tankEnemy.tankBody, projectile, TankTeam, barrel.projectiles, index1, index3);
                        })
                    })
    
                    AI(ai, tankTeam);
    
                    // AI(tankTeam, ai);
                })
            })
        });
    // })
}