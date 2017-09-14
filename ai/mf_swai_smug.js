/*
space war units, smuggler AI.

* a smuggler wants to get away from you

 */

var swai_smug = function (v) {

    var s = this;

    v.delta = 1;

    // no target? try to get one
    if (!v.target) {

        v.findTarget(s.enemys);

    }

    // got a target? yeah
    if (v.target) {

        v.updateTarget();

        // move away from the target
        v.followTarget(true);

        // safe
        if (v.dtt > 500) {

            v.delta = .1;

        } else {

            v.delta = (500 - v.dtt) / 500 * 2;

        }

    }

};
