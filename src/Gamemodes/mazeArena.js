import { Emies } from "../coder/Emus.js";
import { Domination } from "../Entity/Misc/Domination.js";
import { Arena } from "../nativi/Arena.js";
import { arenas, dominations, walls } from "../nativi/Object.js";
import { TeamBase } from "../nativi/TeamBase.js";
import { Wall } from "../nativi/wall.js";
import { resizeCanvasGame, SpawnShape, SuperTick } from "../tick.js";

const titleW = 14;
const titleH = 14;
const leTitle = titleW * titleH;

export async function mazeArena(game) {
    async function arenaGame() {
        arenas.push(new Arena({x: 0 - Math.random() * 500, y: 0 - Math.random() * 500}, {width: 0, height: 0}));
        SuperTick(titleW * 100, titleH * 100);
    }
    async function gameArena() {
        let map = [];

        for(var i = 0; i < leTitle; i++) {
            if(Math.random() < 0.4) {
                map.push(1);
            } else {
                map.push(0);
            }
        }

        for(var y = 0; y < titleH; y++) {
            for(var x = 0; x < titleW; x++) {
                switch(map[(y*titleH + x)]) {
                    case 1:
                        walls.push(new Wall({x: ((arenas[0].pos.x - arenas[0].size.width) + 100) + x * 200, y: ((arenas[0].pos.y - arenas[0].size.height) + 100) + y * 200}, 100))
                        break;
                }
            }
        }

        SpawnShape(5, 5);
    }
    async function tick() {
        game();
        window.addEventListener('resize', resizeCanvasGame);
    }
    async function EndArena() {}
    arenaGame();
    gameArena();
    tick();
    EndArena();
}