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


<div>

${item.nama}

<br>

<span>
Qty: ${item.qty}
</span>


</div>



<strong>

Rp${subtotal.toLocaleString()}

</strong>



<button onclick="removeItem(${index})">

×

</button>



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

kupon+" Nomor";



}





function removeItem(index){


cart.splice(index,1);


updateCart();


}
