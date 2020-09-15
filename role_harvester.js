var roleHarvester = {
    run: function(creep){
        
        var sources = creep.room.find(FIND_SOURCES);
        
        if(creep.carry.energy < creep.carryCapacity){
    
    if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
        creep.moveTo(sources[0]);
    }
}else{
    if(creep.transfer(Game.spawns["S_1"], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
        creep.moveTo(Game.spawns["S_1"]);
    }
}  
    }
};

module.exports = roleHarvester;