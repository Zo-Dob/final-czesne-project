let texts = ["2000pln", "2200pln", "2400pln", "2800pln","690€"];
let thick = [];
let index = 0;
let stage1 = 1
let xz=200  //stage 1
let yz=330  //stage 1
let t=0

let x=20; // x of button
let y=210; // y of button
  let swpx = 740 //x of whole swps 
  let swpy = 855 // y of whole swps
  let numLines = 30;       // Number of lines
  let radius = 150;  

let angleOffset = 0;

 let rollx = 1026.5
  let rolly = 446.5
  let numLinesRoll = 36; 
  let longRadius = 160; 
  let shortRadius = 145; 

 

function setup() {
  createCanvas(1920, 1080);
 fullscreen(true)
}



function draw() {
  background('#ffffff');
  
  if (stage1==1){
  noStroke()
  fill('#D9D9D9')
  rect(xz, yz, 500, 240, 20);
  rect(xz, yz+290, 500, 240, 20);
  fill('#3498db')
  rect(xz+20, yz+170,230, 40, 30);
  rect(xz+20, yz+460,230, 40, 30);

  
 for(let i=3;i<8;i++){ 
  stroke('#D9D9D9')
  strokeWeight(70)
  point(i*90,200)}
  
  stroke('#3498db')
  point(540,200)
  
  stroke('#D9D9D9')
  fill('#D9D9D9')
  for(let i =0.55; i<6; i++){
  square(970,i*250,120,15)} //x i y, dlugosc boku
    
    for(let i =0.55; i<6; i++){
  square(1210,i*250,120,15)} //x i y, dlugosc boku
    
    for(let i =0.55; i<6; i++){
  square(1450,i*250,120,15)} //x i y, dlugosc boku
  
  fill('#1A1742')
    stroke('#1A1742')
  rect(0,0,1930,30)


    
  push();
   strokeWeight(8)
  stroke('#1A1742')
  for(let i =0; i<40; i++){
  square(i*15,-70,90,)} //x i y, dlugosc boku
    
    for (let i = 0; i < numLinesRoll; i++) {
    let angle = map(i, 0, numLinesRoll, 0, TWO_PI) + angleOffset;
    let radius = (i % 2 === 0) ? longRadius : shortRadius; // Alternate radius
    let x = rollx + cos(angle) * radius;
    let y = rolly + sin(angle) * radius;
    line(rollx, rolly, x, y);
  }
  
  angleOffset += 0.007; // Increment the angle offset to create spinning effect
  pop();
  strokeWeight(110)
  
  stroke('#AA4242')
  fill('#AA4242')
  square(970,390,113,15)
  
  textStyle(BOLD)
  textSize(100)
  noStroke()
  fill('#fff')
  text('$',1000,480)
  
//  if(mouseX>xz && mouseX<xz+113 && mouseY>yz && mouseY<yz+113){
 //   stage1=stage1++
 // }
  
  for (let i = 0; i < numLines; i++) {
    thick.push(random(1, 10));
  }
  
}else if(stage1 == 2){
  
  if (index<5){ //change back to 5!!! ////////////////////////////////////////////////////
    
    stroke('#000')
  fill('#000')
  square(710,80,70)
    
  line(688,78,688,120)
  
  beginShape()
  vertex(680,80)
  vertex(740,60)
  vertex(805,80)
  vertex(740,100)
  vertex(680,80)
  endShape()
  
  stroke('#fff')
  strokeWeight(25)
  circle(745,170,100)
  stroke('#000')
  strokeWeight(7)
  fill('#fff')
  circle(745,170,100) // x,y,size
  
  noStroke()
  fill('#000')
  textSize(50)
  textStyle(BOLD)
  text('$',730,185)
    
  stroke('#1A1742')
  fill('#3498db')
  rect(x, y, 300, 130, 20); // x, y, long, tall, how round 
  noStroke()
  textSize(45);
  fill('#000')
  text('Payment Status:',815,125)
  textSize(60);
  textStyle(BOLD);
  text(texts[index], 815, 195);
  textStyle(NORMAL);
  fill('#ffffff')
  textSize(45);
 // textFont(arlrd)
  text('PAY HERE',x+40,y+80);
  }else{
    stroke('#3498db')
    fill('#e6f2fc')
    strokeWeight(5)
    rect(595,80,840,500,30)
    textSize(40);
    //textAlign(CENTER)
    noStroke()
    fill('#3498db');
    text('Your payment of             will be used for:',670,215)
    textStyle(BOLD);
    textSize(53);
    fill('#027dcf')
    text('690€', 980, 215);
    textStyle(NORMAL)
    fill('#000')
    textSize(35)
    text('not hiring proffesors fluent in english' , 670,325)
    text('not providing materials needed for projects',670,400)
    text('buying overpriced uncomfortable benches ',670,475)
    stroke('#777c85')
    strokeWeight(3)
    
    line(650, 465, 653, 473)
    line(653,473,657,450)
    
    line(650, 390, 653, 398)
    line(653,398,657,370)
    
    line(650, 315, 653, 323)
    line(653,323,657,305)
    
  //  noLoop()
    
    stroke('#000')
    textStyle(NORMAL)
    textSize(55)
    text('SWPS',890,860)
    noStroke()
    textStyle(ITALIC)
    textSize(40)
    text('openness,courage,responsibility',890,910)
    
    stroke('#000')
    strokeWeight(70)
    fill('#fff')
    circle(swpx,swpy,170)

    stroke('#fff')
      for (let i = 0; i < numLines; i++) {
    let angle = map(i, 0, numLines, 0, TWO_PI); // Calculate the angle for each line
    let x = swpx + radius * cos(angle);     // Calculate the x-coordinate of the end point
    let y = swpy + radius * sin(angle);     // Calculate the y-coordinate of the end point
    let thickness = thick[i];// random(1, 10);              // Generate a random thickness for each line (smaller range)
    strokeWeight(thickness);                   // Set the thickness of the line
    line(swpx, swpy, x, y);              // Draw the line
        if (stage1>4){
        t++
        if (t==400){ 
          window.open ("https://activistgames.github.io/startingPoints","_self")
        }
      }
  }
  //  loop()
  }

}

function mouseReleased(){
  

  
    if(stage1==1 &&mouseX>915 && mouseX<1138 && mouseY>335 && mouseY<558){
    stage1=(stage1+1)}
  
  
  if(stage1==2 &&mouseX>x && mouseX<x+300 && mouseY>y && mouseY<y+130){
 // if(mouse pre x && past x && mouse pre y && mouse past y)
  x = random(220,1730);
  y = random(100,980);
  
    //index = (index + 1) % texts.length;
    index = (index + 1) 
    
  }
  
}
