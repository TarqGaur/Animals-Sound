function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifer("https://teachablemachine.withgoogle.com/models/oLotgomiF/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}