// 2. zadatak – konstruktu, prototip, nasljeđivanje
// Kreirajte konstruktor funkciju "Vozilo" koja će imati svojstva "marka" i
// "godinaProizvodnje". Ova funkcija će također imati metodu "vozi" koja će ispisati tekst
// "Vozim [marku] vozila godište [godinaProizvodnje]"

// Kreiraj konstruktor funkciju "Automobil" koja će naslijediti svojstva i metodu "Vozilo"
// konstruktor funkcije. Ova funkcija će dodati svojstva "boja" i "brojVrata". Također će
// imati metodu "parkiraj" koja će ispisati tekst "Automobil [marka], [boja] boje je
// parkiran!".

// Kreiraj konstruktor funkciju "Motocikl" koja će također naslijediti svojstva i metodu
// "Vozilo" konstruktor funkcije. Ova funkcija će dodati svojstvo "tip" (npr. sportski,
// cestovni, enduro) i metodu "voziBrzo" koja će ispisati tekst "Vozim motocikl tipa [tip],
// marke [marka] i godište [godinaProizvodnje] brzo!".
// Kreiraj instance objekata "Automobil" i "Motocikl" pomoću konstruktor funkcija.
// Postavi vrijednosti svojstava i pozovi metode.

// function Vozila(marka,godina)
// {
//     this.marka = marka;
//     this.godina = godina;

// }

// Vozila.prototype.vozi=function() {
//     console.log("Vozim "+this.marka+ " vozilo, godište "+this.godina)
// }

// function Automobil(marka,godina,boja,broj_vrata)
// {
//     Vozila.call(this,marka,godina);
//     this.boja = boja;
//     this.broj_vrata= broj_vrata;
// }

// Automobil.prototype=Object.create(Vozila.prototype);
// Automobil.prototype.constructor=Automobil

// Automobil.prototype.parkiraj=function() {
//     console.log("Auto "+this.marka+ ", " +this.boja+ " boje je parkiran!")
// }

// function Motocikl(marka,godina,tip)
// {
//     this.tip=tip;
//     Vozila.call(this,marka,godina);
// }
// Motocikl.prototype=Object.create(Vozila.prototype);
// Motocikl.prototype.constructor=Motocikl
// Motocikl.prototype.voziBrzo=function() {
//     console.log("Vozim motocikl tipa "+this.tip+",marke "+this.marka+" i godište "+this.godina+" brzo!")
// }



// // Kreiranje instance objekta Automobil
// let auto = new Automobil("BMW", 2022, "crna", 5);
// auto.vozi(); // Vozim marku vozila BMW godište 2022
// auto.parkiraj(); // Automobil BMW, crna boje je parkiran!
// // Kreiranje instance objekta Motocikl
// let moto = new Motocikl("Honda", 2020, "sportski");
// moto.vozi(); // Vozim marku vozila Honda godište 2020
// moto.voziBrzo(); // Vozim motocikl tipa sportski, marke Honda i godište 2020 brzo!