
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
if(keyDown("up"))
{
  background('red');
}
if(keyDown("down"))
{
  background('blue');
}

if(keyDown("right"))
{
  background('green');
}

if(keyDown("left"))
{
  background('yellow');
}

}




