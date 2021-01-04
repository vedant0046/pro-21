var wall,thickness;
var bullet,speed,weight;

function setup() {
    createCanvas(1600,400);

    speed = random(223,321)
    weight = random(30,52)

    thickness = random(22,83)

    bullet=createsprite(50,200,50,5);
    bullet.velocityX = speed;
    bullet.shapeColour=colour(255);

    wall=createsprite(1200,200,thickness,height/2);
    wall.shapeColour=colour(230,230,230);
    //wall.shapeColour=colour(80,80,80);
}
function draw() {
background(0);
//bullet.sprite.collide(wall.sprite,calculateDeformation)
if(hasCollided(bullet,wall))
{
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if(damage>10)
    {
        wall.shapeColour=colour(255,0,0);

    }

    if(damage<10)
    {
        wall.shapeColour=colour(0,255,0);
    }

}


drawSprites();


}

function hasCollided(bullet ,wall)
{
        bulletRightEdge=bullet.x+bullet.width;
        wallleftEdge=wall.x
        if(bulletRightEdge>=wallleftEdge)
        {
            return true
        }
        return false;
}