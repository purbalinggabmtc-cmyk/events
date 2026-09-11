const peserta = JSON.parse(

localStorage.getItem("peserta")

);



if(!peserta){


window.location.href =
"index.html";


}





document.getElementById("nama")

.innerHTML =

peserta.nama || "-";





document.getElementById("id")

.innerHTML =

peserta.id || "-";





document.getElementById("tipe")

.innerHTML =

peserta.tipe || "Free Pass";





new QRCode(

document.getElementById("qrcode"),

{


text:

peserta.barcode,


width:160,


height:160


}

);
