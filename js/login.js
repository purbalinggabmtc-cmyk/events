const API_URL =
"https://script.google.com/macros/s/AKfycbxBKVNooM6RhXSc2aHW_KZndTjWCD3_5KSdQLId6RosA1gFP5aCeOxNfYAGTDwYncL/exec";



const form =
document.getElementById("loginForm");



form.addEventListener(
"submit",
async function(e){


e.preventDefault();



console.log("LOGIN BUTTON CLICKED");



const data = {


action:"login",


whatsapp:
document.getElementById("whatsapp").value.trim(),


pin:
document.getElementById("pin").value.trim()


};



console.log("DATA KIRIM:", data);





try{


const response = await fetch(

API_URL,

{

method:"POST",

body:JSON.stringify(data)

}

);




console.log(
"STATUS SERVER:",
response.status
);



const text =
await response.text();



console.log(
"SERVER RESPONSE:",
text
);



const result =
JSON.parse(text);



console.log(
"HASIL LOGIN:",
result
);





if(result.sukses === true){


console.log(
"LOGIN BERHASIL"
);



localStorage.setItem(

"peserta",

JSON.stringify(
result.peserta
)

);




console.log(
"SIMPAN LOCAL STORAGE"
);




window.location.href =
"dashboard.html";



}

else{


alert(result.pesan);


}



}

catch(error){


console.error(
"ERROR LOGIN:",
error
);


alert(
"Koneksi gagal"
);


}



});
