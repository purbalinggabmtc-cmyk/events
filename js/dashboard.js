// =====================
// GET PESERTA DATA
// =====================


const peserta = JSON.parse(

    localStorage.getItem("peserta")

);




// =====================
// CHECK SESSION
// =====================


if(!peserta){


    window.location.href =
    "index.html";


}





// =====================
// DISPLAY NAME
// =====================


document.getElementById("nama")

.innerHTML =

(peserta.nama || "-").toUpperCase();





// =====================
// DISPLAY ID
// =====================


document.getElementById("id")

.innerHTML =

peserta.id || "-";





// =====================
// DISPLAY TYPE
// =====================


document.getElementById("tipe")

.innerHTML =

(peserta.tipe || "FREE PASS").toUpperCase();





// =====================
// GENERATE QR CODE
// =====================


new QRCode(

    document.getElementById("qrcode"),

    {


        text:

        peserta.barcode || peserta.id,


        width:160,


        height:160


    }

);





// =====================
// LOGOUT
// =====================


function logout(){


    localStorage.removeItem(
        "peserta"
    );


    window.location.href =
    "index.html";


}
