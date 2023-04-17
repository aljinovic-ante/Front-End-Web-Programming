// 1. Napisanu funkciju ocjena(k1, k2, sem) zapiši kao:
// - arrow funkciju s pozivom ocjena_arrow(50, 80, 80),
// - currying funkciju s pozivom ocjena_currying(50)(80)(80).


// function ocjena(k1, k2, sem){
// //𝑂𝑐𝑗𝑒𝑛𝑎(%) = 0,42*kol1 + 0,42*kol2 + 0,16*semi
// return k1*0.42 + k2*0.42 + sem*0.16
// }
// console.log(`Postotak ostvaren na kolegiju ${ocjena(50, 80, 80)}`)

// let ocj_arr=(k1, k2, sem)=>k1*0.42 + k2*0.42 + sem*0.16
// console.log(ocj_arr(50,80,80))


// function ocjena_curr(k1)
// {
//     return function(k2)
//     {
//         return function(sem)
//         {
//             return k1*0.42 + k2*0.42 + sem*0.16
//         }
//     }
// }
// console.log(ocjena_curr(50)(80)(80))


// 2. Napisati zasebno arrow i currying funkciju koja će ispisivati poruku o
// ostvarenom rezultatu iz ispita iz određenog kolegija.
// Prva vrijednost koja se šalje funkciji je naziv kolegija, druga ostvareni broj
// bodova, a treća ukupan broj bodova.
// Primjer poziva funkcije rezultat je rezultat("PWKS")(25)(35), a primjer ispisa
// pozvane funkcije „Iz kolegija PWKS ostvarili ste 71.43% „. Koristiti metodu
// toFixed objekta Number za zaokruživanje rezultata na dva decimalna mjesta.

// let f1=(str,a,b)=>`Iz kolegija ${str} ostvarili ste ${(a*100/b).toFixed(2)}% `
// console.log(f1("PWKS",25,35))

// function f2(str)
// {
//     return function(a)
//     {
//         return function(b)
//         {
//             return `Iz kolegija ${str} ostvarili ste ${(a*100/b).toFixed(2)}% `
//         }
//     }
// }
// console.log(f2("PWKS")(25)(35))

// function mnozi(a)
// {
//     return function(b)
//     {
//         let zn=b%10
//         if(zn%2!==0 || b==undefined)
//             return a
//         else
//             return mnozi(a*b)
//     }
// }

// console.log(mnozi(2)(5)(13)(10)(14)(177)(4)(0)())



// 3. Napisati currying funkciju koja množi brojeve sa zadnjom parnom znamenkom.
// Za funkciju s pozivom mnozi(2)(5)(13)(10)(14)(177)(4)(0)() ispisuje se rezultat
// 1120.
// Zadaci – objektno orijentirani JS

// function mnozi(a)
// {
//     return function(b)
//     {
//         if(b==undefined)
//             return a
//         else if(b==0)
//             return mnozi(a)
//         else if(b%2===0)
//             return mnozi(a*b)
//         else
//             return mnozi(a)
//     }
// }

// console.log(mnozi(2)(5)(13)(10)(14)(177)(4)(0)())


// 4. Kreiraj konstruktor Kolegij s atributima (property) godina, semestar, kol1,
// kol2, ocjena_rez i dvije metode ocjena() i info().
// Funkcija ocjena() ispisuje postotak riješenosti => kol1*0.5 + kol2*0.5.
// Funkcija info() ispisuje poruku „Student na predmetu PWKS, {godina}. godina,
// {semestar}. semestar, ostvario je {ocjena_rez}%“.
// Kreirati dva objekta i postaviti vrijednosti pomoću konstruktora. Pozvati
// funkcije ocjena() i info() u oba objekta.

function Kolegij(god,sem,k1,k2){
    return {
        //properties - vrijednosti
        godina: god,
        semestar: sem,
        kol1: k1,
        kol2: k2,
        ocjena_rez: (k1*0.5+k2*0.5),
        //metode - logika
        ocjena: function(){
            console.log(`${k1*0.5} + ${k2*0.5}`)
        },
        info: function(){
            console.log(`Student na predmetu PWKS, ${god}. godina, ${sem}. semestar, ostvario je ${this.ocjena_rez}%`)
        }
    } 
}

const matematika = Kolegij(1,1,90,80);
matematika.ocjena();
matematika.info();

const prog1 = Kolegij(2,3,100,93);
prog1.ocjena();
prog1.info();

// 5. U prethodnom zadatku drugo kreiranom objektu dodati atribut ime, prezime i
// status. Ispisati poruku „Student {ime} {prezime} ima {formula}%“.

Kolegij.ime="Ante"
Kolegij.prezime="Aljinović"
Kolegij.status="Student"

console.log(Kolegij.status +" "+ Kolegij.ime +" " +Kolegij.prezime+ " ima " + prog1.ocjena_rez+"%.")


// 6. U prethodnom zadatku izbriši dodane atribute ime, prezime i status.

delete Kolegij.ime
delete Kolegij.prezime
delete Kolegij.status

console.log(Kolegij.status +" "+ Kolegij.ime +" " +Kolegij.prezime+ " ima " + prog1.ocjena_rez+"%.")
