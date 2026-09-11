const buyCheck =
document.getElementById("buyCheck");


const purchaseBox =
document.getElementById("purchaseBox");



buyCheck.addEventListener(
"change",
function(){

    if(this.checked){

        purchaseBox.style.display="block";

    }else{

        purchaseBox.style.display="none";

    }


    hitungTotal();

});




// tampilkan harga awal

document.getElementById("prostSubtotal")
.innerHTML =
rupiah(hargaProduk.prostBeer.harga);


document.getElementById("laBoldSubtotal")
.innerHTML =
rupiah(hargaProduk.laBold16.harga);





function rupiah(value){

    return "Rp" +
    value.toLocaleString("id-ID");

}





function hitungTotal(){


    let total = 0;

    let jumlahKupon = 0;



    // Prost Beer

    let prostQty =
    Number(
        document.getElementById("prostQty").value
    );


    let prostSubtotal =
    prostQty *
    hargaProduk.prostBeer.harga;



    document.getElementById("prostSubtotal")
    .innerHTML =
    rupiah(prostSubtotal);



    total += prostSubtotal;


    jumlahKupon +=
    prostQty *
    hargaProduk.prostBeer.kupon;





    // LA Bold

    let laBoldQty =
    Number(
        document.getElementById("laBoldQty").value
    );


    let laBoldSubtotal =
    laBoldQty *
    hargaProduk.laBold16.harga;



    document.getElementById("laBoldSubtotal")
    .innerHTML =
    rupiah(laBoldSubtotal);



    total += laBoldSubtotal;


    jumlahKupon +=
    laBoldQty *
    hargaProduk.laBold16.kupon;





    // Kaos

    document
    .querySelectorAll(".kaos-row")
    .forEach(row=>{


        let ukuran =
        row.querySelector(".ukuran").value;


        let sleeve =
        row.querySelector(".sleeve").value;


        let qty =
        Number(
        row.querySelector(".kaosQty").value
        );



        if(
            ukuran !== ""
            &&
            sleeve !== ""
        ){


            let harga =
            hargaProduk
            .kaos
            .ukuran[ukuran];



            if(
                sleeve === "panjang"
            ){

                harga +=
                hargaProduk
                .kaos
                .lenganPanjang;

            }



            let subtotal =
            harga * qty;



            row.querySelector(".subtotal")
            .innerHTML =
            rupiah(subtotal);



            total += subtotal;


            jumlahKupon +=
            qty *
            hargaProduk
            .kaos
            .kupon;



        }


    });




    document.getElementById("total")
    .innerHTML =
    rupiah(total);



    document.getElementById("jumlahKupon")
    .innerHTML =
    jumlahKupon;


}




document
.getElementById("prostQty")
.addEventListener(
"input",
hitungTotal
);



document
.getElementById("laBoldQty")
.addEventListener(
"input",
hitungTotal
);



document
.querySelectorAll(".sleeve,.ukuran,.kaosQty")
.forEach(el=>{

    el.addEventListener(
    "change",
    hitungTotal
    );

    el.addEventListener(
    "input",
    hitungTotal
    );

});
