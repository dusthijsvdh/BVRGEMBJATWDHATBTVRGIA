AFRAME.registerComponent('soundable', {
    init: function () {
        const cursor = document.getElementById("cursor");
        const elementodes= this.el

        this.el.addEventListener("mouseenter", function (event) {
            cursor.setAttribute("color", "blue");
        });

        this.el.addEventListener("mouseleave", function (event) {
            cursor.setAttribute("color", "black");
        });

        this.el.addEventListener("click", function (event) {
            elementodes.components.sound.playSound();
        });
    },
});