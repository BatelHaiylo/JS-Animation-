var intervalid;
var grow = 0  

function elementHeightGrowwer(){
    var heightGro =document.getElementById("grow_height")
    heightGro.style.height = grow++ +"px"
}
elementHeightGrowwer()

function startElementHeightGrowwer(){
    intervalid = setInterval(()=>{
        elementHeightGrowwer()}, 300)
}

function pauesElementHeightGrowwer(){
    clearInterval(intervalid)
}

function keyStopElementHeightGrowwer(e){
    console.log(e.key)
    if(e.key == "Enter"){
        pauesElementHeightGrowwer() 
    }
}

var colorArr =  ["blue","blueviolet","chartreuse","deeppink","black","cornflowerblue","crimson","darkgreen","cyan","darkorange"]
function changeColor(){
    var rndNumRange = Math.floor(Math.random()*10)
    document.getElementById("disco_ball").style.backgroundColor = colorArr[rndNumRange]
}

function letTheDiscoLive(){
    intervalid = setInterval(()=>{
        for(i=0; i<colorArr.length; i++){
            changeColor()}
    },10)
}

function userDesignedElement(){
    var selectedHight = document.getElementById("input_height").value
    var selectedWidth = document.getElementById("input_width").value
    document.getElementById("user_element").innerHTML =
     "<div style='height:"+ selectedHight+"vh; width:"+selectedWidth+ "vw; border:5px groove salmon; border-radius: 30vh;'"+"></div>"
}

function createUserElement(){
    intervalid = setInterval(()=>{
        userDesignedElement()
    },10)
}

var userColor = document.getElementById("color_input")
var userWords = document.getElementById("name_input")

var generateBtn = document.getElementById("createSong")
var saveBtn = document.getElementById("saveUserChoise")
var coloredText = document.getElementById("colorful_paragraph")

var colorContainerArr = [];
var linesContainerArr = [];

// function get5InputsFromUser(){
//     for (let i = 0; 5 > colorContainerArr.length; i++) {
//         // userColor.style.visibility = "visible";
//         colorContainerArr.push(userColor.value)
//         linesContainerArr.push(userWords.value)
//     }
//     getColorfulParagraph()
//     // generateBtn.disabled = "true"
// }

// function getColorfulParagraph(){
//     var i =0;
//     while(i<colorContainerArr){

//         coloredText.innerText = linesContainerArr[i]
//         coloredText.style.color = colorContainerArr[i]
//     }
//     i++
// }

function getUserChoice(){
    colorContainerArr.push(userColor.value)
    linesContainerArr.push(userWords.value)
    userColor.value =""
    userWords.value = ""
    console.log(colorContainerArr)
    console.log(linesContainerArr)
    if(colorContainerArr.length && linesContainerArr.length ==5){
        saveBtn.disabled = "true"
    }
}

function getRandomColorText(colorArray,someElement){
    var rndNumRange = Math.floor(Math.random()*colorArray.length)
    someElement.style.color = colorArray[rndNumRange]
}
generateBtn.accessKeyLabel("click",()=>{getRandomColorText(colorContainerArr,coloredText)})

