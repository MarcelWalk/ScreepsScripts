var roleHarvester = require('role_harvester')
var roleUpgrader = require('role_upgrader')
var roleBuilder = require('role_builder')
var roleClaimer = require('role_claimer')
var settings = require('settings')

var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'H');
var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'U');
var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'B');
var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'C');


if (harvesters.length < settings.AMOUNT_HARVESTERS) {

    Game.spawns["S"].spawnCreep([WORK, CARRY, MOVE, MOVE], "H_" + Math.floor((Math.random() * 100) + 1));

} else { //Make sure there are never no builders
    if (upgraders.length < settings.AMOUNT_UPGRADERS) {

        Game.spawns["S"].spawnCreep([WORK, CARRY, CARRY, MOVE], "U_" + Math.floor((Math.random() * 100) + 1));

    }
    if (builders.length < settings.AMOUNT_BUILDERS) {

        Game.spawns["S"].spawnCreep([WORK, CARRY, CARRY, MOVE], "B_" + Math.floor((Math.random() * 100) + 1));

    }
    if (claimers.length < settings.AMOUNT_CLAIMERS) {

        Game.spawns["S"].spawnCreep([WORK, CARRY, MOVE], "C_" + Math.floor((Math.random() * 100) + 1));

    }
}


console.log("Harvesters: " + harvesters.length);
console.log("Upgraders: " + upgraders.length);
console.log("Builders: " + builders.length);
console.log("----------------------------")

for (var creepName in Game.creeps) {
    var creep = Game.creeps[creepName];



    if (creep.memory.role == undefined) {
        creep.memory.role = creep.name.charAt(0);
    }
    if (creep.memory.activeSource == undefined) {

        var rdmNum = Math.floor((Math.random() * creep.room.find(FIND_SOURCES).length));
        creep.memory.activeSource = creep.room.find(FIND_SOURCES)[rdmNum].id

    }


    if (creep.memory.role == "H") {
        roleHarvester.run(creep);
    } else if (creep.memory.role == "U") {
        roleUpgrader.run(creep)
    } else if (creep.memory.role == "B") {
        roleBuilder.run(creep)
    } else if (creep.memory.role == "C") {
        roleClaimer.run(creep)
    }

    for (var i in Memory.creeps) {
        if (!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }
}