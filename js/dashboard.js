// =====================
// GET LOGIN SESSION
// =====================


const peserta = JSON.parse(

    sessionStorage.getItem("peserta")

);




// =====================
// CHECK LOGIN
// =====================


if(!peserta){


    window.location.href = "login.html";


}




// =====================
// DISPLAY DATA PESERTA
// =====================


document.getElementById("nama")

.innerHTML =

peserta.nama || "-";




document.getElementById("id")

.innerHTML =

peserta.id || "-";




document.getElementById("tipe")

.innerHTML =

peserta.tipe || "Free Pass";





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
