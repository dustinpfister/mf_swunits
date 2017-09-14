/*
space war units, stumpy AI.

 */

var swai_side = function (v) {

    var s = this,
    p;

    // default to max delta
    v.delta = v.maxD;
    //v.yaw = 0;

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

            p = v.dtt / 150;
            v.delta = p * v.maxD;

            // random yaw amounts
            v.yaw += Math.random() * .7 - .35;

            // full stop if very close
            if (v.dtt < 75) {

                v.delta = 0;
                //v.yaw = 0;

            }

        }

        // always shoot for now
        v.shoot();

    }

};
