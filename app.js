const buyCheck =
document.getElementById("buyCheck");


const purchaseBox =
document.getElementById("purchaseBox");



buyCheck.addEventListener(
"change",
function(){

if(this.checked){

purchaseBox.style.display="block";

}else{

purchaseBox.style.display="none";

}

});
