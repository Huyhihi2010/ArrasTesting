import { Addon } from "../Entity/Tank/Addon.js";
import { Barrel } from "../Entity/Tank/Barrel.js";
import { Tanks } from "./Emus.js";

export function setTank(id, Tank) {
    switch (id) {
        case "tank":
            Tank.barrels = [];
            Tank.addons = [];
            Tank.turrets = [];
            Tank.autoSpin = false;
            Tank.barrels.push(
                new Barrel(
                    {
                        x: Tank.pos.x,
                        y: Tank.pos.y
                    },
                    0,
                    0,
                    {
                        lenghtRadius: 1.75,
                        widthRadius: 0.85
                    },
                    true,
                    2,
                    0,
                    2,
                    12,
                    "normal",
                    {
                        type: "bullet",
                        sizeRadius: 1,
                        health: 2.5,
                        damage: 10,
                        speed: 7,
                        lifeTime: 0.2,
                        canControl: true,
                        outerShell: null
                    }
                )
            )
            break;
        case "arena-closer":
            Tank.barrels = [];
            Tank.addons = [];
            Tank.turrets = [];
            Tank.autoSpin = false;
            Tank.barrels.push(
                new Barrel(
                    {
                        x: Tank.pos.x,
                        y: Tank.pos.y
                    },
                    0,
                    0,
                    {
                        lenghtRadius: 1.35,
                        widthRadius: 1
                    },
                    true,
                    1,
                    0,
                    1.5,
                    12,
                    "normal",
                    {
                        type: "bullet",
                        sizeRadius: 1,
                        health: Infinity,
                        damage: 500,
                        speed: 13,
                        lifeTime: 0.2,
                        canControl: true,
                        outerShell: null
                    }
                )
            )
            break;
        case "trapper":
            Tank.barrels = [];
            Tank.addons = [];
            Tank.turrets = [];
            Tank.autoSpin = false;
            Tank.barrels.push(
                new Barrel(
                    {
                        x: Tank.pos.x,
                        y: Tank.pos.y
                    },
                    0,
                    0,
                    {
                        lenghtRadius: 1.75,
                        widthRadius: 0.85
                    },
                    true,
                    2,
                    0,
                    2,
                    12,
                    "normal",
                    {
                        type: "trap",
                        sizeRadius: 1,
                        health: 10,
                        damage: 7,
                        speed: 7,
                        lifeTime: 2,
                        canControl: true,
                        outerShell: null
                    }
                )
            )
            break;
        case "overseer":
            Tank.barrels = [];
            Tank.addons = [];
            Tank.turrets = [];
            Tank.autoSpin = false;
            Tank.barrels.push(
                new Barrel(
                    {
                        x: Tank.pos.x,
                        y: Tank.pos.y
                    },
                    0,
                    Math.PI*0.5,
                    {
                        lenghtRadius: 1.25,
                        widthRadius: 1.25
                    },
                    true,
                    2,
                    0,
                    2,
                    4,
                    "normal",
                    {
                        type: "drone",
                        sizeRadius: 0.8,
                        health: 7,
                        damage: 2,
                        speed: 8,
                        lifeTime: Infinity,
                        canControl: true,
                        outerShell: null
                    }
                ),
                new Barrel(
                    {
                        x: Tank.pos.x,
                        y: Tank.pos.y
                    },
                    0,
                    -Math.PI*0.5,
                    {
                        lenghtRadius: 1.25,
                        widthRadius: 1.25
                    },
                    true,
                    2,
                    0,
                    2,
                    4,
                    "normal",
                    {
                        type: "drone",
                        sizeRadius: 0.8,
                        health: 7,
                        damage: 2,
                        speed: 8,
                        lifeTime: Infinity,
                        canControl: true,
                        outerShell: null
                    }
                )
            )
            break;
        case "annihilator": 
            Tank.barrels = [];
            Tank.addons = [];
            Tank.turrets = [];
            Tank.autoSpin = false;
            Tank.barrels.push(
                new Barrel(
                    {
                        x: Tank.pos.x,
                        y: Tank.pos.y
                    },
                    0,
                    0,
                    {
                        lenghtRadius: 1.75,
                        widthRadius: 1.95
                    },
                    true,
                    20,
                    0,
                    4,
                    12,
                    "normal",
                    {
                        type: "bullet",
                        sizeRadius: 1,
                        health: 20,
                        damage: 5,
                        speed: 5,
                        lifeTime: 0.4,
                        canControl: true,
                        outerShell: null
                    }
                )
            )
            break
        case "dominationH":
            Tank.barrels = [];
            Tank.addons = [];
            Tank.turrets = [];
            Tank.autoSpin = false;
            Tank.barrels.push(
                new Barrel(
                    {
                        x: Tank.pos.x,
                        y: Tank.pos.y
                    },
                    0,
                    0,
                    {
                        lenghtRadius: 1.4,
                        widthRadius: 0.65
                    },
                    true,
                    0,
                    0,
                    18,
                    12,
                    "normal",
                    {
                        type: "bullet",
                        sizeRadius: 1,
                        health: 200,
                        damage: 15,
                        speed: 6,
                        lifeTime: 0.4,
                        canControl: true,
                        outerShell: null
                    }
                ),
                new Barrel(
                    {
                        x: Tank.pos.x,
                        y: Tank.pos.y
                    },
                    0,
                    0,
                    {
                        lenghtRadius: 1.15,
                        widthRadius: 0.85
                    },
                    true,
                    20,
                    Infinity,
                    4,
                    12,
                    "normal",
                    {
                        type: "bullet",
                        sizeRadius: 1,
                        health: 20,
                        damage: 15,
                        speed: 5,
                        lifeTime: 0.4,
                        canControl: true,
                        outerShell: null
                    }
                )
            )
            break;
        case "dominationG":
                Tank.barrels = [];
                Tank.addons = [];
                Tank.turrets = [];
                Tank.autoSpin = false;
                Tank.barrels.push(
                    new Barrel(
                        {
                            x: Tank.pos.x,
                            y: Tank.pos.y
                        },
                        Tank.size * 0.2,
                        0,
                        {
                            lenghtRadius: 1.4,
                            widthRadius: 0.25
                        },
                        true,
                        0,
                        1.1,
                        1,
                        12,
                        "normal",
                        {
                            type: "bullet",
                            sizeRadius: 1,
                            health: 18,
                            damage: 2,
                            speed: 6,
                            lifeTime: 0.4,
                            canControl: true,
                            outerShell: null
                        }
                    ),
                    new Barrel(
                        {
                            x: Tank.pos.x,
                            y: Tank.pos.y
                        },
                        -Tank.size * 0.2,
                        0,
                        {
                            lenghtRadius: 1.4,
                            widthRadius: 0.25
                        },
                        true,
                        0,
                        1.1,
                        1,
                        12,
                        "normal",
                        {
                            type: "bullet",
                            sizeRadius: 1,
                            health: 18,
                            damage: 2,
                            speed: 6,
                            lifeTime: 0.4,
                            canControl: true,
                            outerShell: null
                        }
                    ),
                    new Barrel(
                        {
                            x: Tank.pos.x,
                            y: Tank.pos.y
                        },
                        0,
                        0,
                        {
                            lenghtRadius: 1.5,
                            widthRadius: 0.35
                        },
                        true,
                        0,
                        0,
                        1,
                        12,
                        "normal",
                        {
                            type: "bullet",
                            sizeRadius: 0.95,
                            health: 10,
                            damage: 2,
                            speed: 6,
                            lifeTime: 0.4,
                            canControl: true,
                            outerShell: null
                        }
                    ),
                    new Barrel(
                        {
                            x: Tank.pos.x,
                            y: Tank.pos.y
                        },
                        0,
                        0,
                        {
                            lenghtRadius: 1.15,
                            widthRadius: 0.85
                        },
                        true,
                        20,
                        Infinity,
                        4,
                        12,
                        "normal",
                        {
                            type: "bullet",
                            sizeRadius: 1,
                            health: 20,
                            damage: 15,
                            speed: 5,
                            lifeTime: 0.4,
                            canControl: true,
                            outerShell: null
                        }
                    )
                )
                break;
            case "dominationT":
                Tank.barrels = [];
                Tank.addons = [];
                Tank.turrets = [];
                Tank.Shot = true;
                for(var i = 0; i < 8; i++) {
                    Tank.barrels.push(
                        new Barrel(
                            {
                                x: Tank.pos.x,
                                y: Tank.pos.y
                            },
                            0,
                            Math.PI*0.25*i,
                            {
                                lenghtRadius: 1.3,
                                widthRadius: 0.45
                            },
                            true,
                            0,
                            0,
                            5,
                            12,
                            "normal",
                            {
                                type: "trap",
                                sizeRadius: 1,
                                health: 8,
                                damage: 2.5,
                                speed: 8,
                                lifeTime: 1.3,
                                canControl: true,
                                outerShell: null
                            }
                        ),
                        new Barrel(
                            {
                                x: Tank.pos.x,
                                y: Tank.pos.y
                            },
                            0,
                            Math.PI*0.25*i,
                            {
                                lenghtRadius: 1.15,
                                widthRadius: 0.60
                            },
                            true,
                            20,
                            Infinity,
                            4,
                            12,
                            "normal",
                            {
                                type: "bullet",
                                sizeRadius: 1,
                                health: 20,
                                damage: 15,
                                speed: 5,
                                lifeTime: 0.4,
                                canControl: true,
                                outerShell: null
                            }
                        )
                    )
                }
                break;
        case "base":
            Tank.barrels = [];
            Tank.addons = [];
            Tank.turrets = [];
            Tank.autoSpin = true;
            for(var i = 0; i < 5; i++) {
                Tank.barrels.push(
                    new Barrel(
                        {
                            x: Tank.pos.x,
                            y: Tank.pos.y
                        },
                        -Tank.size * 0.1,
                        Math.PI*0.4 * i,
                        {
                            lenghtRadius: 1.05,
                            widthRadius: 1.05
                        },
                        true,
                        0,
                        Infinity,
                        5,
                        2,
                        "normal",
                        {
                            type: "drone",
                            sizeRadius: 1,
                            health: 5,
                            damage: 15,
                            speed: 7,
                            lifeTime: Infinity,
                            canControl: true,
                            outerShell: null
                        }
                    ),
                    new Barrel(
                        {
                            x: Tank.pos.x,
                            y: Tank.pos.y
                        },
                        Tank.size * 0.1,
                        Math.PI*0.4 * i,
                        {
                            lenghtRadius: 1.05,
                            widthRadius: 1.05
                        },
                        true,
                        0,
                        Infinity,
                        5,
                        2,
                        "normal",
                        {
                            type: "drone",
                            sizeRadius: 1,
                            health: 5,
                            damage: 15,
                            speed: 7,
                            lifeTime: Infinity,
                            canControl: true,
                            outerShell: null
                        }
                    ),
                    new Barrel(
                        {
                            x: Tank.pos.x,
                            y: Tank.pos.y
                        },
                        0,
                        Math.PI*0.4 * i,
                        {
                            lenghtRadius: 1.15,
                            widthRadius: 1.05
                        },
                        true,
                        0,
                        Infinity,
                        5,
                        2,
                        "normal",
                        {
                            type: "drone",
                            sizeRadius: 1,
                            health: 5,
                            damage: 15,
                            speed: 7,
                            lifeTime: Infinity,
                            canControl: true,
                            outerShell: null
                        }
                    )
                )
            }
            for(var i = 0; i < 5; i++) {
                Tank.addons.push(
                    new Addon({
                        type: "drone-base",
                        angle: Math.PI*0.4*i,
                        offset: -Tank.size * 0.1,
                        sizeRadius: {
                            sizeTank: Tank.size,
                            size: 0.55
                        },
                        sides: 0,
                        canControl: true,
                        canShot: true,
                        canAi: true,
                        Ai: true,
                        viewRanage: 1200,
                        isColor: false,
                        teamValue: Tank.team
                    })
                )
            }
            break;
        case "mothership":
            Tank.autoSpin = false;
            Tank.barrels = [];
            Tank.addons = [];
            Tank.turrets = [];
            Tank.sides = 16;
            Tank.size = 80;
            Tank.maxHealth = 7000;
            Tank.health = Tank.maxHealth;
            for(var i = 0; i < 8; i++) {
                Tank.barrels.push(
                    new Barrel(
                        {
                            x: Tank.pos.x,
                            y: Tank.pos.y
                        },
                        0,
                        (Math.PI/16)+(Math.PI/8) * i,
                        {
                            lenghtRadius: 1.15,
                            widthRadius: 0.35
                        },
                        true,
                        0,
                        0,
                        5,
                        2,
                        "normal",
                        {
                            type: "drone",
                            sizeRadius: 1,
                            health: 5,
                            damage: 15,
                            speed: 7,
                            lifeTime: Infinity,
                            canControl: true,
                            outerShell: null
                        }
                    )
                )
            }
            for(var i = 8; i < 16; i++) {
                Tank.barrels.push(
                    new Barrel(
                        {
                            x: Tank.pos.x,
                            y: Tank.pos.y
                        },
                        0,
                        (Math.PI/16)+(Math.PI/8) * i,
                        {
                            lenghtRadius: 1.15,
                            widthRadius: 0.35
                        },
                        true,
                        0,
                        0,
                        5,
                        2,
                        "normal",
                        {
                            type: "drone",
                            sizeRadius: 1,
                            health: 5,
                            damage: 4,
                            speed: 7,
                            lifeTime: Infinity,
                            canControl: true,
                            outerShell: null
                        }
                    )
                )
            }
        break;
    }
}