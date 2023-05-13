status = "";
text = "";

function preload() {  
}

function setup() {
    canvas = createCanvas(360, 270)
    canvas.position(465, 150);

    video = createCapture(VIDEO);
    video.size(360, 270);
    video.hide();
}

function draw() {
    image(video, 0, 0, 360, 270);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    text = document.getElementById("Input_Box").value;

}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
}