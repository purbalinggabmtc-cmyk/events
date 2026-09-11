// =====================
// GOOGLE APPS SCRIPT API
// =====================

const API_URL = 
"https://script.google.com/macros/s/AKfycbx17qq0wtAR2b6KCwyASYRV6zszcLeDcXVKSmIKP7yJfwlp_Lkeha1e8HBxzrGqVCag/exec";

const form =
document.getElementById("registerForm");



form.addEventListener(
"submit",
async function(e){


e.preventDefault();



const data = {


action:"register",


nama:
document.getElementById("nama").value.trim(),


whatsapp:
document.getElementById("whatsapp").value.trim(),


pin:
document.getElementById("pin").value.trim(),


tipe:
"Free Pass",


bayar:
"-",


merch:
"-"


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

nama:data.nama,

tipe:data.tipe,

barcode:result.id

})

);





window.location.href =

"dashboard.html";



}



else{


alert(result.pesan);


}



}


catch(error){


console.error(error);


alert(
"Koneksi gagal"
);


}



});
