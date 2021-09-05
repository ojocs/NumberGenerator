var min = 0, max = 1, number = 0;

function randomNum(){
    min = document.getElementById("min").value;
    max = document.getElementById("max").value;
    number = Math.random() * (max - min) + min;
    number = Math.random() < 0.5 ? Math.floor(number) : Math.ceil(number);
    if(number == null){
        number = "Bad Input";
    }
    document.getElementById("answer").innerHTML = number;
}
