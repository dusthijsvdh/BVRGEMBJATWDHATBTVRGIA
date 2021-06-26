// Tried to do it dynamicly... But a-frame sucks.
const movementMap =  {
    "m1": {
        x: -20.8, 
        y: -10,
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
}

function move(el) {
    const map = document.getElementById("map");
    const positions = movementMap[`${el.getAttribute("id")}`]
    map.setAttribute("position", positions);
}

AFRAME.registerComponent('movable', {
    init: function () {
        this.el.setAttribute("color", "yellow");

        const cursor = document.getElementById("cursor");

        this.el.addEventListener("mouseenter", function (event) {
            cursor.setAttribute("color", "blue");
        });

        this.el.addEventListener("mouseleave", function (event) {
            cursor.setAttribute("color", "black");
        });

        this.el.addEventListener("click", function (event) {
            const el = event.path[0];
            move(el);
        });
    },
});