var sn;
var feed = [];
var numFood = 8;

var a = [1,2,3];

function setup() {
   createCanvas(740, 480);
    noCursor();
    sn = new Snake();

    for(var i = 0; i < numFood; i++){
        feed.push(new Food(random(width), random(height)));
    }
}


function draw (){
    background(255, 155, 0);
    sn.display();
    
    for(var i = 0; i < feed.length; i++){
        feed[i].display();
    }
}

function mousePressed(){
    sn.eat();
}

function Food(x,y){
    this.x = x;
    this.y = y;
    this.color = color(255, 255, 255);
    this.foodSize = 50;
    
    this.display = function(){
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

function Snake() {
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;
    
    this.getDistance = function(other){
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    }
    
    this.eat = function(){
        for(var i = 0; i < feed.length; i++){
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if(r1 + r2 > d){
                feed.splice(i,1);
            }
        }
    }
    
    this.display = function(){
        x = mouseX;
        y = mouseY;
    
    //SNAKE
    //Snakeface
    noStroke();
    fill('#009999');
    ellipse(x, y, 200, 200); 
    
    //Snakeface
    noStroke();
    fill('#33cc33');
    ellipse(x, y+15, 200, 200);
    
    //SnakeEyeLeft
    fill('#FFFFFF');
    ellipse(x-40, y-26, 50, 50);
    
    //SnakeEyeRight
    fill('#FFFFFF');
    ellipse(x+40, y-26, 50, 50);
    
    //RectangleLeft
    fill('#000000');
    rect(x-60, y-28, 40, 6);
    
    //RectangleRight
    fill('#000000');
    rect(x+20, y-28, 40, 6);
    
    //SnakeTongue
    fill('#ff4000');
        if(mouseIsPressed) {
            rect(x, y+75, 7, 180);
        } else {
            rect(x, y+75, 7, 80);
        }
    
    //TongueTip
    noStroke();
    fill('#ff4000');
        if(mouseIsPressed){
            triangle(x+3, y+235, x-5, y+265, x+12, y+265);   
        } else {
            triangle(x+3, y+135, x-5, y+162, x+12, y+162);    
        }
    }
}

