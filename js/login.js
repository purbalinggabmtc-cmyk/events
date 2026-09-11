const API_URL = 
"https://script.google.com/macros/s/AKfycbxwBKVNooM6RhXSc2aHW_KZndTjWCD3_5KSdQLId6RosA1gFP5aCeOxNfYAGTDwYncL/exec";



const form = document.getElementById("loginForm");



form.addEventListener(
"submit",
async function(e){


    e.preventDefault();



    const data = {

        action:"login",

        whatsapp:
        document.getElementById("loginWhatsapp").value.trim(),

        pin:
        document.getElementById("loginPin").value.trim()

    };



    try{


        const response = await fetch(

            API_URL,

            {

                method:"POST",

                body:
                JSON.stringify(data)

            }

        );



        const text = await response.text();


        console.log(
            "SERVER RESPONSE:",
            text
        );



        const result = JSON.parse(text);



        console.log(
            "LOGIN RESULT:",
            result
        );





        if(result.sukses){



            sessionStorage.setItem(

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


        console.error(
            error
        );


        alert(
            "Koneksi gagal"
        );


    }



});
