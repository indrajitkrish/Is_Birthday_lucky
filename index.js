var date_of_birth = document.querySelector("#date_of_birth");
var lucky_number = document.querySelector("#lucky_number");
var check_button = document.querySelector("#check");
var output = document.querySelector("#output");

check_button.addEventListener("click",luckyornot);

function luckyornot(){
    var dob=date_of_birth.value;
    var num=lucky_number.value;
    var sum=calculate(dob);
    var sum = sum % num;
    if(sum === 0)
    output.innerHTML = "Your birthday is a Lucky as you 🤩";
    else
    output.innerHTML= "Your birthday is not lucky 😟";
}

function calculate(dob){
    dob = dob.replaceAll("-","");
    var sum=0;
    for(var i=0;i<dob.length;i++)
    {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}