function preload(){
    violinsound=loadSound('Sounds/violin.wav');
  }
  
  function setup() {
    createCanvas(400, 400);
  }
    
  function mouseMoved() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    if(!violinsound.isPlaying())
    {
      violinsound.play();
    }  
  }
  
  
  function draw() {
    background(220);
    translate(height/2,width/2);
    
    strokeWeight(0.5);
    
    for(i=0;i<20;i++)
    {
    stroke('#CE545F');
    curve(0,mouseY,0,0,172,-122+6*i,172,mouseY);
    curve(0,-mouseY,0,0,172,122-6*i,172,-mouseY);
    curve(0,-mouseY,0,0,-172,122-6*i,172,-mouseY);
    curve(0,mouseY,0,0,-172,-122+6*i,172,mouseY);
    }//Loop for horizontal rectangle
    
    for(i=0;i<20;i++){
    curve(0,mouseY,0,0,-122+6*i,172,122,mouseY);
    curve(0,mouseY,0,0,122-6*i,172,-122,mouseY);
    curve(0,-mouseY,0,0,-122+6*i,-172,122,mouseY);
    curve(0,-mouseY,0,0,122-6*i,-172,-122,mouseY); 
    } //Loop for vertical rectangle
    
    line(122,0,122,-172);
    line(122,0,-122,-172);
    
    for(i=0;i<20;i++){
      
      stroke('#434343');
    line(122,0,122-6*i,-172);
      stroke('#3D9B80');
    line(122,0,-122+6*i,-172);//Top quarter from right midpoint
    
      stroke('#434343');
    line(-122,0,-122+6*i,-172);
      stroke('#3D9B80');
    line(-122,0,122-6*i,-172);// Top quarter from left midpoint
      
    stroke('#434343');
    line(122,0,122-6*i,172);
     stroke('#3D9B80'); 
    line(122,0,-122+6*i,172)// Bottom quarter from right midpoint
      
      stroke('#434343');
    line(-122,0,-122+6*i,172);
      stroke('#3D9B80');
    line(-122,0,122-6*i,172);// Bottom quarter from left midpoint
      
      stroke('#434343');
    line(0,122,-172,122-6*i);
      stroke('#3D9B80');
    line(0,122,-172,-122+6*i);// Left from bottom midpoint
    
      stroke('#434343');
    line(0,-122,-172,-122+6*i);
      stroke('#3D9B80');
    line(0,-122,-172,122-6*i);// Left from Top midpoint
      
  
      stroke('#434343'); 
    line(0,122,172,122-6*i);
      stroke('#3D9B80');
    line(0,122,172,-122+6*i);// Right from bottom midpoint
     
    stroke('#434343'); 
    line(0,-122,172,-122+6*i);
      stroke('#3D9B80');
    line(0,-122,172,122-6*i);// Right from top midpoint
    }
    
    
    noFill();
    strokeWeight(1.5);
    stroke('#1F1F1F');
    quad(mouseX,0,0,122,-mouseX,0,0,-122);
    quad(0,mouseY,-122,0,0,-mouseY,122,0);//Black quadrilaterals
  }
  