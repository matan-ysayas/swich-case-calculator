const numInput=document.getElementById("numInput");
const resultBut=document.getElementById("resultBut");
const clearBut=document.getElementById("clearBut");
const numBtn=document.getElementsByClassName("numBtn");
const operators=document.getElementsByClassName("operators");

for(let i=0;i<numBtn.length;i++){
    numBtn[i].onclick=()=>{
     numInput.value+=numBtn[i].innerHTML;

    }
};

for(let i=0;i<operators.length;i++){
    operators[i].onclick=()=>{
        switch (operators[i].innerHTML) {
            case "+":
                numInput.value+="+"
                break;
        
            case "-":
                numInput.value+="-"
                break;
        
            case "/":
                numInput.value+="/"
                break;
        
            case "*":
                numInput.value+="*"
                break;

            case "clear":
                numInput.value=" "
                break;
        
            default:
                break;
        }
    }
};



resultBut.onclick=()=>{

   numInput.value=eval(numInput.value)
}




