// =====================
// GOOGLE APPS SCRIPT API
// =====================
console.log("REGISTER JS AKTIF");

const API_URL = 
"https://script.google.com/macros/s/AKfycbx17qq0wtAR2b6KCwyASYRV6zszcLeDcXVKSmIKP7yJfwlp_Lkeha1e8HBxzrGqVCag/exec";




// =====================
// FORM REGISTER
// =====================


const form = 
document.getElementById("registerForm");




form.addEventListener(
"submit",
async function(e){


    e.preventDefault();



    // Ambil data input

    const nama =
    document.getElementById("nama").value.trim();



    const whatsapp =
    document.getElementById("whatsapp").value.trim();



    const pin =
    document.getElementById("pin").value.trim();





    // Validasi PIN

    if(pin.length !== 6){

        alert(
        "PIN harus 6 angka"
        );

        return;

    }





    // Data dikirim ke Apps Script

    const data = {


        action:"register",


        nama:nama,


        whatsapp:whatsapp,


        pin:pin,


        tipe:"Free Pass",


        bayar:"-",


        merch:"-"


    };





    try {



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


window.location.href =
"login.html";


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

        "Server connection failed"

        );


    }



});
