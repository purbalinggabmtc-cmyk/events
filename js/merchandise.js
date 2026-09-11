// ==========================
// CART SYSTEM
// ==========================


let cart = [];




// ==========================
// ADD PRODUCT
// ==========================


function addProduct(kode){


    const produk = hargaProduk[kode];


    cart.push({

        nama:produk.nama,

        harga:produk.harga,

        kupon:produk.kupon

    });



    updateCart();


}





// ==========================
// ADD KAOS
// ==========================


function addKaos(){


    const ukuran =
    document.getElementById("ukuran").value;



    const lengan =
    document.getElementById("lengan").value;



    // cek jumlah kaos

    const jumlahKaos = cart.filter(

        item => item.jenis === "kaos"

    ).length;



    if(jumlahKaos >= 3){


        alert(
        "Maksimal pembelian kaos 3 pcs"
        );


        return;

    }





    let harga =

    hargaProduk.kaos.ukuran[ukuran];





    if(lengan === "panjang"){


        harga +=
        hargaProduk.kaos.lenganPanjang;


    }





    cart.push({


        jenis:"kaos",


        nama:

        `Kaos ${ukuran} Lengan ${lengan}`,


        harga:


        harga,


        kupon:

        hargaProduk.kaos.kupon



    });





    updateCart();



}






// ==========================
// UPDATE CART
// ==========================


function updateCart(){



    const cartBox =

    document.getElementById("cart");



    const totalBox =

    document.getElementById("total");



    const kuponBox =

    document.getElementById("kupon");





    if(cart.length === 0){


        cartBox.innerHTML =

        "Belum ada pesanan";


        totalBox.innerHTML =
        "Rp0";


        kuponBox.innerHTML =
        "0";


        return;


    }





    let total = 0;

    let kupon = 0;



    let html = "";





    cart.forEach((item,index)=>{


        total += item.harga;


        kupon += item.kupon;





        html += `


        <div class="cart-item">


            <span>

            ${item.nama}

            </span>


            <strong>

            Rp${item.harga.toLocaleString()}

            </strong>


            <button onclick="removeItem(${index})">

            ×

            </button>


        </div>


        `;



    });





    cartBox.innerHTML = html;



    totalBox.innerHTML =

    "Rp" + total.toLocaleString();



    kuponBox.innerHTML =

    kupon + " Nomor";



}





// ==========================
// REMOVE ITEM
// ==========================


function removeItem(index){


    cart.splice(index,1);


    updateCart();


}
