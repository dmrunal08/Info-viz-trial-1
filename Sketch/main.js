function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(height/2,width/2);
  
  strokeWeight(0.5);
  
  //line(0,0,172,-122);
  //line(0,0,172,122);
  //line(0,0,-172,122);
  //line(0,0,-172,-122);
  
  //line(0,0,-122,-172);
  //line(0,0,-122,172);
  //line(0,0,122,-172);
  //line(0,0,122,172);
  
  for(i=0;i<20;i++)
  {
  stroke('#CE545F');
  line(0,0,172,-122+6*i);
  line(0,0,172,122-6*i);
  line(0,0,-172,122-6*i);
  line(0,0,-172,-122+6*i);
  }//Loop for horizontal rectangle
  
  for(i=0;i<20;i++){
  line(0,0,-122+6*i,172);
  line(0,0,122-6*i,172);
  line(0,0,-122+6*i,-172);
  line(0,0,122-6*i,-172); 
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
  quad(172,0,0,122,-172,0,0,-122);
  quad(0,172,-122,0,0,-172,122,0);//Black quadrilaterals
}


  