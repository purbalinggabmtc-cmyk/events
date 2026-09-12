const API_URL =
"https://script.google.com/macros/s/AKfycbxBxxxxxxxxxxxxxxxx/exec";



const form =
document.getElementById("loginForm");




// ==========================
// NORMALISASI WHATSAPP
// ==========================


function formatWhatsApp(number){


    number = number.replace(
        /[^0-9]/g,
        ""
    );



    if(number.startsWith("0")){


        number =
        "62" + number.substring(1);


    }



    return number;


}






form.addEventListener(

"submit",

async function(e){



e.preventDefault();





// ==========================
// AMBIL INPUT
// ==========================


let whatsapp =

document.getElementById("whatsapp")
.value
.trim();




let pin =

document.getElementById("pin")
.value
.trim();






// ==========================
// FORMAT WA
// ==========================


whatsapp =
formatWhatsApp(whatsapp);






// ==========================
// VALIDASI
// ==========================


if(
!/^62[0-9]{9,13}$/.test(whatsapp)
){


alert(
"Nomor WhatsApp tidak valid"
);


return;


}





if(
!/^[0-9]{6}$/.test(pin)
){


alert(
"PIN harus 6 angka"
);


return;


}







// ==========================
// DATA LOGIN
// ==========================


const data = {


action:"login",


whatsapp:whatsapp,


pin:pin


};






console.log(
"LOGIN DATA:",
data
);







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






console.log(
"LOGIN RESULT:",
result
);







if(result.sukses){



localStorage.setItem(

"peserta",

JSON.stringify(

result.peserta

)

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
