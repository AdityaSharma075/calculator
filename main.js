var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i = 0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
            if(value == "+" || value == "-" || value == "*" || value == "/" || value == "%"){
                operator = value;
                operand1 = parseFloat(display.textContent);
                display.innerText = " ";
            }else if(value == "="){
                operand2 = parseFloat(display.textContent);
                var ans = eval(operand1 +" " +operator + " " + operand2);
                display.innerText = ans;
            }else if( value == "ac"){
                display.innerText = " ";
            }else{
                display.innerText += value;
            }
    })
}
