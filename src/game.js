import { arenas, players } from "./nativi/Object.js";
import { Player } from "./Entity/messo/player.js";
import { dominationArena } from "../src/Gamemodes/Domination.js";
import { ffaArena } from "../src/Gamemodes/ffa.js";
import { sanboxArena } from "../src/Gamemodes/sanboxArena.js";
import { mazeArena } from "./Gamemodes/mazeArena.js";
import { btnStartGame, inputName , menuGame } from "../client/installion.js";
import { Emies, Tanks } from "./coder/Emus.js";
import { setTank } from "./coder/TankDefense.js";
import BaseArena from "./Gamemodes/BaseArena.js";

export const Game = {
    "dom": dominationArena,
    "ffa": ffaArena,
    "sbx": sanboxArena,
    "maze": mazeArena,
    "base": BaseArena
}

btnStartGame.addEventListener('click', () => {
    if(arenas[0]) {
        players.push(new Player(Emies.Color.Red));
        menuGame.style.display = "none";
        if(inputName.value !== "" || inputName.value === String(" ")) {
            players[players.length - 1].tankBody.Name = inputName.value;
        }
        setTank(Tanks.Base, players[players.length - 1].tankBody);
    } else {
        alert("Please select game mode!");
        console.error("Can't find game mode");
    }
})