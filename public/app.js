
var slider = $("#vol-slider");


var vol = $("#vol-lvl");
slider.ready(() => {
    vol.text(`Master Volume: ${slider.val()}`);
    slider.on("input", () => {
        var volume = slider.val();
        vol.text(`Master Volume: ${slider.val()}`);
    $("button").on("click", () => {
        vol.text(`Master Volume: ${slider.val()}`);
    });
        // volumeList.push(volume);
        // console.log(volumeList);
        // return volumeList;
    });
});

// console.log("Waiting...");


// Webserver notes

// Maybe send slider.value using eventEmitter
// Send value to GPIO and map the slider value to the servos range

// Questions

// What is receiving the value?
// Website updates it, server recognizes/is told, adjust GPIO accordingly

