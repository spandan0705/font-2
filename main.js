leftWristX=0;
leftWristY=0;
difference=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(500, 500);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses); 
}


function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
        console.log("left wrist X = "+ leftWristX+ "right Wrist X = "+ rightWristX +"difference = "+difference);
    }
}

function draw()
{
    background('#6C91C2');

    textSize(difference);
    fill('FFE787');
    text('Spandan',50 ,400);
}