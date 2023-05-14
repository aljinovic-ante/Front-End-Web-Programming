// // 3. zadatak
// // Pretpostavimo da radimo na razvoju aplikacije za upravljanje resursima u IT tvrtki.
// // Naš zadatak je razviti klase koje će modelirati zaposlenike u tvrtki.
// // Za početak, kreirajte klasu "Zaposlenik". Ova klasa bi trebala imati sljedeće atribute:
// // ime, prezime, email adresa i ocjena sposobnosti. Osim atributa, trebala bi imati
// // metodu za ispis (ime, prezime, email) i metodu za ocjenu sposobnosti zaposlenika.

// // Sljedeća klasa koju bismo trebali definirati je klasa "Programer". Ova klasa bi trebala
// // naslijediti klasu "Zaposlenik" i dodati joj atribut programski jezik.

// // Zatim, trebamo definirati klasu "Dizajner" koja nasljeđuje klasu "Zaposlenik" i ima
// // dodatan atribut softver.
// // Na kraju, trebamo kreirati instance svake klase i pozvati metodu za ispis podataka o
// // zaposleniku (zaposlenik, programer, dizajner).

// class Zaposlenik{
//     constructor(ime,prezime,email,ocjena)
//     {
//         this.ime =ime;
//         this.prezime =prezime;
//         this.email =email;
//         this.ocjena =ocjena;
//     }
//     ispis(){
//         console.log(this.ime +" "+this.prezime+" "+this.email);
//     }
//     ocijeniSposobnost(){
//         console.log(this.ocjena);
//     }
// }

// class Programer extends Zaposlenik
// {
//     constructor(ime,prezime,email,ocjena,programski_jezik)
//     {
//         super(ime,prezime,email,ocjena);
//         this.programski_jezik = programski_jezik;
//     }
//     ispis(){ console.log(this.ime +" "+this.prezime+" "+this.email+" jezik:"+programski_jezik); }
// }

// class Dizajner extends Zaposlenik {
//     constructor(ime,prezime,email,ocjena,softver)
//     {
//         super(ime,prezime,email,ocjena);
//         this.softver = softver;
//     }
//     ispis(){ console.log(this.ime +" "+this.prezime+" "+this.email+" softver:"+softver); }
// }





// // Kreiranje instance za klasu "Zaposlenik"
// const zaposlenik1 = new Zaposlenik('Pero', 'Perić', 'pero.peric@example.com', 4);
// zaposlenik1.ispis(); // Ispisuje "Pero Perić, email: pero.peric@example.com"
// zaposlenik1.ocijeniSposobnost(4)
// // Kreiranje instance za klasu "Programer"
// const programer1 = new Programer('Marko', 'Markić', 'marko.markic@example.com',
// 'JavaScript');
// programer1.ispis(); // Ispisuje "Marko Markić, email: marko.markic@example.com,programski jezik: JavaScript"
// // Kreiranje instance za klasu "Dizajner"
// const dizajner1 = new Dizajner('Ana', 'Anić', 'ana.anic@example.com', 'Adobe Photoshop');
// dizajner1.ispis(); // Ispisuje "Ana Anić, email: ana.anic@example.com, softver: AdobePhotoshop"