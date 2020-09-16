var roleClaimer = {
    run: function (creep) {
        var reached = creep.memory.destReached;
        if (!reached) {
            if (creep.moveTo(Game.flags.E_Flag) == -11) {
                creep.memory.destReached = true;
            }
        }


        if (reached) {
            if (creep.room.controller) {
                console.log(creep.claimController(creep.room.controller));
                if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }
    }
};

module.exports = roleClaimer;