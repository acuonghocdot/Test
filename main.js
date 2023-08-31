var ArrayNumber = ["1", "2", "3", "/", "4", "5", "6", " - ", "7", "8", "9", "+", "0", ".", " = ", "*"];
var Sum = "";
var ClassMenuNumber = document.querySelectorAll(".Menu Div");
var DisplayNumber = document.querySelector(".Display p");

ArrayNumber.forEach((a, b) => {
    ClassMenuNumber[b].textContent = a;
    ClassMenuNumber[b].addEventListener("click", HienThiSuKien);
});
function myFunction() {
    Sum = "";
    DisplayNumber.innerHTML = 0;
}
function BatSuKien(cb){
    if(cb.className == "SumValue"){
        SumNumber(Sum);
    }else{
        if(Sum.length > 7){
            DisplayNumber.innerHTML = "Error";
            alert("Bộ Nhớ của Máy Tính Có Hạn Vui Lòng Bấm Resert")
        }
        Sum = (Sum) + String(cb.textContent);
    }
}
function SumNumber(cb){
    Sum = eval(cb)
    Sum = String(Sum)
    DisplayNumber.innerHTML = Sum;
}


function HienThiSuKien() {
    if(DisplayNumber.textContent == String("0")){
        DisplayNumber.innerHTML = this.textContent;
    }else{
        DisplayNumber.innerHTML = DisplayNumber.innerHTML + this.textContent;
    }
    BatSuKien(this)
}





