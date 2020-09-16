var roleUpgrader = {
    run: function (creep) {

        if(creep.carry.energy == creep.carryCapacity){
            creep.memory.full = true;
        }
        
        if(creep.carry.energy == 0){
            creep.memory.full = false
        }

        if (!creep.memory.full) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        } else {
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
    }
};

module.exports = roleUpgrader;