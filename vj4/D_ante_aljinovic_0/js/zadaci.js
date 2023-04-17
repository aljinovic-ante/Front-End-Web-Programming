// alert("Moj prvi JS program!");
// console.log("Moj prvi JS program");

// 1. Napisati void funkciju koji računa aritmetičku sredinu tri prirodna broja koja
// unosi korisnik putem skočnog prozora (prompt), a rezultat se ispisuje u konzoli.
// FUNCTIONS
// IF – ELSE IF –ELSE

// function arit_sred(a,b,c)
// {
//     console.log((a+b+c)/3);
// }

// let a=parseInt(prompt("unesite prvi broj: "));
// let b=parseInt(prompt("unesite drugi broj: "));
// let c=parseInt(prompt("unesite treci broj: "));

// arit_sred(a,b,c);


// 2. Napisati void funkciju koji računa zbroj, razliku, umnožak i količnik dvaju
// brojeva. Vrijednosti brojeva i znak za operaciju (+, -, /, *) prosljeđuju se kroz
// poziv funkcije kao argument, a rezultat se ispisuje u konzoli.
// FUNCTIONS
// OPERATORS

// function kalk(a,b,znak)
// {
//     switch(znak)
//     {
//         case '+': console.log(a+b); break;
//         case '-': console.log(a-b); break;
//         case '*': console.log(a*b); break;
//         case '/': if(b==0) { console.log("Nemože se dijeliti s nulom!") } else console.log(a/b); break;
//     }
// }

// let znak=prompt("unesite operaciju: ");
// let a=parseInt(prompt("unesite prvi broj: "));
// let b=parseInt(prompt("unesite drugi broj: "));
// kalk(a,b,znak);



// 3. Napisati funkciju koja kao povratnu vrijednost vraća prvu znamenku unesenog
// deseteroznamenkastog broja npr. za broj 1254192518 funkcija vraća 1 i
// rezultat ispisuje u konzoli.
// FUNCTIONS
// OPERATORS
// WHILE

// function prva_znam(broj)
// {
//     return Math.trunc(broj/1000000000);
// }

// let a=parseInt(prompt("unesite deseteroznamenkasti broj: "));
// console.log(prva_znam(a));

// 4. Napisati void funkciju koji unosi mjesec i ispisuje koje je godišnje doba u skočnom
// prozoru (alert). Za 1., 2. i 3. mjesec ispisuje zima, za 4., 5. i 6. ispisuje proljeće,
// za 7., 8. i 9. mjesec program ispisuje ljeto, a za 10., 11. i 12. ispisuje jesen.
// FUNCTIONS
// SWITCH
// IF – ELSE IF –ELSE

// function koji_je_misec(misec)
// {
//     if(misec>=1 && misec<=3)
//         console.log("zima je!");
//     else if(misec>=4 && misec<=6)
//         console.log("proljece je!");
//     else if(misec>=7 && misec<=9)
//         console.log("lito je!");
//     else if(misec>=10 && misec<=12)
//         console.log("jesen je!");
// }

// let misec=parseInt(prompt("unesi misec (kao broj): "));
// koji_je_misec(misec);

// 5. Napisati funkciju koja provjerava broj pojavljivanja znamenke z u prirodnom
// broju n. Funkcija za unose korisnika npr. n = 2955, z =5, vraća poruku „U broju
// 2955 imamo 2 pojavljivanja broja 5.“, te ispisuje u konzoli.
// FUNCTIONS
// OPERATORS
// WHILE

// function ponavljanje_5(broj,n)
// {
//     let brojac=0;
//     let kasnije=broj;
//     while(broj)
//     {
//         let zn=broj%10;
//         broj=Math.trunc(broj/10); 
//         if(zn==n)
//             brojac++;
//     }

//     console.log("U broju "+kasnije+" imamo "+brojac+" pojavljivanja broja "+n);
// }

// let broj=parseInt(prompt("unesite broj: "));
// let n=parseInt(prompt("unesite broj koji trazimo: "));
// ponavljanje_5(broj,n);

