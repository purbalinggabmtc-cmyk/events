const user = JSON.parse(
localStorage.getItem("userData")
);



if(!user){

window.location.href="index.html";

}



document.getElementById("nama")
.innerHTML=user.nama;



document.getElementById("id")
.innerHTML=user.id;
