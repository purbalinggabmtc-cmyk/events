const peserta = JSON.parse(

localStorage.getItem("peserta")

);



if(!peserta){


window.location.href =
"index.html";


}





document.getElementById("nama")

.innerHTML =

(peserta.nama || "-").toUpperCase();





document.getElementById("id")

.innerHTML =

peserta.id || "-";





document.getElementById("tipe")

.innerHTML =

(peserta.tipe || "FREE PASS").toUpperCase();





document.getElementById("payment")

.innerHTML =

(peserta.pembayaran || "NOT PURCHASED").toUpperCase();





new QRCode(

document.getElementById("qrcode"),

{


text:

peserta.barcode || peserta.id,


width:160,


height:160


}

);






function logout(){


localStorage.removeItem(
"peserta"
);



window.location.href =
"index.html";


}
