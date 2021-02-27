canvas = document.getElementById("myCanvas");

imagearray = ["mars.jpg","Mars 1.jpg","Mars 2.jpg","Mars 3.jpg"];
random_number = Math.floor(Math.random()*4);
background_image = imagearray [random_number];

var ctx = canvas.getContext("2d");

rover_image = "rover.png";
function add(){
    bgobject = new Image();
    bgobject.onload = uploadbackground ;
    bgobject.src= background_image ;

    roverobject = new Image();
    roverobject.onload = uploadrover ; 
    roverobject.src = rover_image ;
}

function uploadbackground(){
    ctx.drawImage(bgobject,0,0,canvas.width,canvas.height);
}
rover_x = 10;
rover_y = 10;
function uploadrover(){
    ctx.drawImage(roverobject,rover_x,rover_y,100,100);
}


window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);


if(keypressed == "37"){
    left();
    console.log("left is pressed");
}

if(keypressed == "38"){
    up();
    console.log("up is pressed");
}

if(keypressed == "39"){
    right();
    console.log("right is pressed");
}

if(keypressed == "40"){
    down();
    console.log("down is pressed");
}
}

function right(){
    if(rover_x<700){
        rover_x = rover_x + 10;
        uploadbackground() ;
        uploadrover();
    }
}

function left (){
    if(rover_x>0){
        rover_x = rover_x - 10;
        uploadbackground() ;
        uploadrover();
    }
}

function up (){
    if(rover_y>0){
        rover_y = rover_y - 10;
        uploadbackground() ;
        uploadrover();
    }
}

function down(){
    if(rover_y<400){
        rover_y = rover_y + 10;
        uploadbackground() ;
        uploadrover();
    }
}


