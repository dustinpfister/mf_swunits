/*
space war units, stumpy AI.

 */

var swai_stumpy = function (v) {

    var s = this;

    // default to max delta
    v.delta = v.maxD;

    // no target? try to get one
    if (!v.target) {

        v.findTarget(s.enemys);

    }

    // got a target? yeah
    if (v.target) {

        v.updateTarget();

        // far away? move to the target
        v.followTarget();

        // slow down if close
        if (v.dtt < 150) {

            v.delta = v.dtt / 150 * v.maxD;

            // full stop if very close
            if (v.dtt < 75) {

                v.delta = 0;

            }

        }

        // always shoot for now
        v.shoot();

    }

};
