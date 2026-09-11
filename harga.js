<script> src="harga.js" </script>

<script>

const buyCheck = document.getElementById("buyCheck");
const purchaseBox = document.getElementById("purchaseBox");


buyCheck.addEventListener("change",()=>{

    purchaseBox.style.display =
    buyCheck.checked
    ?
    "block"
    :
    "none";

});



function rupiah(value){

    return "Rp" + value.toLocaleString("id-ID");

}




function hitungTotal(){


    let total = 0;

    let jumlahKupon = 0;



    let prostQty =
    Number(document.getElementById("prostQty").value);



    let laBoldQty =
    Number(document.getElementById("laBoldQty").value);




    let prost =
    prostQty *
    hargaProduk.prostBeer.harga;



    let laBold =
    laBoldQty *
    hargaProduk.laBold16.harga;




    document.getElementById("prostSubtotal")
    .innerHTML =
    rupiah(prost);



    document.getElementById("laBoldSubtotal")
    .innerHTML =
    rupiah(laBold);




    total += prost;

    total += laBold;



    jumlahKupon +=
    prostQty *
    hargaProduk.prostBeer.kupon;



    jumlahKupon +=
    laBoldQty *
    hargaProduk.laBold16.kupon;





    document.querySelectorAll(".kaos-row")
    .forEach(row=>{


        let sleeve =
        row.querySelector(".sleeve").value;



        let ukuran =
        row.querySelector(".ukuran").value;



        let qty =
        Number(
            row.querySelector(".kaosQty").value
        );



        let subtotalBox =
        row.querySelector(".subtotal");





        if(
            (sleeve==="pendek" ||
             sleeve==="panjang")
            &&
            ukuran
        ){



            let harga =
            hargaProduk
            .kaos
            .ukuran[ukuran];



            if(
                sleeve==="panjang"
            ){

                harga +=
                hargaProduk
                .kaos
                .lenganPanjang;

            }




            let subtotal =
            harga * qty;



            subtotalBox.innerHTML =
            rupiah(subtotal);



            total += subtotal;



            jumlahKupon +=
            qty *
            hargaProduk
            .kaos
            .kupon;



        }else{


            subtotalBox.innerHTML =
            "Rp0";


        }



    });




    document.getElementById("total")
    .innerHTML =
    rupiah(total);



    document.getElementById("jumlahKupon")
    .innerHTML =
    jumlahKupon;



}







function aktifkanUkuran(element){


    let row =
    element.closest(".kaos-row");


    let ukuran =
    row.querySelector(".ukuran");


    let qty =
    row.querySelector(".kaosQty");


    let subtotal =
    row.querySelector(".subtotal");




    if(
        element.value==="pendek"
        ||
        element.value==="panjang"
    ){


        ukuran.disabled=false;


    }else{


        ukuran.value="";

        ukuran.disabled=true;


        qty.value=1;

        qty.disabled=true;


        subtotal.innerHTML="Rp0";


    }



    hitungTotal();


}







function aktifkanQty(element){


    let row =
    element.closest(".kaos-row");


    let qty =
    row.querySelector(".kaosQty");


    let subtotal =
    row.querySelector(".subtotal");



    if(element.value){


        qty.disabled=false;


    }else{


        qty.value=1;

        qty.disabled=true;


        subtotal.innerHTML="Rp0";


    }



    hitungTotal();


}








function cekKaos(){



    let rows =
    document.querySelectorAll(".kaos-row");



    let last =
    rows[rows.length-1];



    let ukuran =
    last.querySelector(".ukuran").value;




    if(
        ukuran
        &&
        rows.length < 3
    ){


        let div =
        document.createElement("div");



        div.className =
        "kaos-row";



        div.innerHTML = `


<select class="sleeve" onchange="aktifkanUkuran(this)">

<option value="">
Lengan
</option>

<option value="pendek">
Pendek
</option>

<option value="panjang">
Panjang
</option>

</select>



<select class="ukuran" onchange="aktifkanQty(this)" disabled>

<option value="">
Uk.
</option>

<option>M</option>
<option>L</option>
<option>XL</option>
<option>2XL</option>
<option>3XL</option>
<option>4XL</option>

</select>



<input
type="number"
class="kaosQty"
value="1"
min="1"
disabled
oninput="hitungTotal()">



<div class="subtotal">
Rp0
</div>


`;



        document
        .getElementById("kaosContainer")
        .appendChild(div);


    }



    hitungTotal();


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
.getElementById("prostPrice")
.innerHTML =
rupiah(
hargaProduk.prostBeer.harga
);




document
.getElementById("laBoldPrice")
.innerHTML =
rupiah(
hargaProduk.laBold16.harga
);





document
.getElementById("registerForm")
.addEventListener(
"submit",
function(e){

    e.preventDefault();


    alert(
        "Registrasi berhasil"
    );


});



</script>
