// 1. Kreirati niz koji će sadržavati deset slučajno generiranih brojeva u
// intervalu od 100 do 200, zaokruženih na najbliži cijeli broj. Sortirati
// elemente niza od manjeg prema većem funkcijom sort(). Obratiti
// pozornost kod sortiranja numeričkih i tekstualnih elemenata.

// let niz=[]
// for(let i=0;i<10;i++)
// {
//     niz[i]=Math.round(Math.random()*100)+100
// }
// niz.sort((a,b)=>a-b)
// console.log(niz)

// 2. Omogućiti unos brojeva dok se ne unese 0. Zbrojiti parne i neparne
// brojeve koristeći se closure funkcijom arrow zapisa. Zabranjeno je
// koristiti nizove.

// let broj;
// let parni=0,neparni=0
// do{
//     broj=+prompt("Unesite broj koji nije 0")
//     function zbroji(broj)
//     {
//         let pf=(broj)=> parni+=broj;
//         let nf=(broj)=> neparni+=broj;
//         if(broj%2==0)
//         {
//            parni=pf(broj)
//         }
//         else
//         {
//             neparni=nf(broj)
//         }
//     }
//     zbroji(broj)
// }while(broj!=0)
// console.log("parni su " +parni)
// console.log("neparni su "+neparni)

// 3. Kreirati closure funkciju koja vraća poruku „Programirati nije teško“.

// function fporuka()
// {
//     let string="Programirati nije teško"
//     function pp()
//     {
//         console.log(string)
//     }
//     pp()
// }
// fporuka()

// 4. Prepiši programski k𝑜̂d i objasni što se događa.
// function sum(a)
// {
//     return (b, c) => {
//         return a * b * c
//     }
// }

// let x = sum(10);
// console.log(x(3,12));
// // ili
// console.log(sum(10)(3,12));

// omogućava umjesto pozivanja funkcije sa dva argumenta (binarne funkcije), pozivanje funkcije
// sa jednim argumentom (unarne funkcije), a potom pozivanje funkcije sa drugim argumentom,
// koja potom stvara rezultat

// 5. Korištenjem currying i arrow zapisa, omogućiti pozivanje funkcije s
// promjenjivim brojem argumenata u formatu (a)(b)(c)… koja bi trebala
// vratiti umnožak pozitivnih brojeva manjih od 20.

// const umnozak=(a)=>(b)=>(c)=>{
//     if(a>0 && a<20) 
//     {
//         if(b>0 && b<20)
//         {
//             if(c>0 && c<20)
//             {
//                 return a*b*c;
//             }
//             else
//                 return a*b
//         }
//         else if(c>0 && c<20)
//         {
//             return a*c
//         }
//         else
//         {
//             return a
//         }
       
//     }
//     else
//     {
//         if(b>0 && b<20)
//         {
//             if(c>0 && c<20)
//             {
//                 return b*c;
//             }
//             else
//                 return b
//         }
//         else if(c>0 && c<20)
//         {
//             return c
//         }
//         else
//         {
//             return "greska"
//         }
//     }
// }
// console.log(umnozak(55)(22)(23));