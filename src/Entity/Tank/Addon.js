import { Emies, Tanks } from "../../coder/Emus.js";
import { setTank } from "../../coder/TankDefense.js";
import { Barrel } from "./Barrel.js";
import { TankBody } from "./TankBody.js";

export class Addon{
    constructor({type, angle, offset, sizeRadius: {sizeTank, size}, sides, canControl, canShot, canAi, Ai, viewRanage, isColor, teamValue}) {
        this.type = type;
        this.angle = angle;
        this.offset = offset;
        this.sizeRadius = {
            sizeTank: sizeTank,
            size: size
        };
        this.sides = sides;
        this.canControl = canControl;
        this.canShot = canShot;
        this.canAi = canAi;
        this.Ai = Ai;
        this.viewRanage = viewRanage;
        this.isColor = isColor;
        this.teamValue = teamValue;
        this.tankBody = new TankBody({x: null, y: null}, (this.sizeRadius.sizeTank / 100) * (this.sizeRadius.size * 100), this.teamValue);
        this.changeTank = true;
    }
    setup() {
        this.tankBody.updateTank();

        this.tankBody.isColor = this.isColor;
        this.tankBody.type = "CCB";
        this.tankBody.Ai = this.Ai;
        this.tankBody.viewRanage = this.viewRanage;
        this.tankBody.FlagHealth = false;
        this.tankBody.FlagName = false;
        this.tankBody.spin = false;

        if(this.changeTank) {
            this.tankBody.sides = this.sides;
            if(this.type === "drone-base") {
                this.tankBody.barrels.push(
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        this.tankBody.size * 0.12,
                        0,
                        {
                            lenghtRadius: 1.25,
                            widthRadius: 0.65
                        },
                        this.canShot,
                        0,
                        0,
                        2,
                        Infinity,
                        "normal",
                        {
                            type: "minidrone",
                            sizeRadius: 0.7,
                            health: Infinity,
                            damage: 50,
                            speed: 18,
                            lifeTime: 0.16,
                            canControl: true,
                            outerShell: null
                        }
                    ),
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        -this.tankBody.size * 0.12,
                        0,
                        {
                            lenghtRadius: 1.25,
                            widthRadius: 0.65
                        },
                        this.canShot,
                        0,
                        0,
                        1,
                        Infinity,
                        "normal",
                        {
                            type: "minidrone",
                            sizeRadius: 0.7,
                            health: Infinity,
                            damage: 50,
                            speed: 18,
                            lifeTime: 0.16,
                            canControl: true,
                            outerShell: null
                        }
                    ),
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        0,
                        {
                            lenghtRadius: 1.35,
                            widthRadius: 0.65
                        },
                        this.canShot,
                        0,
                        0,
                        1,
                        Infinity,
                        "normal",
                        {
                            type: "minidrone",
                            sizeRadius: 0.7,
                            health: Infinity,
                            damage: 50,
                            speed: 18,
                            lifeTime: 0.16,
                            canControl: true,
                            outerShell: null
                        }
                    ),
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        0,
                        {
                            lenghtRadius: 1.1,
                            widthRadius: 1.2
                        },
                        this.canShot,
                        0,
                        Infinity,
                        1,
                        Infinity,
                        "normal",
                        {
                            type: "minidrone",
                            sizeRadius: 0.7,
                            health: Infinity,
                            damage: 50,
                            speed: 18,
                            lifeTime: 0.6,
                            canControl: true,
                            outerShell: null
                        }
                    )
                )
            }
            if(this.type === "drone-1") {
                this.tankBody.barrels.push(
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        0,
                        {
                            lenghtRadius: 1.25,
                            widthRadius: 0.95
                        },
                        this.canShot,
                        0,
                        0,
                        2,
                        8,
                        "normal",
                        {
                            type: "drone",
                            sizeRadius: 1,
                            health: 4,
                            damage: 2.5,
                            speed: 10,
                            lifeTime: Infinity,
                            canControl: true,
                            outerShell: null
                        }
                    )
                )
            }
            if(this.type === "drone-2") {
                this.tankBody.barrels.push(
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        Math.PI*0.5,
                        {
                            lenghtRadius: 1.25,
                            widthRadius: 0.95
                        },
                        this.canShot,
                        0,
                        0,
                        2,
                        4,
                        "normal",
                        {
                            type: "drone",
                            sizeRadius: 1,
                            health: 4,
                            damage: 2.5,
                            speed: 10,
                            lifeTime: Infinity,
                            canControl: true,
                            outerShell: null
                        }
                    ),
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        -Math.PI*0.5,
                        {
                            lenghtRadius: 1.25,
                            widthRadius: 0.95
                        },
                        this.canShot,
                        0,
                        0,
                        2,
                        4,
                        "normal",
                        {
                            type: "drone",
                            sizeRadius: 1,
                            health: 4,
                            damage: 2.5,
                            speed: 10,
                            lifeTime: Infinity,
                            canControl: true,
                            outerShell: null
                        }
                    )
                )
            }
            if(this.type === "drone-3") {
                this.tankBody.barrels.push(
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        Math.PI*0.66,
                        {
                            lenghtRadius: 1.25,
                            widthRadius: 0.95
                        },
                        this.canShot,
                        0,
                        0,
                        2,
                        6,
                        "normal",
                        {
                            type: "drone",
                            sizeRadius: 1,
                            health: 4,
                            damage: 2.5,
                            speed: 10,
                            lifeTime: Infinity,
                            canControl: true,
                            outerShell: null
                        }
                    ),
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        Math.PI*(0.66 * 2),
                        {
                            lenghtRadius: 1.25,
                            widthRadius: 0.95
                        },
                        this.canShot,
                        0,
                        0,
                        2,
                        6,
                        "normal",
                        {
                            type: "drone",
                            sizeRadius: 1,
                            health: 4,
                            damage: 2.5,
                            speed: 10,
                            lifeTime: Infinity,
                            canControl: true,
                            outerShell: null
                        }
                    ),
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        Math.PI* (0.66 * 3),
                        {
                            lenghtRadius: 1.25,
                            widthRadius: 0.95
                        },
                        this.canShot,
                        0,
                        0,
                        6,
                        4,
                        "normal",
                        {
                            type: "drone",
                            sizeRadius: 1,
                            health: 4,
                            damage: 2.5,
                            speed: 10,
                            lifeTime: Infinity,
                            canControl: true,
                            outerShell: null
                        }
                    )
                )
            }
            if(this.type === "drone-5") {
                for(var i = 0; i < 5; i++) {
                    this.tankBody.barrels.push(
                        new Barrel(
                            {
                                x: this.tankBody.pos.x,
                                y: this.tankBody.pos.y
                            },
                            0,
                            Math.PI*0.4*i,
                            {
                                lenghtRadius: 1.25,
                                widthRadius: 0.95
                            },
                            this.canShot,
                            0,
                            0,
                            2,
                            5,
                            "normal",
                            {
                                type: "drone",
                                sizeRadius: 1,
                                health: 5,
                                damage: 3.5,
                                speed: 10,
                                lifeTime: Infinity,
                                canControl: true,
                                outerShell: null
                            }
                        )
                    )
                }
            }

            if(this.type === "dominationH" || this.type === "dominationG" || this.type==="dominationT" || this.type === Tanks.ArenaCloser) {
                setTank(this.type, this.tankBody);
            }


            if(this.type === "barrel-big") {
                this.tankBody.barrels.push(
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        0,
                        {
                            lenghtRadius: 1.65,
                            widthRadius: 1.35
                        },
                        this.canShot,
                        0,
                        0,
                        4,
                        10,
                        "normal",
                        {
                            type: "bullet",
                            sizeRadius: 1,
                            health: 5,
                            damage: 6,
                            speed: 10,
                            lifeTime: 0.4,
                            canControl: false,
                            outerShell: null
                        }
                    )
                )
            }
            if(this.type === "barrel-bigger") {
                this.tankBody.barrels.push(
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        0,
                        {
                            lenghtRadius: 1.65,
                            widthRadius: 1.85
                        },
                        this.canShot,
                        0,
                        0,
                        6,
                        10,
                        "normal",
                        {
                            type: "bullet",
                            sizeRadius: 1,
                            health: 5,
                            damage: 10,
                            speed: 10,
                            lifeTime: 0.4,
                            canControl: false,
                            outerShell: null
                        }
                    )
                )
            }
            if(this.type === "barrel-biggest") {
                this.tankBody.barrels.push(
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        0,
                        {
                            lenghtRadius: 1.65,
                            widthRadius: 2.55
                        },
                        this.canShot,
                        0,
                        0,
                        10,
                        10,
                        "normal",
                        {
                            type: "bullet",
                            sizeRadius: 1,
                            health: 10,
                            damage: 16,
                            speed: 10,
                            lifeTime: 0.4,
                            canControl: false,
                            outerShell: null
                        }
                    )
                )
            }
            if(this.type === "barrel-1") {
                this.tankBody.barrels.push(
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        0,
                        {
                            lenghtRadius: 1.65,
                            widthRadius: 0.85
                        },
                        this.canShot,
                        0,
                        0,
                        2,
                        10,
                        "normal",
                        {
                            type: "bullet",
                            sizeRadius: 1,
                            health: 2,
                            damage: 3.5,
                            speed: 10,
                            lifeTime: 0.4,
                            canControl: false,
                            outerShell: null
                        }
                    )
                )
            }
            if(this.type === "barrel-2") {
                this.tankBody.barrels.push(
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        this.tankBody.size * 0.5,
                        0,
                        {
                            lenghtRadius: 1.65,
                            widthRadius: 0.85
                        },
                        this.canShot,
                        0,
                        1,
                        2,
                        10,
                        "normal",
                        {
                            type: "bullet",
                            sizeRadius: 1,
                            health: 2,
                            damage: 3.5,
                            speed: 10,
                            lifeTime: 0.4,
                            canControl: false,
                            outerShell: null
                        }
                    ),
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        -this.tankBody.size * 0.5,
                        0,
                        {
                            lenghtRadius: 1.65,
                            widthRadius: 0.85
                        },
                        this.canShot,
                        0,
                        0,
                        2,
                        10,
                        "normal",
                        {
                            type: "bullet",
                            sizeRadius: 1,
                            health: 2,
                            damage: 3.5,
                            speed: 10,
                            lifeTime: 0.4,
                            canControl: false,
                            outerShell: null
                        }
                    )
                )
            }
            if(this.type === "barrel-3") {
                this.tankBody.barrels.push(
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        this.tankBody.size * 0.5,
                        0,
                        {
                            lenghtRadius: 1.55,
                            widthRadius: 0.85
                        },
                        this.canShot,
                        0,
                        1,
                        2,
                        10,
                        "normal",
                        {
                            type: "bullet",
                            sizeRadius: 1,
                            health: 2,
                            damage: 3.5,
                            speed: 10,
                            lifeTime: 0.4,
                            canControl: false,
                            outerShell: null
                        }
                    ),
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        -this.tankBody.size * 0.5,
                        0,
                        {
                            lenghtRadius: 1.55,
                            widthRadius: 0.85
                        },
                        this.canShot,
                        0,
                        1,
                        2,
                        10,
                        "normal",
                        {
                            type: "bullet",
                            sizeRadius: 1,
                            health: 2,
                            damage: 3.5,
                            speed: 10,
                            lifeTime: 0.4,
                            canControl: false,
                            outerShell: null
                        }
                    ),
                    new Barrel(
                        {
                            x: this.tankBody.pos.x,
                            y: this.tankBody.pos.y
                        },
                        0,
                        0,
                        {
                            lenghtRadius: 1.75,
                            widthRadius: 0.85
                        },
                        this.canShot,
                        0,
                        0,
                        2,
                        10,
                        "normal",
                        {
                            type: "bullet",
                            sizeRadius: 1,
                            health: 2,
                            damage: 3.5,
                            speed: 10,
                            lifeTime: 0.4,
                            canControl: false,
                            outerShell: null
                        }
                    )
                )
            }
            this.changeTank = false;
        }
    }
    update() {
        this.setup();
    }
}