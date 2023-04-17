// // Instancirati dva objekta koristeći konstruktor funkciju koja će opisivati Auto s
// // atributima i metodama po želji. Potrudite se da vaše metode imaju neku svrhu osim
// // tekstualnog ispisa. U svoje metode uključite atribute kako bi bolje vidjeli primjenu
// // privatnih atributa npr. izračunajte potrošnju goriva.
// // Važno je imati barem jedan privatan atribut i jednu privatnu metodu koje ćete
// // dohvatiti u globalnom scopeu (get, set ili Object.definepropetry()).
// // Jednom atributu postavite default vrijednost koju ne trebate prosljeđivati kroz
// // konstruktor.
// // Nakon što napravite objekt preko konstruktor funkcije, svoj k𝑜̂d iskoristite i izradite
// // još jedan objekt, ali preko factory funkcije ili klase. Nemojte izostaviti privatne
// // atribute i metode.


// function Auto(marka,model)
// {
//     this.marka = marka;
//     this.model = model;
//     this.udaljenost=0;
//     this.litra=0;

//     this.set_potrosnja=function(nlitra,nudaljenost){
//         this.litra=nlitra;
//         this.udaljenost=nudaljenost;
//     }

//     this.get_potrosnja=function(){
//         return (this.litra/this.udaljenost)*100;
//     }

//     this.info=function(){
//         console.log(`Auto ${marka} ${model} troši ${this.get_potrosnja()} toliko litara.`)
//     }

// }

// const opel=new Auto('Opel','Zafira');
// opel.set_potrosnja(8.7,100); 
// opel.info();

// function novoAuto(marka,model)
// {
//     return{
//             marka:marka,
//             model: model,
//             udaljenost:0,
//             litra:0,

//             set_potrosnja(nlitra,nudaljenost){
//                 litra=nlitra;
//                 udaljenost=nudaljenost;
//             },

//             get_potrosnja(){
//                 return (litra/udaljenost)*100;
//             },

//             info(){
//                 console.log(`Auto ${marka} ${model} troši ${this.get_potrosnja()} toliko litara.`)
//             }

//     };

// }

// const mazda=novoAuto('Mazda','CX5');
// mazda.set_potrosnja(15,422);
// mazda.info()

function Auto(broj_vrata,boja,marka,konjaza)
{

    this.broj_vrata=broj_vrata
    this.boja=boja
    this.prodajna_cijena=10000
    this.marka = marka
    this.broj_konja = konjaza
    let potrosnja=0 
    this.stanje = "Dostupno"
    

    
    this.postCijena=(cijena)=>this.prodajna_cijena=cijena
    this.getCijena=()=>this.prodajna_cijena
    
    this.getPotrosnja=()=>potrosnja
    this.PostPotrosnja=(kilometri,gorivo)=>(gorivo*100)/kilometri
    Object.defineProperty(this, potrosnja, {
        get: function(){
            return potrosnja
        }, 
        set: function(){
            potrosnja = (gorivo*500)/kilometri
        }
    })




}

const bmw = new Auto(3,"crni","m3",1222)
// console.log(A4)
bmw.postCijena(200)
console.log(bmw.getCijena())
console.log(bmw.PostPotrosnja(628,50))
console.log(bmw.stanje)



class Autoklase{
    constructor(broj_vrata,boja,marka,konjaza){
        this.broj_vrata=broj_vrata
        this.boja=boja,
        this.marka=marka,
        this.konjaza=konjaza
    }

    //#privatna_metoda=()=>console.log("Opis automobila:")

    print = function(){
        console.log(`${this.marka} ${this.boja} ${this.broj_vrata} ${this.konjaza}`)
    }
    
}


const mercedes=new Autoklase(7,"red","c class",2222)
mercedes.print()