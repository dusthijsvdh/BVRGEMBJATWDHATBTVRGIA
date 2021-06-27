AFRAME.registerComponent('clickable', {
    init: function () {
        const cursor = document.getElementById("cursor");

        this.el.addEventListener("mouseenter", function (event) {
            cursor.setAttribute("color", "blue");
        });

        this.el.addEventListener("mouseleave", function (event) {
            cursor.setAttribute("color", "black");
        });
    },
});
