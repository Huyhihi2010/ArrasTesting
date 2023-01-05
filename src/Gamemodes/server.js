import { get } from "../const/ui.js";
import { tickFrame, Tick } from "../tick.js";
import { GameMode } from "../../client/installion.js";

import { dominations , shapes , entity , ai , players , teambases , walls , arenas } from "../nativi/Object.js";

export function wss(gamemode, name, id) {
    const Mod = document.createElement('div');

    Mod.innerHTML = `<button id="${id}">${name}</button><br>`;

    GameMode.appendChild(Mod);

    document.getElementById(id).style = `
    background-color: rgb(126, 127, 160);
    border: 0px;
    color: white;
    transition: 0.4s;
    `;

    document.getElementById(id).addEventListener('mouseover', () => {
        document.getElementById(id).style = `
        background-color: rgb(126, 127, 160);
        border: 0px;
        color: rgb(212, 212, 212);
        text-shadow: 0px 0px 10px white, 0px 0px 20px white;
        transition: 0.4s;
        `
    })

    document.getElementById(id).addEventListener('mouseout', () => {
        document.getElementById(id).style = `
        background-color: rgb(126, 127, 160);
        border: 0px;
        color: white;
        transition: 0.4s;
        `
    })

    document.getElementById(id).addEventListener('mousedown', () => {
        document.getElementById(id).style = `
        background-color: rgb(126, 127, 160);
        border: 0px;
        color: rgb(242, 242, 242);
        `
    })

    document.getElementById(id).addEventListener('mouseup', () => {
        document.getElementById(id).style = `
        background-color: rgb(126, 127, 160);
        border: 0px;
        color: rgb(212, 212, 212);
        `
    })

    document.getElementById(id).addEventListener('click', () => {
        
        arenas.splice(0, arenas.length);
        dominations.splice(0, dominations.length);
        shapes.splice(0, shapes.length);
        entity.splice(0, entity.length);
        ai.splice(0, ai.length);
        players.splice(0, players.length);
        teambases.splice(0, teambases.length);
        walls.splice(0, walls.length);

        get.receive('m', name);
        console.log(`Starting game mode ${name}`);
        console.log(`Started Server ${id}`);

        cancelAnimationFrame(tickFrame);

        gamemode(Tick);
    })
}