import { players } from "./nativi/Object.js";
import { get } from "./const/ui.js";

addEventListener('keydown', ({key}) => {
    players.forEach((player) => {
        switch (key) {
            case "ArrowUp":
                player.tankBody.velocity.y = player.tankBody.speed;
                player.tankBody.startMove = true;
                break;
            case "ArrowDown":
                player.tankBody.velocity.y = -player.tankBody.speed;
                player.tankBody.startMove = true;
                break;
            case "ArrowLeft":
                player.tankBody.velocity.x = player.tankBody.speed;
                player.tankBody.startMove = true;
                break;
            case "ArrowRight":
                player.tankBody.velocity.x = -player.tankBody.speed;
                player.tankBody.startMove = true;
                break;
        }
    })
})

addEventListener('keypress', ({key}) => {
    players.forEach((player) => {
        switch (key) {
            case "e":
                if(player.tankBody.autoShot) {
                    player.tankBody.autoShot = false;
                    get.receive("m", "Auto Fire : OFF");
                } else {
                    player.tankBody.autoShot = true;
                    get.receive("m", "Auto Fire : ON");
                }
                player.tankBody.startShot = false;
                break;
            case "c":
                if(player.tankBody.spin) {
                    player.tankBody.spin = false;
                    get.receive("m", "Auto Spin : OFF");
                } else {
                    player.tankBody.spin = true;
                    get.receive("m", "Auto Spin : ON");
                }
                break;
            case "r":
                if(player.tankBody.stopAi) {
                    player.tankBody.stopAi = false;
                    get.receive("m", "Ai turret, addon : OFF");
                } else {
                    player.tankBody.stopAi = true;
                    get.receive("m", "Ai turret, addon : ON");
                }
                break;
        }
    })
})

addEventListener('keyup', ({key}) => {
    players.forEach((player) => {
        switch (key) {
            case "ArrowUp":
                player.tankBody.startMove = false;
                break;
            case "ArrowDown":
                player.tankBody.startMove = false;
                break;
            case "ArrowLeft":
                player.tankBody.startMove = false;
                break;
            case "ArrowRight":
                player.tankBody.startMove = false;
                break;
        }
    })
})

addEventListener('mousedown', (e) => {
    players.forEach((player) => {
        if(e.button === 2) {
            player.tankBody.useDrone = false;
        } else {
            player.tankBody.startShot = true;
        }
    })
})

addEventListener('mouseup', (e) => {
    players.forEach((player) => {
        if(e.button === 2) {
            player.tankBody.useDrone = true;
        } else {
            player.tankBody.startShot = false;
        }
    })
})

addEventListener('mousemove', (e) => {
    players.forEach((player) => {
        player.tankBody.mouse.x = e.clientX;
        player.tankBody.mouse.y = e.clientY;
    })
})