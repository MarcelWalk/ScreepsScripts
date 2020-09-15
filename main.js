var roleHarvester = require('role_harvester')
var roleUpgrader = require('role_upgrader')

var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'H');
var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'U');

if(harvesters.length < 5){

    Game.spawns["S_1"].spawnCreep([WORK,CARRY,MOVE], "H_" + Math.floor((Math.random() * 100) + 1));
    
}
if(upgraders.length < 5){

    Game.spawns["S_1"].spawnCreep([WORK,CARRY,MOVE], "U_" + Math.floor((Math.random() * 100) + 1));
    
}

for (var creepName in Game.creeps) {
    var creep = Game.creeps[creepName];

    if (creep.memory.role == undefined) {
        creep.memory.role = creep.name.charAt(0);
    }


    if (creep.memory.role == "H") {
        roleHarvester.run(creep);
    } else if (creep.memory.role == "U") {
        roleUpgrader.run(creep)
    }

    for (var i in Memory.creeps) {
        if (!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }
}