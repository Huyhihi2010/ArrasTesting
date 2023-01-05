import { box } from "../../nativi/Object.js";
import { setTank } from "../TankDefense.js";

export default class tankBox{
    constructor({tank, IdTank, classLevel, id, level, color}) {
        this.Remove = false;
        this.tank = tank;
        this.IdTank = IdTank;
        this.classLevel = classLevel;
        this.id = id;
        this.level = level;
        this.color = color;
        this.startShow = false;
        this.Box = document.createElement('button');
        this.tank_box = document.getElementById('tank-box');
        this.tank_box.appendChild(this.Box);
        this.Box.style = `
        display: none;
        border: 0px;
        `;
    }
    setupBox() {
        let colorBox;

        if(this.color === "blue") {
            colorBox = `
            background: linear-gradient(0deg, rgb(120, 199, 255) 50%, rgb(103, 187, 255) 50% 100%);
            border-radius: 5px;
            border: 0px;
            `;
        }

        if(this.color === "yellow") {
            colorBox = `
            background: linear-gradient(0deg, rgb(251, 255, 26) 50%, rgb(235, 231, 0) 50% 100%);
            border-radius: 5px;
            border: 0px;
            `;
        }

        if(this.color === "orange") {
            colorBox = `
            background: linear-gradient(0deg, rgb(255, 182, 26) 50%, rgb(235, 172, 0) 50% 100%);
            border-radius: 5px;
            border: 0px;
            `;
        }

        if(this.color === "green") {
            colorBox = `
            background: linear-gradient(0deg, rgb(26, 255, 102) 50%, rgb(0, 204, 61) 50% 100%);
            border-radius: 5px;
            border: 0px;
            `;
        }

        this.Box.style = colorBox;
    }
    whenShow() {
        if(this.tank !== null) {
            if(this.tank.level === this.level) {
                if(!this.startShow) {
                    console.log("Selector tank a update!");
                    this.Box.style = `
                    display: block;
                    transition: 0.5s;
                    `;
                    this.startShow = true;
                }
            }
        }
    }
    drawBox() {
        this.Box.innerHTML = this.id;
    }
    update() {
        this.whenShow();
        this.setupBox();
        this.drawBox();
        
        this.Box.addEventListener('click', () => {
            for(var i = 0; i < box.length; i++) {
                if(this !== box[i]) continue;
                if(this.classLevel === box[i].classLevel) {
                    this.Remove = true;
                    box[i].Remove = true;
                }
            }
            setTank(this.IdTank, this.tank);
        })

        if(this.Remove) {
            this.Box.remove();
        }
    }
}