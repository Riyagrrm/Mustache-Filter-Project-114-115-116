nose_x = 0
nose_y = 0
function preload()
{
    mustache_img = loadImage("https://i.postimg.cc/P5VcK1Kh/m.png")
}
function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw()
{
    image(video, 0, 0, 300, 300)
    image(mustache_img, nose_x - 15, nose_y, 30, 30)
}
function takeSnapshot()
{
    save("filter.png")
}
function modelLoaded()
{
    console.log("modelLoaded")
}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results)
        nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y
        console.log(nose_x, nose_y)
    }
}