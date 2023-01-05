export const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');

export const inputName = document.getElementById('input-name');
export const btnStartGame = document.getElementById('btn-startGame');
export const GameMode = document.getElementById('gamemodes');
export const menuGame = document.getElementById('menu-game');

export var FOV = 1;

export function maxCanvas(entity, cost) {
    return entity.pos.x > -cost && entity.pos.x < canvas.width + cost && entity.pos.y > -cost && entity.pos.y < canvas.height + cost;
}

export function maxCanvas2(entity, cost1, cost2) {
    return entity.pos.x > -cost1 && entity.pos.x < canvas.width + cost1 && entity.pos.y > -cost2 && entity.pos.y < canvas.height + cost2;
}

canvas.width = innerWidth;
canvas.height = innerHeight;

export function Angle(entityX1, entityY1, entityX2, entityY2) {
    return Math.atan2(entityY2 - entityY1, entityX2 - entityX1);
}

export function Distance(entityX1, entityY1, entityX2, entityY2) {
    return Math.hypot(entityX1 - entityX2, entityY1 - entityY2);
}

export function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
export function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}
  
export function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1
  
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

export function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}

export function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.pos.x - particle.pos.x;
    const yDist = otherParticle.pos.y - particle.pos.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.pos.y - particle.pos.y, otherParticle.pos.x - particle.pos.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
    }
}

export function resolveCollisionUnit(particle, otherParticle) {
    const xVelocityDiff = particle.tankBody.velocity.x - otherParticle.tankBody.velocity.x;
    const yVelocityDiff = particle.tankBody.velocity.y - otherParticle.tankBody.velocity.y;

    const xDist = otherParticle.pos.x - particle.pos.x;
    const yDist = otherParticle.pos.y - particle.pos.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.pos.y - particle.pos.y, otherParticle.pos.x - particle.pos.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
    }
}

export function resolveCollisionDrone(particle, otherParticle) {
    const xVelocityDiff = particle.velocityRecoil.x - otherParticle.velocityRecoil.x;
    const yVelocityDiff = particle.velocityRecoil.y - otherParticle.velocityRecoil.y;

    const xDist = otherParticle.pos.x - particle.pos.x;
    const yDist = otherParticle.pos.y - particle.pos.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.pos.y - particle.pos.y, otherParticle.pos.x - particle.pos.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocityRecoil, angle);
        const u2 = rotate(otherParticle.velocityRecoil, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocityRecoil.x = vFinal1.x;
        particle.velocityRecoil.y = vFinal1.y;

        otherParticle.velocityRecoil.x = vFinal2.x;
        otherParticle.velocityRecoil.y = vFinal2.y;
    }
}

export function MakeSmall(cost) {
    let num;
    const k = 1000;
    const m = 1000000;
    const b = 1000000000;
    const t = 1000000000000;
    const q = 1000000000000000;
    const a = 1000000000000000000;
    const qa = 1000000000000000000000;
    const infinity = 1000000000000000000000000;
    if(cost != String) {
        if(cost >= k && cost < m) {
            return num = Math.floor(cost / k) + "k";
        } else if (cost >= m && cost < b) {
            return num = Math.floor(cost / m) + "M";
        } else if (cost >= b && cost < t) {
            return num = Math.floor(cost / b) + "B";
        } else if (cost >= t && cost < q) {
            return num = Math.floor(cost / t) + "T";
        } else if (cost >= q && cost < a) {
            return num = Math.floor(cost / q) + "Q";
        } else if (cost >= a && cost < qa) {
            return num = Math.floor(cost / a) + "A";
        } else if (cost >= qa && cost < infinity) {
            return num = Math.floor(cost / qa) + "QA";
        } else {
            return num = cost;
        }
    }
}