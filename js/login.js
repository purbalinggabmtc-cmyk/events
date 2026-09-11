const API_URL =
"https://script.google.com/macros/s/AKfycbx17qq0wtAR2b6KCwyASYRV6zszcLeDcXVKSmIKP7yJfwlp_Lkeha1e8HBxzrGqVCag/exec";



const form =
document.getElementById("loginForm");



form.addEventListener(
"submit",
async function(e){


e.preventDefault();

const whatsapp =
document.getElementById("whatsapp").value.trim();


const pin =
document.getElementById("pin").value.trim();



if(!/^[0-9]+$/.test(whatsapp)){


alert(
"Nomor WhatsApp hanya boleh angka"
);


return;


}



if(!/^[0-9]{6}$/.test(pin)){


alert(
"PIN harus 6 angka"
);


return;


}

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
