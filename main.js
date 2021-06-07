Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:100,
    constraints:{facingMode:"environment"}
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='picture' src='"+data_uri+"'>";
    });    
}

console.log("ml5 version:",ml5.version);

classifier=ml5.imageClassifier("MobileNet",modelloaded);

function modelloaded(){
    console.log("The Model is Loaded");
}

function Identify(){
    img=document.getElementById("picture");
    classifier.classify(img,Gotresult)
}

function Gotresult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("obj_name").innerHTML=results[0].label;
}


}