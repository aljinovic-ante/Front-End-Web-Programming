// // 1. Kreirajte proizvoljan numerički niz te koristeći se ugrađenim funkcijama za
// // nizove napravite sljedeće zadatke:
// // • dodaj element na početak niza
// // • dodaj element na kraj niza
// // • dodaj element na predzadnje mjesto niza
// // • izbriši drugi element niza
// // • izbriši zadnji element niza
// // • izmijeni drugi element
// // • zbroji sve elemente niza
// // • ispiši sve elemente niza koristeći se FOR petljom


// let niz=[1,2,3,4,5];
// niz.unshift(11);
// niz.push(99)
// console.log(niz)
// niz.splice(niz.length -1,0,98)
// console.log(niz)
// niz.splice(1,1);
// console.log(niz)
// niz.splice(niz.length-1,1);
// console.log(niz)
// niz.splice(1,1,1000)
// console.log(niz)
// let zbroj=niz.reduce((a,b)=>a+b)
// console.log("zbroj je "+zbroj)
// for(let i=0;i<niz.length;i++)
//     console.log(niz[i])

// // 2. Kreiraj niz objekata koji predstavlja trgovinu s atributima: naziv_proizvoda,
// // godina_proizvodnje, cijena, količina i popust. Ispiši nazive artikla koji imaju cijenu
// // manju od 50 koristeći se funkcijom filter().

// // let trgovina =[
// //    {
// //     "naziv_proizvoda":"zvaka",
// //    "godina_proizvodnje":2020,
// //    "cijena":5,
// //    "količina":2,
// //    "popust":10
// //     },
// //    {
// //     "naziv_proizvoda":"auto",
// //    "godina_proizvodnje":2023,
// //    "cijena":522222,
// //    "količina":22,
// //    "popust":30
// //     },
// //    {
// //     "naziv_proizvoda":"kruv",
// //    "godina_proizvodnje":2024,
// //    "cijena":31,
// //    "količina":4,
// //    "popust":0
// //     },
// //    {
// //     "naziv_proizvoda":"maslo",
// //    "godina_proizvodnje":2030,
// //    "cijena":522,
// //    "količina":23,
// //    "popust":120
// //     },
// //    {
// //     "naziv_proizvoda":"karota",
// //    "godina_proizvodnje":2022,
// //    "cijena":44,
// //    "količina":3,
// //    "popust":15
// //     },
// // ]

// // const provjera=trgovina.filter(pro => pro.cijena<50)

// // provjera.forEach(pro => console.log(pro))


// // 3. U nizu trgovina iz prethodnog zadatka prebroj količinu artikala koristeći se
// // funkcijom reduce().

// // const prebrojavanje=trgovina.reduce((suma,količina)=> suma+količina.količina,0)
// // console.log(prebrojavanje)

// // 4. U nizu trgovina ispiši nazive trgovina koristeći se funkcijom map().

// // function ime(naz)
// // {
// //     return naz.naziv_proizvoda
// // }

// // const nazivi=trgovina.map(ime)
// // nazivi.forEach(naz=>console.log(naz))

// // 5. Koristeći se arrow funkcijama i ternarnim operatorom (po potrebi) kreiraj
// // funkciju koja:
// // • provjerava je li broj pozitivan ili negativan, vraća true(1) ili false(0).
// // • provjerava parnost broja, vraća „Pozitivan“ ili „Negativan“
// // • računa kub broja
// // • ispisuje poruku „Hello Wordl!“

// // let pos_or_neg=(a)=> a>0;
// // console.log(pos_or_neg(3))


// // let par=(a)=> a%2 === 0;
// // console.log(par(3))


// // let kub=(a)=> a*a*a;
// // console.log(kub(3))

// // let hello=()=> console.log("hello world")
// // hello()