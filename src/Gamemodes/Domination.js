import { Emies } from "../coder/Emus.js";
import { get } from "../const/ui.js";
import { ArenaCloser } from "../Entity/Misc/ArenaCloser.js";
import Base from "../Entity/Misc/Base.js";
import { Domination } from "../Entity/Misc/Domination.js";
import { Arena } from "../nativi/Arena.js";
import { ai, arenas, dominations, entity, players, teambases } from "../nativi/Object.js";
import { TeamBase } from "../nativi/TeamBase.js";
import { resizeCanvasGame, SpawnShape, SuperTick } from "../tick.js";

const BaseSize = 600;
const teamBaseSize = BaseSize / 1.5;
var TeamWin = {
    Red: false,
    Blue: false
}

var closerArena = false;
var SpawnArenaCloser = true;

export async function dominationArena(game) {
    async function arenaGame() {
        arenas.push(new Arena({x: 0, y: 0}, {width: 0, height: 0}));
        SuperTick(3000, 3000);
    }
    async function gameArena() {
        SpawnShape(40, 5);

        teambases.push(new TeamBase({x: (arenas[0].pos.x - arenas[0].size.width) + BaseSize, y: (arenas[0].pos.y - arenas[0].size.height) + BaseSize}, {width: BaseSize, height: BaseSize}, Emies.Color.Blue, true));
        teambases.push(new TeamBase({x: (arenas[0].pos.x + arenas[0].size.width) - BaseSize, y: (arenas[0].pos.y + arenas[0].size.height) - BaseSize}, {width: BaseSize, height: BaseSize}, Emies.Color.Red, true));

        ai.push(new Base((arenas[0].pos.x - arenas[0].size.width) + BaseSize, (arenas[0].pos.y - arenas[0].size.height) + BaseSize, Emies.Color.Blue));
        ai.push(new Base((arenas[0].pos.x + arenas[0].size.width) - BaseSize, (arenas[0].pos.y + arenas[0].size.height) - BaseSize, Emies.Color.Red));

        dominations.push(new Domination(arenas[0].pos.x, arenas[0].pos.y, new TeamBase({x: arenas[0].pos.x + arenas[0].size.width * 0.45, y: arenas[0].pos.y + arenas[0].size.height * 0.45}, {width: teamBaseSize, height: teamBaseSize}, Emies.Color.NoTeam, false), Emies.Color.NoTeam));
        // dominations.push(new Domination(arenas[0].pos.x + arenas[0].size.width * 0.45, arenas[0].pos.y + arenas[0].size.height * 0.45, new TeamBase({x: arenas[0].pos.x + arenas[0].size.width * 0.45, y: arenas[0].pos.y + arenas[0].size.height * 0.45}, {width: teamBaseSize, height: teamBaseSize}, Emies.Color.NoTeam, false), Emies.Color.NoTeam));
        // dominations.push(new Domination(arenas[0].pos.x - arenas[0].size.width * 0.45, arenas[0].pos.y - arenas[0].size.height * 0.45, new TeamBase({x: arenas[0].pos.x - arenas[0].size.width * 0.45, y: arenas[0].pos.y - arenas[0].size.height * 0.45}, {width: teamBaseSize, height: teamBaseSize}, Emies.Color.NoTeam, false), Emies.Color.NoTeam));
        // dominations.push(new Domination(arenas[0].pos.x - arenas[0].size.width * 0.45, arenas[0].pos.y + arenas[0].size.height * 0.45, new TeamBase({x: arenas[0].pos.x + arenas[0].size.width * 0.45, y: arenas[0].pos.y - arenas[0].size.height * 0.45}, {width: teamBaseSize, height: teamBaseSize}, Emies.Color.NoTeam, false), Emies.Color.NoTeam));
        // dominations.push(new Domination(arenas[0].pos.x + arenas[0].size.width * 0.45, arenas[0].pos.y - arenas[0].size.height * 0.45, new TeamBase({x: arenas[0].pos.x - arenas[0].size.width * 0.45, y: arenas[0].pos.y + arenas[0].size.height * 0.45}, {width: teamBaseSize, height: teamBaseSize}, Emies.Color.NoTeam, false), Emies.Color.NoTeam));
    }
    async function tick() {
        game();
        window.addEventListener('resize', resizeCanvasGame);
    }
    async function EndArena() {
        setInterval(() => {
            for(var i = 0; i < dominations.length; i++) {
                if(dominations[i].tankBody.team === Emies.Color.Red) {
                    if(!closerArena) {
                        TeamWin.Red = true;
                        closerArena = true;
                    }
                } else {
                    if(dominations[i].tankBody.team === Emies.Color.Blue) {
                        if(!closerArena) {
                            TeamWin.Blue = true;
                            closerArena = true;
                        }
                    }
                }
            }

            if(TeamWin.Red) {
                get.receive('r', "TEAM RED HAS WON GAME!");
                TeamWin.Red = false;
            } else if(TeamWin.Blue) {
                get.receive('b', "TEAM BLUE HAS WON GAME!");
                TeamWin.Blue = false;
            }

            if(closerArena) {
                setTimeout(() => {
                    if(SpawnArenaCloser) {
                        get.receive('m', "Arena Closer: No player join!");
                        arenas.forEach((arena) => {
                            for(var i = 0; i < 16; i++) {
                                entity.push(new ArenaCloser(Math.random() * (arena.size.width * 2) + (arena.pos.x - arena.size.width), Math.random() * (arena.size.height * 2) + (arena.pos.y - arena.size.height)));
                            }
                        })
                        SpawnArenaCloser = false;
                    }
                }, 4500)
            }
        }, 10)
    }
    arenaGame();
    gameArena();
    tick();
    EndArena();
}