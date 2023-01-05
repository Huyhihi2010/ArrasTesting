import { wss } from "../src/Gamemodes/server.js";
import { Game } from "../src/game.js";
import { get } from "./const/ui.js";
import { btnStartGame, inputName } from "../client/installion.js";

async function Gameserver(server) {
    const base = new server(Game.base, "Base Arena", "base");
    const dom = new server(Game.dom, "Domination", "dom");
    const sbx = new server(Game.sbx, "Sanbox", "sbx");
    const ffa = new server(Game.ffa, "FFA", "ffa");
    const maze = new server(Game.maze, "Maze", "maze");
}

(function(Check=Boolean(Check)){if(Check===true){const Href="http://localhost:5500/client/index.html";if(window.location.href!==Href){window.open(Href,"_parent");}else{window.addEventListener('reset', () => {alert("Web can't save this!")});console.log("Check out!");Gameserver(wss);(function(sock){if(sock !== get){alert("Error sock");window.location.reload();}else{const Socket=sock;btnStartGame.addEventListener('click',()=>{if(inputName.value === ""){console.error("Can't find name")};Socket.receive("f","Just a play game");console.log("join game!");})}}(get))}}else{console.warn("Can't find href real or fake!")}}(true))