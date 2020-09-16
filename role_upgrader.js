var roleUpgrader = {
    run: function (creep) {

        var energySource = Game.getObjectById(creep.memory.activeSource);

        if (creep.carry.energy == creep.carryCapacity) {
            
            //Delete source memory just because it looks more natural :D
            creep.memory.activeSource = undefined;

            creep.memory.full = true;
        }

        if (creep.carry.energy == 0) {
            creep.memory.full = false
        }

        if (!creep.memory.full) {
            if (creep.harvest(energySource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(energySource);
            }
        } else {
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
};

module.exports = roleUpgrader;