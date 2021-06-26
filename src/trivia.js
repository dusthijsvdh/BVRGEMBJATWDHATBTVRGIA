const triviaMap = {
    "t1": {
        text: "Informatie over deze eerste kut boom"
    },
    "t2": {
        text: "Informatie over de tweede (en voor nu laatste) kut boom"
    }
}

function createTextFor(parent) {
    const text = document.createElement("a-text");
    const camera = document.getElementById("camera");

    const cameraRotation = Math.abs(camera.getAttribute("rotation").y %= 360);
    const cameraDirection = Math.round(cameraRotation / 90);

    let x = 0;
    let z = 0;
    let rotation = 0;

    if (cameraDirection == 0 || cameraDirection == 4) {
        z = -1;
        rotation = 180;
    } else if (cameraDirection == 1) {
        x = -1;
        rotation = 270;
    } else if (cameraDirection == 2) {
        z = 1;
        rotation = 360;
    } else {
        x = 1;
        rotation = 90;
    }

    text.setAttribute("value", triviaMap[`${parent.getAttribute("id")}`].text);
    text.setAttribute("color", "#fff");
    text.setAttribute("position", `${x} 0 ${z}`);
    text.setAttribute("geometry", "primitive: plane; width: auto; height: auto;");
    text.setAttribute("material", "color: #333");
    text.setAttribute("visible", "true");
    text.setAttribute("align", "center");
    text.setAttribute("rotation", `0 ${rotation} 0`);

    return text;
}

AFRAME.registerComponent('trivia', {
    init: function () {
        this.el.addEventListener("mouseenter", function (event) {
            console.log("Deze console.log() laat ik er speciaal in zitten voor de docenten...");
            const parent = event.path[0];
            parent.appendChild(createTextFor(parent));
        });

        this.el.addEventListener("mouseleave", function (event) {
            const parent = event.path[0];
            parent.removeChild(parent.firstChild)
        });
    },
});
