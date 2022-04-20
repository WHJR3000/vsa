var SR = window.webkitSpeechRecognition;

var r= new SR;


function start()
{

r.start();
}

r.onresult = function(event) {

console.log(event);

var Content= event.results[0][0].transcript;



if(Content=="take my selfie"){


    speak();
}





}
function speak(){
var synth= window.speechSynthesis;

speak_data= "Taking your selfie  in 5 seconds";

var utterthis= new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);

Webcam.attach(camera);

setTimeout(function(){
    snapshot();
    Save();
},5000);



}
camera=document.getElementById("camera");
Webcam.set({
width:200,
height:200,
image_format:'jpeg',
jpeg_quality:100



});
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output1").innerHTML='<img id="Code" src="'+data_uri+'"/>';
        document.getElementById("output2").innerHTML='<img id="CD" src="'+data_uri+'"/>';
        document.getElementById("output3").innerHTML='<img id="MLP" src="'+data_uri+'"/>';
    });

}
function save(){
var link=document.getElementById("whjr");
img=document.getElementById("Code").src
link.href=img;
link.click();


var link=document.getElementById("whjr");
img=document.getElementById("CD").src
link.href=img;
link.click();

var link=document.getElementById("whjr");
img=document.getElementById("Mlp").src
link.href=img;
link.click();
}
















































































