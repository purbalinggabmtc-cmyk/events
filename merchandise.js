const peserta = JSON.parse(

localStorage.getItem("peserta")

);



if(!peserta){


window.location.href =
"index.html";


}





function buyProduct(kode){



const produk =
hargaProduk[kode];




const konfirmasi =
confirm(

`Beli ${produk.nama}
Harga Rp${produk.harga.toLocaleString()}
Mendapat ${produk.kupon} nomor undian`

);



if(konfirmasi){


alert(
"Pesanan dibuat"
);



}



}






function buyKaos(){



const ukuran =

document.getElementById("ukuran").value;



const harga =

hargaProduk.kaos.ukuran[ukuran];





const kupon =

hargaProduk.kaos.kupon;



const konfirmasi =

confirm(

`Kaos ukuran ${ukuran}

Harga Rp${harga.toLocaleString()}

Mendapat ${kupon} nomor undian`

);



if(konfirmasi){


alert(
"Pesanan dibuat"
);


}



}
