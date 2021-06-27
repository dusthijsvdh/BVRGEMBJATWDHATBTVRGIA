AFRAME.registerComponent('soundable', {
    init: function () {
        const cursor = document.getElementById("cursor");
        const elementodes= this.el

        this.el.addEventListener("mouseenter", function (event) {
            cursor.setAttribute("color", "blue");
            console.log(elementodes.components.sound)
            if (elementodes.components.sound.firstTime || elementodes.components.sound.firstTime == undefined) {
                elementodes.components.sound.stopSound();
                elementodes.components.sound.firstTime = false;
            }
        });

        this.el.addEventListener("mouseleave", function (event) {
            cursor.setAttribute("color", "black");
        });

        this.el.addEventListener("click", function (event) {
            if (!elementodes.components.sound.isPlaying) {
                console.log("aaaaaaaaaaaaaaaaaa")
                elementodes.components.sound.playSound();
            }
        });
    },
});