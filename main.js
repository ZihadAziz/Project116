noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/Mp2fPKcx/download-3-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", gotPoses);
}

function ModelLoaded() {
    console.log("Initiziled!");
}

function draw() {
image(video, 0, 0, 400, 400);
image(clown_nose, noseX - 15, noseY - 5, 30, 30)
}

function take_snapshot() {
    save('Snapshot.png')
}

function gotPoses(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(results);
        console.log(results[0].pose.nose.x)
        console.log(results[0].pose.nose.y)
    }
}
