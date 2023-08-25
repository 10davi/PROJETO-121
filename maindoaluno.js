


function ???() // nome da função de quando o botão iniciar é clicado
{
    recognition.start();
} 
 
recognition.onresult = function(event) {

 

 Content = event.results[0][0].transcript.toLowerCase();
   console.log(Content);
   if (Content == "????") { // Palavra 'selfie'
    speak();
    }

}


function ???(){ //nome da função da linha 18
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speakData = "      s";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);


    ???(function() // método que define um cronômetro que executa uma função ou trecho de código especificado assim que o cronômetro acabar.
    { 
        imgId = "selfie1";
        takeSelfie(); 
        speakData = "Tirando sua selfie em 10 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);

      }, 5000);

    ???(function() // método que define um cronômetro que executa uma função ou trecho de código especificado assim que o cronômetro acabar
    { 
        imgId = "selfie2";
        takeSelfie(); 
        speakData = "Tirando sua selfie em 15 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
        
    }, 10000);

    ???(function() // método que define um cronômetro que executa uma função ou trecho de código especificado assim que o cronômetro acabar
    { 
        imgId = "selfie3";
        takeSelfie(); 

    }, 15000);

}

 
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function takeSelfie()
{
    console.log(imgId);
    
    Webcam.snap(function(data_uri) {
        if(imgId=="selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(imgId=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(imgId=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}
