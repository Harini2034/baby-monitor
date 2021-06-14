img = "";
status = "";
objects = [];
song= "";

function preload()
{
   song = loadSound = ("memories.mp3");
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dedecting Baby";
}

function modelLoaded()
{
    console.log("Model Loaded !");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image(video, 0, 0, 380, 380);

    if(status != "")
    {
       r = random(255);
       g = random(255);
       b = random(255);
        objectDetector.detect(video, gotResult);
        for (i = 0;  i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Baby Dedected";

            fill("r, g, b");
            percent = floor(object[i].y, object[i].width, object[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("r, g, b");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}