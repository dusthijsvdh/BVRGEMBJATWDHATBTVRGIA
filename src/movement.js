// Tried to do it dynamicly... But a-frame sucks.
const movementMap =  {
    "m1": {
        x: -20.8, 
        y: -10.5,
        z: -56 
    },
    "m2": {
        x: -20.8, 
        y: -14,
        z: -41 
    },
    "m3": {
        x: -25, 
        y: -18,
        z: -27 
    },
    "m4": {
        x: -25, 
        y: -20,
        z: -11.5 
    },
    "m5": {
        x: -38.5, 
        y: -21.5,
        z: -2.8 
    },
    "m6": {
        x: -32.8, 
        y: -23.5,
        z: 17.4 
    },
    "m7": {
        x: -13.4, 
        y: -31,
        z: 22.2 
    },
    "m8": {
        x: 5, 
        y: -32.5,
        z: 26.2 
    },
    "mJeep": {
        x: -27.489, 
        y: -10.5,
        z: -68.112 
    },
    "m5extra": {
        x: -32.260, 
        y: -22.710,
        z: 0.760 
    },
    "m5extra1": {
        x: -38.630, 
        y: -21.75,
        z: 10.910 
    },
    "m6extra": {
        x: -26.320, 
        y: -25.950,
        z: 19.970 
    },
    "m7extra": {
        x: -6.780, 
        y: -33.220,
        z: 31.610 
    },
    "m8extra": {
        x: 2.880, 
        y: -32.760,
        z: 33.890 
    },
}

function MovementSingleton() {
  if (!MovementSingleton._instance) {
    MovementSingleton._instance = this;
  }
  return MovementSingleton._instance;
}

function move(el) {
    const map = document.getElementById("map");
    const positions = movementMap[`${el.getAttribute("id")}`]
    map.setAttribute("position", positions);

    el.setAttribute("visible", "false");
    if (MovementSingleton().hiddenId) {
        document.getElementById(hiddenId).setAttribute("visible", true);
    }
    MovementSingleton().hiddenId = el.getAttribute("id")
}

AFRAME.registerComponent('movable', {
    init: function () {
        this.el.setAttribute("color", "yellow");

        this.el.addEventListener("click", function (event) {
            const el = event.path[0];
            move(el);
        });
    },
});