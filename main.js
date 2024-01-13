Webcam.set({

    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("camera")

Webcam.attach("#camera")

function take_snapshot(){
 
    Webcam.snap(
       function(data_uri){
           document.getElementById("result").innerHTML = '<img id="snap" src="'+data_uri+'" />'
       }
    )
       
   }
   
   console.log("ml5 version :" , ml5.version)
   
   classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json" , modelLoaded)
   
   function modelLoaded(){
       console.log("Model Loaded")
   }
   
   function speak(){
       var synth = window.speechSynthesis;
       dialog_1 = "The first prediction is "+prediction_1
       dialog_2 = "The second prediction is "+prediction_2
       var utterthis = new SpeechSynthesisUtterance(dialog_1+dialog_2)
       synth.speak(utterthis)
   }