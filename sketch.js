var ball,database,pos;

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red"; 
    var nodeRef=database.ref("ball/positions")
    nodeRef.on("value",readdata)
}

function draw(){
    background("white");
    if(pos !==undefined){
    if(keyDown(LEFT_ARROW)){
       writedata(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
       writedata(1,0);
    }
    else if(keyDown(UP_ARROW)){
       writedata(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
       writedata(0,+1);
    }
}
    drawSprites();
}

function writedata(x,y){
    database.ref("ball/positions").set({
       x : pos.x + x,
    y : pos.y + y
    })
    
}
function readdata(data){
    pos=data.val()
    ball.x=pos.x
    ball.y=pos.y
}