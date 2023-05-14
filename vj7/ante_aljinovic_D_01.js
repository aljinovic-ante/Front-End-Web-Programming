// 1. Napišite konstruktor funkciju za stvaranje objekata koji predstavlja automobil, a
// zatim koristeći prototipove dodajte metode za dodavanje brzine i prikaz trenutne
// brzine automobila.
// Konstruktor funkcija prima četiri argumenta: marku, model, godinu proizvodnje i
// trenutnu brzinu automobila.
// Svi ovi argumenti se spremaju kao svojstva objekta koji će biti stvoren pomoću
// konstruktor funkcije.

function Automobil(marka,model,godina,brzina)
{
    this.marka = marka;
    this.model = model;
    this.godina = godina;
    this.brzina = brzina;
}

Automobil.prototype.dodajBrzinu=function(brzina){
    this.brzina += brzina;
}

Automobil.prototype.prikaziBrzinu=function(){
    console.log(this.brzina);
}

let mojAutomobil = new Automobil("Toyota", "Camry", 2015, 60);
mojAutomobil.dodajBrzinu(20);
mojAutomobil.prikaziBrzinu();

