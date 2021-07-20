function calculateTip(){
    var billamt =document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople =document.getElementById("peopleamt").value;
    

    if (billamt==="" || serviceQual==0){
        alert("please enter values");
        return;
    }
    if (numOfPeople ==="" || numOfPeople<=1){
        numOfPeople=1;
        document.getElementById("each").style.display ="none";
    }
    else{
        document.getElementById("each").style.display ="block";
    }


    var total=(billamt*serviceQual)/numOfPeople;
    total=Math.round(total);
    document.getElementById("totalTip").style.display ="block";
    document.getElementById("tip").innerHTML=total;

}
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("calculate").onclick = function(){
    calculateTip();
};