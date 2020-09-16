var roleHarvester = {
    run: function (creep) {

        var energySource = Game.getObjectById(creep.memory.activeSource);

        if (creep.carry.energy == creep.carryCapacity) {

            //Delete source memory just because it looks more natural :D
            creep.memory.activeSource = undefined;

            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_CONTAINER) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if (targets.length > 0) {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        } else {
            if (creep.harvest(energySource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(energySource);
            }
        }
    }
};

module.exports = roleHarvester;