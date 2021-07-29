
var gameState="intro";
var bg1,bg1Img;
var play,playbg;
var button ,buttonImg;

function preload(){
   bg1Img=loadImage("Images/bg1.png");
   buttonImg=loadImage("Images/button2.png");
   playbg=loadImage("Images/playbg2.jpg");
}


function setup(){
createCanvas(windowWidth,windowHeight);
intro=createSprite(windowWidth/2,windowHeight/2,width,height);
intro.addImage(bg1Img);
intro.scale=3.5;

button=createSprite(windowWidth/2,windowHeight/2);
button.addImage(buttonImg);
button.scale=0.9;



}

function draw(){
 background("grey");
 
 
    
       if (gameState==="play"){
        background(playbg);
        intro.visible=false;
        button.visible=false;
         
       }
     drawSprites();
     if(gameState=="intro"){
      //background("white");
      intro.visible=true;
      button.visible=true;
      playbg.visible=false;
      fill(240,230,140);
      textSize(40);
      text("𝓒𝓞𝓡𝓞𝓝𝓐 𝓚𝓘𝓛𝓛𝓔𝓡",windowWidth/2-150,windowHeight/2-250);
     
      fill(255,215,0);
      textSize(40);
      text("𝐂𝐋𝐈𝐂𝐊 𝐓𝐎 𝐏𝐋𝐀𝐘",windowWidth/2-150,windowHeight/2+100);
      fill(60,179,113);
      textSize(50);
      text("ℜ𝔲𝔩𝔢𝔰:-",windowWidth/2-70,windowHeight/2+140);
      fill(233,150,122);
      textSize(50);
     text("𝖘𝖜𝖎𝖕𝖊 𝖙𝖔 𝖒𝖔𝖛𝖊",windowWidth/2-150,windowHeight/2+180);
     fill(224,255,255);
      textSize(40);
     text("𝕿𝖍𝖊𝖎𝖗 𝖆𝖗𝖊 𝖙𝖍𝖗𝖊𝖊 𝖑𝖎𝖛𝖊𝖘 ",windowWidth/2-190,windowHeight/2+220);
     fill(255,228,196);
     textSize(40);
    text(" 𝕴𝖋 𝖞𝖔𝖚 𝖙𝖔𝖚𝖈𝖍 𝖈𝖔𝖗𝖔𝖓𝖆 𝖇𝖆𝖈𝖙𝖊𝖗𝖎𝖆 𝖞𝖔𝖚𝖗 𝖑𝖎𝖛𝖊 𝖜𝖎𝖑𝖑 𝖉𝖊𝖈𝖗𝖊𝖆𝖘𝖊.",windowWidth/2-450,windowHeight/2+260);
     fill(255,192,203);
      textSize(50);
      text("𝖒𝖆𝖉𝖊 𝖇𝖞 𝖒𝖆𝖓𝖆𝖑 𝖟𝖆𝖗𝖊𝖊𝖓",windowWidth/2-250,windowHeight/2+300);
      if(mousePressedOver(button)){
          gameState="play";
      }
      //image(bg1Img,windowWidth/2,windowHeight/2,width,height);
      }
  
     
       }








