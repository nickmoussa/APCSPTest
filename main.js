var sq;

function setup() {
   createCanvas(640, 480);
    sq = new Snake();
}

function draw (){
    background(0, 255, 0);
    sq.display();
    
}

function Snake() {
    background('#FFFAED');
    var x = width/4;
    var y = height/2;
    
    var x = mouseX;
    var y = mouseY;
    
    this.get
    
    //PUPPY
    //face
    noStroke();
    fill('#52C5DC');
    ellipse(x, y, 200, 200); 
    
    //nose
    fill('#EFB8D2');
    ellipse(x, y+30, 64, 64);
    
    //eyeLeft
    fill('#FFFFFF');
    ellipse(x+42, y-26, 64, 64);
    
    //pupilLeft
    fill('#7FC35E');
    ellipse (x+42, y-26, 40, 40);
    
    //eyeRight
    fill('#FFFFFF');
    ellipse(x-42, y-26, 64, 64);
    
    //pupilRight
    fill('#7FC35E');
    ellipse(x-42, y-26, 40, 40);
    
    //earLeft
    fill('#52C5DC');
    push();
    translate(x-100,y-80);
    rotate(Math.PI / 4);
    ellipse(0,0, 52, 92);
    pop();
    
    //earRight
    fill('#52C5DC');
    push();
    translate(x+100,y-80);
    rotate(-Math.PI / 4);
    ellipse(0,0, 52, 92);
    pop();
    
    //tongue
    fill('#EE3E36');
    arc(x-20, y+80, 40, 70, 0, PI+QUARTER_PI, CHORD);
    
    //SNAKE
    //Snakeface
    noStroke();
    fill('#009999');
    ellipse(x+300, y, 200, 200); 
    
    //Snakeface
    noStroke();
    fill('#33cc33');
    ellipse(x+300, y+15, 200, 200);
    
    //SnakeEyeLeft
    fill('#FFFFFF');
    ellipse(x+342, y-26, 50, 50);
    
    //SnakeEyeRight
    fill('#FFFFFF');
    ellipse(x+260, y-26, 50, 50);
    
    //RectangleLeft
    fill('#000000');
    rect(x+322, y-28, 40, 6);
    
    //RectangleRight
    fill('#000000');
    rect(x+239, y-28, 40, 6);
    
    //SnakeTongue
    fill('#ff4000');
    rect(x+296, y+75, 7, 80);
    
    //TongueTip
    noStroke();
    fill('#ff4000');
    triangle(460, 390, 450, 400, 470, 400);
    
}

