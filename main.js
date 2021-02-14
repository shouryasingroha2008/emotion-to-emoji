Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    }
    );
}

console.log('ml5 Verion:',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SUuXOBLmR/model.json',modelLoaded);

function modelLoaded(){
    console.log("model loaded!");
}

function speak(){
   var synth=window.speechSynthesis;
    speak_data_1="First predection is "+predection1;
    speak_data_2=" and second predection is "+predection2;
   var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
   synth.speak(utterThis);
}