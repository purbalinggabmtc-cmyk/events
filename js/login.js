const API_URL =
"https://script.google.com/macros/s/URL_ANDA/exec";



const form =
document.getElementById("loginForm");



form.addEventListener(
"submit",
async function(e){


e.preventDefault();



const data = {


action:"login",


whatsapp:

document.getElementById("whatsapp").value.trim(),


pin:

document.getElementById("pin").value.trim()


};





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

JSON.stringify(

result.peserta

)

);





window.location.href =

"dashboard.html";



}

else{


alert(result.pesan);


}



});
