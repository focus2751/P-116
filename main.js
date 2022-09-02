moustacheX = 0;
moustacheY = 0;

function preload()
{clown_nose = loadImage('https://i.postimg.cc/P54yxckC/moochie-number-1.png')}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        moustacheX= results[0].pose.moustache.x;
        moustacheY = results[0].pose.moustache.y;
    }

}

function draw()
{
     image(video, 0, 0, 400, 300);
     image(clown_nose, moustacheX, moustacheY, 30, 30);
}

function take_snapshot()
{
    save('myFilterImage.png');
}