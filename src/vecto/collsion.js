import { Emies } from "../coder/Emus.js";

export function LimitArena(arena, entity) {
    if(entity.tankBody.type !== "Shape") {
        if(entity.tankBody.type !== "CCB") {
            if(!entity.tankBody.Ai) {
                if(entity.tankBody.pos.x < arena.pos.x - arena.size.width) {
                    entity.tankBody.velocityRecoil.x += -10;
                }
                if(entity.tankBody.pos.x > arena.pos.x + arena.size.width) {
                    entity.tankBody.velocityRecoil.x += 10;
                }
                if(entity.tankBody.pos.y < arena.pos.y - arena.size.height) {
                    entity.tankBody.velocityRecoil.y += -10;
                }
                if(entity.tankBody.pos.y > arena.pos.y + arena.size.height) {
                    entity.tankBody.velocityRecoil.y += 10;
                }
            } else {
                if(entity.tankBody.pos.x < arena.pos.x - arena.size.width) {
                    entity.tankBody.velocityRecoil.x -= -10;
                }
                if(entity.tankBody.pos.x > arena.pos.x + arena.size.width) {
                    entity.tankBody.velocityRecoil.x -= 10;
                }
                if(entity.tankBody.pos.y < arena.pos.y - arena.size.height) {
                    entity.tankBody.velocityRecoil.y -= -10;
                }
                if(entity.tankBody.pos.y > arena.pos.y + arena.size.height) {
                    entity.tankBody.velocityRecoil.y -= 10;
                }
            }
        }
    } else {
        if(entity.tankBody.pos.x < arena.pos.x - arena.size.width) {
            entity.tankBody.velocityRecoil.x -= -10;
        }
        if(entity.tankBody.pos.x > arena.pos.x + arena.size.width) {
            entity.tankBody.velocityRecoil.x -= 10;
        }
        if(entity.tankBody.pos.y < arena.pos.y - arena.size.height) {
            entity.tankBody.velocityRecoil.y -= -10;
        }
        if(entity.tankBody.pos.y > arena.pos.y + arena.size.height) {
            entity.tankBody.velocityRecoil.y -= 10;
        }
    }
}

export function LimitArenaProjectile(arena, entity) {
    if(entity.pos.x < arena.pos.x - arena.size.width) {
        entity.velocityRecoil.x -= -10;
    }
    if(entity.pos.x > arena.pos.x + arena.size.width) {
        entity.velocityRecoil.x -= 10;
    }
    if(entity.pos.y < arena.pos.y - arena.size.height) {
        entity.velocityRecoil.y -= -10;
    }
    if(entity.pos.y > arena.pos.y + arena.size.height) {
        entity.velocityRecoil.y -= 10;
    }
}

export function ProjectileCollision(projectileTeam, projectileEnemy, groupTeam, groupEnemy, indexTeam, indexEnemy) {
    const dist = Math.hypot(projectileTeam.pos.x - projectileEnemy.pos.x, projectileTeam.pos.y - projectileEnemy.pos.y);
    if(dist - projectileTeam.size - projectileEnemy.size < 1) {
        if(projectileTeam.team !== projectileEnemy.team || projectileEnemy.team === Emies.Color.Null) {
            const angleProjectileTeam = Math.atan2(projectileEnemy.pos.y - projectileTeam.pos.y, projectileEnemy.pos.x - projectileTeam.pos.x);
            const angleProjectileEnemy = Math.atan2(projectileTeam.pos.y - projectileEnemy.pos.y, projectileTeam.pos.x - projectileEnemy.pos.x);

            projectileTeam.velocityRecoil.x -= Math.cos(angleProjectileTeam) * (projectileEnemy.size / (projectileTeam.size * projectileTeam.speed));
            projectileTeam.velocityRecoil.y -= Math.sin(angleProjectileTeam) * (projectileEnemy.size / (projectileTeam.size * projectileTeam.speed));

            projectileEnemy.velocityRecoil.x -= Math.cos(angleProjectileEnemy) * (projectileTeam.size / (projectileEnemy.size * projectileEnemy.speed));
            projectileEnemy.velocityRecoil.y -= Math.sin(angleProjectileEnemy) * (projectileTeam.size / (projectileEnemy.size * projectileEnemy.speed));

            if(projectileTeam.health <= 0) {
                setTimeout(() => {
                    setTimeout(() => {
                        groupTeam.splice(indexTeam, 1);
                    }, 0)
                }, 0)
            } else {
                projectileTeam.health -= projectileEnemy.damage / projectileTeam.damage;
            }

            if(projectileEnemy.health <= 0) {
                setTimeout(() => {
                    setTimeout(() => {
                        groupEnemy.splice(indexEnemy, 1);
                    }, 0)
                }, 0)
            } else {
                projectileEnemy.health -= projectileTeam.damage / projectileTeam.damage;
            }
        }
    }
}

export function Tank_ProjectileCollision(tank, tankPro, projectile, groupTank, groupProjectile, indexTank, indexProjectile) {
    const dist = Math.hypot(tank.pos.x - projectile.pos.x, tank.pos.y - projectile.pos.y);
    if(tank.type !== "CCB" || !EntityEnemy.died) {
        if(dist - tank.size - projectile.size < 1) {
            if(tank.team !== projectile.team || projectile.team === Emies.Color.Null) {
                tank.isAttacked = true;

                const angleTank = Math.atan2(projectile.pos.y - tank.pos.y, projectile.pos.x - tank.pos.x);
                const angleProjectile = Math.atan2(tank.pos.y - projectile.pos.y, tank.pos.x - projectile.pos.x);
    
                if(tank.type !== "Player") {
                    if(tank.type !== "Domination" && tank.type !== "Base") {
                        tank.pos.x -= Math.cos(angleTank);
                        tank.pos.y -= Math.sin(angleTank);
                    }
                } else {
                    tank.velocityRecoil.x += Math.cos(angleTank);
                    tank.velocityRecoil.y += Math.sin(angleTank);
                }
    
                if(projectile.type === "drone" || projectile.type === "nerco" || projectile.type === "trap" || projectile.type === "nercoTrap") {
                    projectile.velocityRecoil.x -= Math.cos(angleProjectile) * ((tank.size / projectile.size) / (projectile.size * projectile.speed));
                    projectile.velocityRecoil.y -= Math.sin(angleProjectile) * ((tank.size / projectile.size) / (projectile.size * projectile.speed));
                } else {
                    projectile.velocityRecoil.x -= Math.cos(angleProjectile) * ((tank.size / projectile.size) / (projectile.size * projectile.speed));
                    projectile.velocityRecoil.y -= Math.sin(angleProjectile) * ((tank.size / projectile.size) / (projectile.size * projectile.speed));
                }
    
                if(projectile.health > 0) {
                    projectile.health -= 0.4 * ((tank.size / 10) / (projectile.size));
                    if(tank.health > 0) {
                        tank.health -= projectile.damage / (tank.damagePertick);
                    } else {
                        if(tank.type === "Domination") {
                            if(tank.color === Emies.Color.NoTeam) {
                                tank.color = projectile.color;
                                tank.team = tank.color;
                            } else {
                                tank.color = Emies.Color.NoTeam;
                                tank.team = tank.color
                            }
                            tank.barrels.forEach((barrel) => {
                                setTimeout(() => {
                                    barrel.projectiles.splice(0, barrel.projectiles.length);
                                }, 0)
                            })
                            tank.health = tank.maxHealth;
                        }
                        setTimeout(() => {
                            tank.target = false;
                            tank.startMove = false;
                            if(!tank.giveScore) {
                                if(tankPro.canGetScore) {
                                    tankPro.score += tank.score;
                                }
                                tank.giveScore = true;
                            }
                            if(tank.Ai) {
                                tank.startShot = false;
                                tank.spin = true;
                            }
                        }, 0)
                    }
                } else {
                    setTimeout(() => {
                        groupProjectile.splice(indexProjectile, 1);
                    }, 0)
                }
            }
        }
    }
}

export function CollsiionWall(Object, Walls) {
    if(Object.pos.x + Object.size > Walls.pos.x - Walls.size && Object.pos.x - Object.size < Walls.pos.x + Walls.size && Object.pos.y + Object.size > Walls.pos.y - Walls.size && Object.pos.y - Object.size < Walls.pos.y + Walls.size) {
        if(Object.type !== "Player") {
            if(Object.type !== "Shape") {
                if(Object.type !== "CCB") {
                    Object.velocityRecoil.x -= Math.cos(Math.atan2(Walls.pos.y - Object.pos.y, Walls.pos.x - Object.pos.x)) * 2;
                    Object.velocityRecoil.y -= Math.sin(Math.atan2(Walls.pos.y - Object.pos.y, Walls.pos.x - Object.pos.x)) * 2;
                }
            } else {
                Object.health -= 10000;
            }
        } else {
            Object.velocityRecoil.x += Math.cos(Math.atan2(Walls.pos.y - Object.pos.y, Walls.pos.x - Object.pos.x)) * 2;
            Object.velocityRecoil.y += Math.sin(Math.atan2(Walls.pos.y - Object.pos.y, Walls.pos.x - Object.pos.x)) * 2;
        }
    }
}

export function CollsiionWall2(Object, Walls) {
    if(Object.pos.x + Object.size > Walls.pos.x - Walls.size && Object.pos.x - Object.size < Walls.pos.x + Walls.size && Object.pos.y + Object.size > Walls.pos.y - Walls.size && Object.pos.y - Object.size < Walls.pos.y + Walls.size) {
        Object.health -= 10000;
    }
}

export function ObjectWall(OBJECT, WALL) {
    WALL.forEach((wall) => {
        OBJECT.forEach((object) => {
            CollsiionWall(object.tankBody, wall);
            object.tankBody.barrels.forEach((barrel) => {
                barrel.projectiles.forEach((projectile, index) => {
                    if(projectile.health > 0) {
                        CollsiionWall2(projectile, wall);
                    } else {
                        setTimeout(() => {
                            barrel.projectiles.splice(index, 1);
                        }, 0)
                    }
                })
            })
        })
    })
}

export function EntityCollision(EntityTeam, EntityEnemy, groupTeam, groupEnemy, indexTeam, indexEnemy) {
    const dist = Math.hypot(EntityTeam.pos.x - EntityEnemy.pos.x, EntityTeam.pos.y - EntityEnemy.pos.y);
    if(EntityEnemy.type !== "CCB" || !EntityEnemy.died) {
        if(dist - EntityTeam.size - EntityEnemy.size < 1) {
            if(EntityTeam.team !== EntityEnemy.team || EntityEnemy.team === Emies.Color.Null) {
                if(EntityEnemy.health > 0) {
                    EntityTeam.isAttacked = true;
                } else {
                    EntityTeam.isAttacked = false;
                }
    
                if(EntityTeam.health > 0) {
                    EntityEnemy.isAttacked = true;
                } else {
                    EntityEnemy.isAttacked = false;
                }
    
                const angleEntityTeam = Math.atan2(EntityEnemy.pos.y - EntityTeam.pos.y, EntityEnemy.pos.x - EntityTeam.pos.x);
                const angleEntityEnemy = Math.atan2(EntityTeam.pos.y - EntityEnemy.pos.y, EntityTeam.pos.x - EntityEnemy.pos.x);
    
                if(EntityTeam.type !== "Player") {
                    if(EntityEnemy.type !== "Domination") {
                        EntityTeam.pos.x -= Math.cos(angleEntityTeam) * ((EntityEnemy.size / (EntityTeam.size)) / 100);
                        EntityTeam.pos.y -= Math.sin(angleEntityTeam) * ((EntityEnemy.size / (EntityTeam.size)) / 100);
                    }
                } else {
                    EntityTeam.velocityRecoil.x -= Math.cos(angleEntityTeam) * ((EntityEnemy.size / (EntityTeam.size)) / 100);
                    EntityTeam.velocityRecoil.y -= Math.sin(angleEntityTeam) * ((EntityEnemy.size / (EntityTeam.size)) / 100);
                }
    
                if(EntityEnemy.type !== "Player") {
                    if(EntityEnemy.type !== "Domination") {
                        EntityEnemy.pos.x -= Math.cos(angleEntityEnemy) * ((EntityTeam.size / (EntityEnemy.size / 50)) / 100);
                        EntityEnemy.pos.y -= Math.sin(angleEntityEnemy) * ((EntityTeam.size / (EntityEnemy.size / 50)) / 100);
                    }
                } else {
                    EntityEnemy.velocityRecoil.x -= Math.cos(angleEntityTeam) * ((EntityTeam.size / (EntityEnemy.size / 50)) / 100);
                    EntityEnemy.velocityRecoil.y -= Math.sin(angleEntityTeam) * ((EntityTeam.size / (EntityEnemy.size / 50)) / 100);
                }
    
                if(EntityTeam.health <= 0) {
                    setTimeout(() => {
                        setTimeout(() => {
                            EntityEnemy.target = false;
                            EntityEnemy.isTarget = false;
                            if(EntityEnemy.Ai) {
                                EntityEnemy.spin = true;
                                EntityEnemy.startShot = false;
                            }
                            EntityEnemy.startMove = false;
                            if(!EntityTeam.giveScore) {
                                if(EntityEnemy.canGetScore) {
                                    EntityEnemy.score += EntityTeam.score;
                                }
                                EntityTeam.giveScore = true;
                            }
                            // groupTeam.splice(indexTeam, 1);
                        }, 0)
                    }, 0)
                } else {
                    EntityTeam.health -= EntityEnemy.damagePertick / (EntityTeam.damagePertick / 1.5);
                }
    
                if(EntityEnemy.health <= 0) {
                    setTimeout(() => {
                        setTimeout(() => {
                            EntityTeam.target = false;
                            EntityTeam.isTarget = false;
                            if(EntityTeam.Ai) {
                                EntityTeam.spin = true;
                                EntityTeam.startShot = false;
                            }
                            EntityTeam.startMove = false;
                            if(!EntityEnemy.giveScore) {
                                if(EntityTeam.canGetScore) {
                                    EntityTeam.score += EntityEnemy.score;
                                }
                                EntityEnemy.giveScore = true;
                            }
                            // groupEnemy.splice(indexEnemy, 1);
                        }, 0)
                    }, 0)
                } else {
                    EntityEnemy.health -= EntityTeam.damagePertick / (EntityEnemy.damagePertick / 1.5);
                }
            }
        }
    }
}

export function EntityGroup(Tank1, Tank2) {
    Tank1.forEach((tank1, index1) => {
        Tank2.forEach((tank2, index2) => {
            EntityCollision(tank1.tankBody, tank2.tankBody, Tank1, Tank2, index1, index2);
        });
    });
}

import { AI } from "../coder/AItank.js";

export function EntityType(Tank) {
    Tank.forEach((tank, index1) => {
        for(let i = 0; i < Tank.length; i++) {
            if(tank.tankBody === Tank[i].tankBody) continue;
            AI(tank, Tank[i]);
            AI(Tank[i], tank);
            tank.tankBody.barrels.forEach((barrel) => {
                barrel.projectiles.forEach((projectile, index1) => {
                    for(let j = 0; j < Tank[i].tankBody.barrels.length; j++) {
                        for(let k = 0; k < Tank[i].tankBody.barrels[j].projectiles.length; k++) {
                            Tank_ProjectileCollision(tank.tankBody, Tank[i].tankBody, Tank[i].tankBody.barrels[j].projectiles[k], Tank, Tank[i].tankBody.barrels[j].projectile, index1, Tank[i].tankBody.barrels[j].projectiles[k]);
                            if(projectile === Tank[i].tankBody.barrels[j].projectiles[k]) continue;
                            ProjectileCollision(projectile, Tank[i].tankBody.barrels[j].projectiles[k], barrel.projectiles, Tank[i].tankBody.barrels[j].projectiles, index1, Tank[i].tankBody.barrels[j].projectiles[k])
                        }
                    }
                })
            })
            EntityCollision(tank.tankBody, Tank[i].tankBody, Tank, Tank, index1, Tank[i]);
            tank.tankBody.barrels.forEach((barrel) => {
                barrel.projectiles.forEach((projectile, index) => {
                    Tank_ProjectileCollision(Tank[i].tankBody, tank.tankBody, projectile, Tank, barrel.projectiles, index1, index);
                })
            })
        }
    });
}

export function EntityProjectile(Tank, TankEnemy) {
    Tank.forEach((tank1, indexTank) => {
        TankEnemy.forEach((tank2) => {
            tank2.tankBody.barrels.forEach((barrelEnemy) => {
                barrelEnemy.projectiles.forEach((projectile, indexProjectile) => {
                    Tank_ProjectileCollision(tank1.tankBody, tank2.tankBody, projectile, Tank, barrelEnemy.projectiles, indexTank, indexProjectile);
                })
            })
        })
    })
    TankEnemy.forEach((tank1, indexTank) => {
        Tank.forEach((tank2) => {
            tank2.tankBody.barrels.forEach((barrelEnemy) => {
                barrelEnemy.projectiles.forEach((projectile, indexProjectile) => {
                    Tank_ProjectileCollision(tank1.tankBody, tank2.tankBody, projectile, Tank, barrelEnemy.projectiles, indexTank, indexProjectile);
                })
            })
        })
    })
}

export function ProjectileGroup(Tank1, Tank2) {
    Tank1.forEach((tank1) => {
        Tank2.forEach((tank2) => {
            tank1.tankBody.barrels.forEach((barrel1) => {
                tank2.tankBody.barrels.forEach((barrel2) => {
                    barrel1.projectiles.forEach((projectile1, index1) => {
                        barrel2.projectiles.forEach((projectile2, index2) => {
                            ProjectileCollision(projectile1, projectile2, barrel1.projectiles, barrel2.projectiles, index1, index2);
                        })
                    })
                });
            });
        })
    })
}

export function TeamBaseCollision(teamBase, entity) {
    teamBase.forEach((teambase) => {
        entity.forEach((Entity) => {
            if(Entity.tankBody.pos.x > teambase.pos.x - teambase.size.width && Entity.tankBody.pos.x < teambase.pos.x + teambase.size.width && Entity.tankBody.pos.y > teambase.pos.y - teambase.size.height && Entity.tankBody.pos.y < teambase.pos.y + teambase.size.height) {
                if(teambase.base) {
                    if(teambase.color !== Entity.tankBody.team) {
                        if(Entity.tankBody.type !== "CCB") {
                            Entity.tankBody.isAttacked = true;
                            Entity.tankBody.health -= 500;
                        }
                    }
                }
            } else {
                if(teambase.base) {
                    if(teambase.color !== Entity.tankBody.team) {
                        if(Entity.tankBody.type !== "CCB") {
                            Entity.tankBody.isAttacked = false;
                        }
                    }
                }
            }
            Entity.tankBody.barrels.forEach((barrel) => {
                barrel.projectiles.forEach((projectile, index2) => {
                    if(projectile.pos.x > teambase.pos.x - teambase.size.width && projectile.pos.x < teambase.pos.x + teambase.size.width && projectile.pos.y > teambase.pos.y - teambase.size.height && projectile.pos.y < teambase.pos.y + teambase.size.height) {
                        if(teambase.base) {
                            if(teamBase.color !== projectile.team) {
                                if(projectile.health > 0) {
                                    projectile.health -= 100;
                                } else {
                                    setTimeout(() => {
                                        barrel.projectiles.splice(index2, 1);
                                    }, 0)
                                }
                            }
                        }
                    }
                })
            })
        })
    })
}