export const Emies = {
    "Entity": {
        "Radius": {
            "Circle": Math.PI*2,
        },
        "Side": {
            "Circle": 1,
            "Triangle": 3,
            "Rect": 4,
            "Pentagon": 5,
            "Hexagon": 6
        },
    },
    "Color": {
        "Barrel": {
            "stroke": "dimgray",
            "body": "gray"
        },
        "Blue": {
            "stroke": "#1E90FF",
            "body": "#00BFFF"
        },
        "Orange": {
            "stroke": "#FF3300",
            "body": "#FF653F"
        },
        "DarkBlue": {
            "stroke": "#1341BF",
            "body": "#1D51E1"
        },
        "Hexagonal": {
            "stroke": "#7FFF00",
            "body": "#ADFF2F"
        },
        "Red": {
            "stroke": "#B22222",
            "body": "#DC143C"
        },
        "Purple": {
            "stroke": "#4B0082",
            "body": "#8A2BE2"
        },
        "DarkPurple": {
            "stroke": "#6A5ACD",
            "body": "#7B68EE"
        },
        "Green": {
            "stroke": "#228B22",
            "body": "#32CD32"
        },
        "Pink": {
            "stroke": "#FF1493",
            "body": "#FF69B4"
        },
        "NoTeam": {
            "stroke": "#FFD700",
            "body": "#FFFF00"
        },
        "Fallen": {
            "stroke": "#696969",
            "body": "#A9A9A9"
        },
        "White": {
            "stroke": "#DCDCDC",
            "body": "#F5F5F5"
        },
        "Null": {
            "stroke": null,
            "body": null
        }
    },
}

export const Tanks = {
    "Base"                     : "base",
    "ArenaCloser"              : "arena-closer",
    "Mothership"               : "mothership",
    "Factory"                  : "factory",
    "Launcher"                 : "launcher",
    "Auto-5"                   : "auto-5",
    "DominationT"              : "dominationT",
    "DominationG"              : "dominationG",
    "DominationH"              : "dominationH",
    "DominationD"              : "dominationD",
    "Dream"                    : "dream",
    "Tank"                     : "tank",
    "Double"                   : "double",
    "Triple"                   : "triple",
    "Streamliner"              : "streamliner",
    "Penta"                    : "penta",
    "Penta-Trap"               : "penta-trap",
    "Annihilator"              : "annihilator",
    "Penta-NercoTrap"          : "penta-nercoTrap",
    "Assassin"                 : "assassin",
    "Trapper"                  : "trapper",
    "Mega-Trapper"             : "mega-trapper",
    "Tri-Angle"                : "tri-angle",
    "Tri-Angle-Boomerang"      : "tri-angle-boomerang",
    "Tri-Angle-Trapper"        : "tri-angle-trapper",
    "Booster"                  : "booster",
    "Booster-Trap"             : "booster-trap",
    "Booster-NercoTrap"        : "booster-nercoTrap",
    "Boomerang"                : "boomerang",
    "Overseer"                 : "overseer",
    "Overlord"                 : "overlord",
    "Nerco"                    : "nerco",
    "Nercomer"                 : "nercomer",
    "Nercomerer"               : "nercomerer",
    "Auto-Tank"                : "auto-tank"
}

export function Distance(entity1, entity2) {
    return Math.hypot(entity1.tankBody.pos.x - entity2.tankBody.pos.y, entity1.tankBody.pos.y - entity2.tankBody.pos.y);
}

export function setHealth(entityGroup) {
    entityGroup.forEach((entity) => {
        if(entity.tankBody.type !== "CCS") {
            if(entity.tankBody.health <= 0) {
                if(entity.tankBody.type !== "Domination") {
                    entity.tankBody.died = true;
                }
            }
        }
    });
}

export function EntityDeath(entityGroup) {
    entityGroup.forEach((entity, index) => {
        if(entity.tankBody.type !== "CCS") {
            if(entity.tankBody.type !== "Domination") {
                if(entity.tankBody.alpha <= 0) {
                    setTimeout(() => {
                        entityGroup.splice(index, 1);
                    }, 0)
                }
            }
        }
    });
}