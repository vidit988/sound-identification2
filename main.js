function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true

    })
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cTIZ-4bHy/model.json',modelReady)
}
function modelReady(){
    console.log('working')
    classifier.classify(gotResults)
}
function gotResults(err,result){

}
//https://teachablemachine.withgoogle.com/models/MALTfjOFG/