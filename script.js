


const reviews = [

    {
        name: "Thales Lindberg",
        prof: "User Interface Designer at FIAP",
        rev: "Well, to be honest I’m not a huge fan of cuscuz or couscous. I’ve also tried to eat the moroccan one but still didn't like it cus remarkably was the same flavor.",
        img: "images/thales.jpg"


    },

    {
        name: "Franciellio Borges",
        prof: "SMOKER and Meteorology Student",
        rev: "Eu particularmente acho o cuscuz uma comida excelente, é barato, fácil e rápido de fazer, e também é relativamente versátil; cai bem em qualquer refeição e da forma que você preferir",
        img: "images/fran.jpg"



    }
,
    {
        name: "Igor Rafael",
        prof: "Excellent FIFA 22 ProClubs Goalkeeper",
        rev: "Cuzcuz é uma comida deliciosa, de baixo custo e alimenta bem as pessoas, a comida fica melhor com leite e carne guizada de galinha ou bode.",
        img: "images/para.jpg"


    }


]



function loaded (){

    let namee = document.getElementById("name")
        namee.innerText = reviews[0].name

    let prof = document.getElementById ("prof")
        prof.innerText = reviews[0].prof


    let rev = document.getElementById ("rev")
        rev.innerText = reviews[0].rev


    let img = document.getElementById ("img")
    img.src = reviews[0].img
     

}

let index = 0

function rightt(){
    
    let namee = document.getElementById("name")
    index++

    namee.innerText = reviews[index].name

    if (index > reviews.length){
        namee.innerText = reviews[0].name
        index++
    }
    


}

   




















//let name = document.getElementsByClassName ("name");



//let name = document.getElementsByClassName ("name")

        //name.innerHTML = reviews[0].name

        //console.log(name.innerHTML)

    //let prof = document.getElementsByClassName ("prof")
    //let rev = document.getElementsByClassName ("rev")
    //let img = document.getElementsByClassName ("img")





//let right = document.getElementsByClassName ("right");
//let left = document.getElementsByClassName ("left");








