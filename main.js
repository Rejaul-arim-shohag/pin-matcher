//Pin generate function 
document.getElementById("generate-pin").addEventListener("click", function(){
    const randomNumber = Math.random()*10000+"";
    const randomNumberSplit = randomNumber.split(".", 1);
    document.getElementById("generated-pin").value = randomNumberSplit;
});
//pin input function
document.getElementById("button").addEventListener("click", function(event){
    const btnValue = event.target.innerText;
    const inputVale = document.getElementById("input-pin").value;
    if(btnValue=="C"){
        document.getElementById("input-pin").value = '';
    }
    else if(btnValue=="<"){
        document.getElementById("input-pin").value = inputVale.slice(0, inputVale.length-1)
    } 
    else if(btnValue=="Submit"){
        const generatedPin = document.getElementById("generated-pin").value;
        const inputedPin = document.getElementById("input-pin").value;
        if(generatedPin==inputedPin){
            document.getElementById("match").style.display = "block"
            document.getElementById("notMatch").style.display = "none"
        }
        else{
            document.getElementById("notMatch").style.display = "block"
            document.getElementById("match").style.display = "none"
        }
    }
    else{
        document.getElementById("input-pin").value = inputVale+btnValue
    }
});




