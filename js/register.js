const API_URL = 
"https://script.google.com/macros/s/AKfycbxwBKVNooM6RhXSc2aHW_KZndTjWCD3_5KSdQLId6RosA1gFP5aCeOxNfYAGTDwYncL/exec";



const form =
document.getElementById("registerForm");



form.addEventListener(
"submit",
async function(e){


e.preventDefault();



const data = {


action:"register",


nama:
document.getElementById("nama").value,


whatsapp:
document.getElementById("whatsapp").value,


pin:
document.getElementById("pin").value,


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


console.log(error);


alert(
"Gagal koneksi server"
);


}


});
