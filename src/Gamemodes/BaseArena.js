import { Emies } from "../coder/Emus.js";
import Base from "../Entity/Misc/Base.js";
import { Arena } from "../nativi/Arena.js";
import { ai, arenas } from "../nativi/Object.js";
import { resizeCanvasGame, SpawnShape, SuperTick } from "../tick.js";

export default async function BaseArena(game) {
    async function arenaGame() {
        arenas.push(new Arena({x: 0 - Math.random() * 2000, y: 0 - Math.random() * 2000}, {width: 0, height: 0}));
        SuperTick(2500, 2500);
    }
    async function gameArena() {
        ai.push(new Base(arenas[0].pos.x, arenas[0].pos.y, Emies.Color.Fallen));
        SpawnShape(40, 5);
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