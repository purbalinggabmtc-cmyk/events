const API_URL =
"https://script.google.com/macros/s/AKfycbx17qq0wtAR2b6KCwyASYRV6zszcLeDcXVKSmIKP7yJfwlp_Lkeha1e8HBxzrGqVCag/exec";



const form =
document.getElementById("registerForm");



form.addEventListener(
"submit",
async function(e){


e.preventDefault();




// ==========================
// AMBIL INPUT
// ==========================


let nama =
document.getElementById("nama")
.value
.trim();



let whatsapp =
document.getElementById("whatsapp")
.value
.trim();



let pin =
document.getElementById("pin")
.value
.trim();





// ==========================
// VALIDASI WHATSAPP
// ==========================


whatsapp =
whatsapp.replace(
/[^0-9]/g,
""
);




// ubah 08xxxx menjadi 628xxxx

if(
whatsapp.startsWith("0")
){

    whatsapp =
    "62" + whatsapp.substring(1);

}




if(
!/^62[0-9]{9,13}$/.test(whatsapp)
){


alert(
"Nomor WhatsApp tidak valid."
);


return;


}






// ==========================
// VALIDASI PIN
// ==========================


if(
!/^[0-9]{6}$/.test(pin)
){


alert(
"PIN harus 6 angka"
);


return;


}






// ==========================
// DATA KIRIM
// ==========================


const data = {


action:"register",


nama:nama,


whatsapp:whatsapp,


pin:pin,


tipe:"Free Pass",


bayar:"Belum",


merch:"-"


};







try{


const response =

await fetch(

API_URL,

{


method:"POST",


body:

JSON.stringify(data)


}

);






const result =

await response.json();






console.log(result);







if(result.sukses){



localStorage.setItem(

"peserta",

JSON.stringify({

id:result.id,

nama:nama,

whatsapp:whatsapp,

tipe:"Free Pass",

pembayaran:"Belum",

merch:"-",

barcode:result.id

})

);





window.location.href =

"dashboard.html";



}



else{


alert(
result.pesan
);


}



}



catch(error){


console.error(error);


alert(
"Koneksi gagal"
);


}



});
