import { Arena } from "../nativi/Arena.js";
import { arenas } from "../nativi/Object.js";
import { resizeCanvasGame, SpawnShape, SuperTick } from "../tick.js";

export async function ffaArena(game) {
    async function arenaGame() {
        arenas.push(new Arena({x: 0 - Math.random() * 2000, y: 0 - Math.random() * 2000}, {width: 0, height: 0}));
        SuperTick(8000, 8000);
    }
    async function gameArena() {
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