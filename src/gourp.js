import { AIGroup, AIinTank, AIType } from "./coder/AItank.js";
import { setHealth , EntityDeath } from "./coder/Emus.js";
import { entity, players, ai, dominations, shapes, teambases , walls } from "./nativi/Object.js";
import { EntityGroup, EntityProjectile, EntityType, ObjectWall, ProjectileGroup, TeamBaseCollision } from "./vecto/collsion.js";

export function GameGroup() {
    //

    AIinTank(ai, players);

    AIinTank(ai, entity);

    AIinTank(players, entity);

    AIinTank(shapes, ai);

    AIinTank(shapes, players);

    AIinTank(shapes, entity);

    AIinTank(dominations, players)

    AIinTank(dominations, ai)

    AIinTank(dominations, entity)

    AIinTank(dominations, shapes)

    //wall

    ObjectWall(players, walls);

    ObjectWall(ai, walls);

    ObjectWall(entity, walls);

    ObjectWall(shapes, walls);

    //Team Base

    TeamBaseCollision(teambases, players);

    TeamBaseCollision(teambases, ai);

    TeamBaseCollision(teambases, entity);

    TeamBaseCollision(teambases, shapes);

    TeamBaseCollision(teambases, dominations);

    //Group

    EntityGroup(ai, players);

    EntityGroup(players, entity);

    EntityGroup(ai, entity);

    EntityGroup(shapes, entity);

    EntityGroup(shapes, players);

    EntityGroup(shapes, ai);

    EntityGroup(dominations, players)

    EntityGroup(dominations, ai)

    EntityGroup(dominations, entity)

    EntityGroup(dominations, shapes)

    //Type

    EntityType(entity);

    EntityType(ai);

    EntityType(shapes);

    EntityType(dominations);

    //Projectile

    ProjectileGroup(ai, players);

    ProjectileGroup(players, entity);

    ProjectileGroup(entity, ai);

    ProjectileGroup(shapes, players);

    ProjectileGroup(shapes, entity);

    ProjectileGroup(shapes, ai);

    ProjectileGroup(dominations, players)

    ProjectileGroup(dominations, ai)

    ProjectileGroup(dominations, entity)

    ProjectileGroup(dominations, shapes)


    //Entity - Projectile

    EntityProjectile(ai, players);

    EntityProjectile(players, entity);

    EntityProjectile(ai, entity);

    EntityProjectile(entity, shapes);

    EntityProjectile(shapes, ai);

    EntityProjectile(players, shapes);

    EntityProjectile(dominations, players)

    EntityProjectile(dominations, ai)

    EntityProjectile(dominations, entity)

    EntityProjectile(dominations, shapes)

    //Health

    setHealth(players);

    setHealth(entity);

    setHealth(ai);

    setHealth(shapes);

    setHealth(dominations);

    //Entity Died

    EntityDeath(players);

    EntityDeath(entity);

    EntityDeath(shapes);

    EntityDeath(ai);

    EntityDeath(dominations);

    // AI

    /*

    AI(ai, players);

    AI(ai, entity);

    AI(players, entity);

    AI(shapes, ai);

    AI(shapes, players);

    AI(shapes, entity);

    */

    AIGroup(ai, players);

    AIGroup(ai, entity);

    AIGroup(players, entity);

    AIGroup(shapes, ai);

    AIGroup(shapes, players);

    AIGroup(shapes, entity);

    AIGroup(dominations, players)

    AIGroup(dominations, ai)

    AIGroup(dominations, entity)

    AIGroup(dominations, shapes)

    // AI type

    AIType(ai);

    AIType(entity);

    AIType(dominations);

    AIType(shapes);
}