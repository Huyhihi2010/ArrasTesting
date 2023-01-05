import { ctx, canvas, menuGame} from "../client/installion.js";
import { entity, players, ai, dominations, shapes, teambases , walls , arenas } from "./nativi/Object.js";
import { LimitArena } from "./vecto/collsion.js";
import getLevel from "./coder/level/tankData.js";
import { GameGroup } from "./gourp.js";

export function SuperTick(width, height) {
    arenas.forEach((arena) => {
        arena.size.width = width;
        arena.size.height = height;
    })
}

export function updatetype(Objects, Players) {
    Objects.forEach((object) => {
        object.update();
        arenas.forEach((arena) => {
            LimitArena(arena, object);
        })
        Players.forEach((player) => {
            object.tankBody.addons.forEach((addon) => {
                addon.tankBody.barrels.forEach((barrel) => {
                    barrel.projectiles.forEach((projectile) => {
                        projectile.barrels.forEach((barrel2) => {
                            barrel2.projectiles.forEach((projectile2) => {
                                projectile2.pos.x += player.tankBody.velocity.x;
                                projectile2.pos.y += player.tankBody.velocity.y;
                                projectile2.pos.x += player.tankBody.velocityRecoil.x;
                                projectile2.pos.y += player.tankBody.velocityRecoil.y;
                            })
                        })
                        projectile.pos.x += player.tankBody.velocity.x;
                        projectile.pos.y += player.tankBody.velocity.y;
                        projectile.pos.x += player.tankBody.velocityRecoil.x;
                        projectile.pos.y += player.tankBody.velocityRecoil.y;
                    })
                })
            })
            object.tankBody.turrets.forEach((turret) => {
                turret.tankBody.barrels.forEach((barrel) => {
                    barrel.projectiles.forEach((projectile) => {
                        projectile.barrels.forEach((barrel2) => {
                            barrel2.projectiles.forEach((projectile2) => {
                                projectile2.pos.x += player.tankBody.velocity.x;
                                projectile2.pos.y += player.tankBody.velocity.y;
                                projectile2.pos.x += player.tankBody.velocityRecoil.x;
                                projectile2.pos.y += player.tankBody.velocityRecoil.y;
                            })
                        })
                        projectile.pos.x += player.tankBody.velocity.x;
                        projectile.pos.y += player.tankBody.velocity.y;
                        projectile.pos.x += player.tankBody.velocityRecoil.x;
                        projectile.pos.y += player.tankBody.velocityRecoil.y;
                    })
                })
            })
            object.tankBody.barrels.forEach((barrel) => {
                barrel.projectiles.forEach((projectile) => {
                    projectile.barrels.forEach((barrel2) => {
                        barrel2.projectiles.forEach((projectile2) => {
                            projectile2.pos.x += player.tankBody.velocity.x;
                            projectile2.pos.y += player.tankBody.velocity.y;
                            projectile2.pos.x += player.tankBody.velocityRecoil.x;
                            projectile2.pos.y += player.tankBody.velocityRecoil.y;
                        })
                    })
                    projectile.pos.x += player.tankBody.velocity.x;
                    projectile.pos.y += player.tankBody.velocity.y;
                    projectile.pos.x += player.tankBody.velocityRecoil.x;
                    projectile.pos.y += player.tankBody.velocityRecoil.y;
                })
            })
            object.tankBody.pos.x += player.tankBody.velocity.x;
            object.tankBody.pos.y += player.tankBody.velocity.y;
            object.tankBody.pos.x += player.tankBody.velocityRecoil.x;
            object.tankBody.pos.y += player.tankBody.velocityRecoil.y;
        })
    })
}

export let tickFrame;

export function Tick() {
    tickFrame = requestAnimationFrame(Tick);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    GameGroup();
    getLevel(players);
    arenas.forEach((arena) => {
        arena.update();
        players.forEach((player) => {
            arena.pos.x += player.tankBody.velocity.x;
            arena.pos.y += player.tankBody.velocity.y;
            arena.pos.x += player.tankBody.velocityRecoil.x;
            arena.pos.y += player.tankBody.velocityRecoil.y;
        })
    })
    teambases.forEach((teambase) => {
        teambase.updateTeamBase();
        players.forEach((player) => {
            teambase.pos.x += player.tankBody.velocity.x;
            teambase.pos.y += player.tankBody.velocity.y;
            teambase.pos.x += player.tankBody.velocityRecoil.x;
            teambase.pos.y += player.tankBody.velocityRecoil.y;
        })
    })
    walls.forEach((wall) => {
        wall.updateWall();
        players.forEach((player) => {
            wall.pos.x += player.tankBody.velocity.x;
            wall.pos.y += player.tankBody.velocity.y;
            wall.pos.x += player.tankBody.velocityRecoil.x;
            wall.pos.y += player.tankBody.velocityRecoil.y;
        })
    })
    updatetype(dominations, players);
    updatetype(shapes, players);
    updatetype(ai, players);
    updatetype(entity, players);
    players.forEach((player) => {
        player.update();
        if(player.tankBody.died) {
            menuGame.style.display = "flex";
        }
        arenas.forEach((arena) => {
            LimitArena(arena, player);
        })
        player.tankBody.addons.forEach((addon) => {
            addon.tankBody.barrels.forEach((barrel) => {
                barrel.projectiles.forEach((projectile) => {
                    projectile.barrels.forEach((barrel2) => {
                        barrel2.projectiles.forEach((projectile2) => {
                            projectile2.pos.x += player.tankBody.velocity.x;
                            projectile2.pos.y += player.tankBody.velocity.y;
                            projectile2.pos.x += player.tankBody.velocityRecoil.x;
                            projectile2.pos.y += player.tankBody.velocityRecoil.y;
                        })
                    })
                    projectile.pos.x += player.tankBody.velocity.x;
                    projectile.pos.y += player.tankBody.velocity.y;
                    projectile.pos.x += player.tankBody.velocityRecoil.x;
                    projectile.pos.y += player.tankBody.velocityRecoil.y;
                })
            })
        })
        player.tankBody.turrets.forEach((turret) => {
            turret.tankBody.barrels.forEach((barrel) => {
                barrel.projectiles.forEach((projectile) => {
                    projectile.barrels.forEach((barrel2) => {
                        barrel2.projectiles.forEach((projectile2) => {
                            projectile2.pos.x += player.tankBody.velocity.x;
                            projectile2.pos.y += player.tankBody.velocity.y;
                            projectile2.pos.x += player.tankBody.velocityRecoil.x;
                            projectile2.pos.y += player.tankBody.velocityRecoil.y;
                        })
                    })
                    projectile.pos.x += player.tankBody.velocity.x;
                    projectile.pos.y += player.tankBody.velocity.y;
                    projectile.pos.x += player.tankBody.velocityRecoil.x;
                    projectile.pos.y += player.tankBody.velocityRecoil.y;
                })
            })
        })
        player.tankBody.barrels.forEach((barrel) => {
            barrel.projectiles.forEach((projectile) => {
                projectile.barrels.forEach((barrel2) => {
                    barrel2.projectiles.forEach((projectile2) => {
                        projectile2.pos.x += player.tankBody.velocity.x;
                        projectile2.pos.y += player.tankBody.velocity.y;
                        projectile2.pos.x += player.tankBody.velocityRecoil.x;
                        projectile2.pos.y += player.tankBody.velocityRecoil.y;
                    })
                })
                projectile.pos.x += player.tankBody.velocity.x;
                projectile.pos.y += player.tankBody.velocity.y;
                projectile.pos.x += player.tankBody.velocityRecoil.x;
                projectile.pos.y += player.tankBody.velocityRecoil.y;
            })
        })
    })
}

export function resizeCanvasGame() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    players.forEach((player) => {
        const distance = Math.hypot(player.tankBody.pos.x - canvas.width / 2, player.tankBody.pos.y - canvas.height / 2);
        const angle = Math.atan2(canvas.height / 2 - player.tankBody.pos.y, canvas.width / 2 - player.tankBody.pos.x);
        const velocity = {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance
        }
        arenas.forEach((arena) => {
            arena.pos.x += velocity.x;
            arena.pos.y += velocity.y;
        })
        teambases.forEach((entity) => {
            entity.pos.x += velocity.x;
            entity.pos.y += velocity.y;
        })
        ai.forEach((entity) => {
            entity.tankBody.barrels.forEach((barrel) => {
                barrel.projectiles.forEach((projectile) => {
                    projectile.pos.x += velocity.x;
                    projectile.pos.y += velocity.y;
                })
            })
            entity.tankBody.pos.x += velocity.x;
            entity.tankBody.pos.y += velocity.y;
        })
        entity.forEach((entity) => {
            entity.tankBody.barrels.forEach((barrel) => {
                barrel.projectiles.forEach((projectile) => {
                    projectile.pos.x += velocity.x;
                    projectile.pos.y += velocity.y;
                })
            })
            entity.tankBody.pos.x += velocity.x;
            entity.tankBody.pos.y += velocity.y;
        })
        shapes.forEach((entity) => {
            entity.tankBody.barrels.forEach((barrel) => {
                barrel.projectiles.forEach((projectile) => {
                    projectile.pos.x += velocity.x;
                    projectile.pos.y += velocity.y;
                })
            })
            entity.tankBody.pos.x += velocity.x;
            entity.tankBody.pos.y += velocity.y;
        })
        dominations.forEach((entity) => {
            entity.tankBody.barrels.forEach((barrel) => {
                barrel.projectiles.forEach((projectile) => {
                    projectile.pos.x += velocity.x;
                    projectile.pos.y += velocity.y;
                })
            })
            entity.tankBody.pos.x += velocity.x;
            entity.tankBody.pos.y += velocity.y;
        })
        walls.forEach((entity) => {
            entity.pos.x += velocity.x;
            entity.pos.y += velocity.y;
        })
        player.tankBody.barrels.forEach((barrel) => {
            barrel.projectiles.forEach((projectile) => {
                projectile.pos.x += velocity.x;
                projectile.pos.y += velocity.y;
            })
        })
        player.tankBody.pos.x = canvas.width / 2;
        player.tankBody.pos.y = canvas.height / 2;
    })
}

import { Tridrone } from "./Entity/shape/tridrone.js";
import { Triangle } from "./Entity/shape/triangle.js";
import { Spuare } from "./Entity/shape/square.js";
import { Pentagon } from "./Entity/shape/pentagon.js";
import { Hexagonal } from "./Entity/shape/hexagonal.js";
import Camera from "./vecto/camera.js";

export function SpawnShape(max, cost) {
    setInterval(() => {
        if(shapes.length < max * cost) {
            arenas.forEach((arena) => {
                shapes.push(new Tridrone(Math.random() * (arena.size.width * 2) + (arena.pos.x - arena.size.width), Math.random() * (arena.size.height * 2) + (arena.pos.y - arena.size.height)));
                shapes.push(new Spuare(Math.random() * (arena.size.width * 2) + (arena.pos.x - arena.size.width), Math.random() * (arena.size.height * 2) + (arena.pos.y - arena.size.height)));
                shapes.push(new Triangle(Math.random() * (arena.size.width * 2) + (arena.pos.x - arena.size.width), Math.random() * (arena.size.height * 2) + (arena.pos.y - arena.size.height)));
                shapes.push(new Pentagon(Math.random() * (arena.size.width * 2) + (arena.pos.x - arena.size.width), Math.random() * (arena.size.height * 2) + (arena.pos.y - arena.size.height)));
                shapes.push(new Hexagonal(Math.random() * (arena.size.width * 2) + (arena.pos.x - arena.size.width), Math.random() * (arena.size.height * 2) + (arena.pos.y - arena.size.height)));
            })
        }
    }, 100)
}