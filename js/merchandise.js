const API_URL =
"https://script.google.com/macros/s/AKfycbx17qq0wtAR2b6KCwyASYRV6zszcLeDcXVKSmIKP7yJfwlp_Lkeha1e8HBxzrGqVCag/exec";



let cart = [];


// =========================
// ADD PRODUCT
// =========================


function addProduct(kode){


const produk =
hargaProduk[kode];



let qty = 1;



if(kode==="prostBeer"){


qty =
parseInt(
document.getElementById("qtyProst").value
);


}


if(kode==="laBold16"){


qty =
parseInt(
document.getElementById("qtyLaBold").value
);


}





const existing =
cart.find(
item=>item.nama===produk.nama
);




if(existing){


existing.qty += qty;


}

else{


cart.push({


nama:produk.nama,


harga:produk.harga,


qty:qty,


kupon:produk.kupon


});


}



updateCart();



}





// =========================
// ADD KAOS
// =========================


function addKaos(){



const ukuran =
document.getElementById("ukuran").value;



const lengan =
document.getElementById("lengan").value;



const qty =
parseInt(
document.getElementById("qtyKaos").value
);





const jumlahKaos =

cart.filter(
item=>item.jenis==="kaos"
)

.reduce(

(total,item)=>

total+item.qty,

0

);





if(
jumlahKaos + qty > 3
){


alert(
"Maksimal pembelian kaos 3 pcs"
);


return;

}





let harga =
hargaProduk.kaos.ukuran[ukuran];



if(lengan==="panjang"){


harga +=
hargaProduk.kaos.lenganPanjang;


}





const nama =

`Kaos ${ukuran} Lengan ${lengan}`;





const existing =

cart.find(

item=>

item.nama===nama

);





if(existing){


existing.qty += qty;


}

else{


cart.push({


jenis:"kaos",


nama:nama,


harga:harga,


qty:qty,


kupon:hargaProduk.kaos.kupon


});


}



updateCart();



}






// =========================
// UPDATE CART
// =========================


function updateCart(){



const cartBox =
document.getElementById("cart");



let total=0;

let kupon=0;



let html="";





cart.forEach((item,index)=>{



let subtotal =
item.harga *
item.qty;



total += subtotal;



kupon +=
item.kupon *
item.qty;





html += `

<div class="cart-item">


<div class="cart-info">


<div class="cart-name">

${item.nama}

</div>


<div class="cart-qty">

Qty: ${item.qty}

</div>


</div>




<div class="cart-right">


<strong>

Rp${subtotal.toLocaleString()}

</strong>



<button 
class="remove-btn"
onclick="removeItem(${index})">

×


</button>


</div>


</div>

`;


});





cartBox.innerHTML =

html ||

"Belum ada pesanan";





document.getElementById("total")

.innerHTML =

"Rp"+total.toLocaleString();





document.getElementById("kupon")

.innerHTML =

"+" + kupon;


}





function removeItem(index){


cart.splice(index,1);


updateCart();


}


// ==========================
// CHECKOUT
// ==========================


async function checkout(){



    if(cart.length === 0){


        alert(
            "Belum ada pesanan"
        );


        return;


    }





    const peserta = JSON.parse(

        localStorage.getItem("peserta")

    );





    if(!peserta){


        alert(
            "Silakan login kembali"
        );


        window.location.href =
        "index.html";


        return;


    }







    let total = 0;


    let kupon = 0;


    let detail = [];





    cart.forEach(item => {



        total +=

        item.harga * item.qty;





        kupon +=

        item.kupon * item.qty;





        detail.push(

            `${item.nama} x${item.qty}`

        );



    });







    const konfirmasi = confirm(


        `Konfirmasi Pembelian\n\n` +

        detail.join("\n") +

        `\n\nTotal: Rp${total.toLocaleString()}` +

        `\nLucky Draw: +${kupon}`


    );






    if(!konfirmasi){


        return;


    }







    const data = {


        action:"checkout",


        id:peserta.id,


        merch:detail.join(", "),


        total:total,


        kupon:kupon


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






       const text =
await response.text();


console.log(
"SERVER RESPONSE:",
text
);


const result =
JSON.parse(text);






        console.log(

            "CHECKOUT RESULT",

            result

        );







        if(result.sukses){



            alert(

                "Checkout berhasil"

            );





            cart = [];



            updateCart();





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

            "Checkout gagal"

        );



    }



}
