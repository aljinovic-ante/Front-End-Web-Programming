// 1. napravite funkciju delayedgreeting, koja će koristiti promise objekt za
// ispisivanje pozdrava nakon određenog vremenskog kašnjenja.
// funkcija treba prihvatiti vrijeme kašnjenja (u milisekundama) i tekst
// pozdrava kao argumente.
// nakon zadanog kašnjenja, funkcija treba ispisati tekst pozdrava.

function delayedgreeting(tekst,sek)
{
    return new promise(()=>{
        settimeout(()=>{
            console.log(tekst);
        },sek);   
    })
}

delayedgreeting("pozdravvv",3000)


2.nacin

function delayedgreeting(tekst,sek)
{
    return new promise((resolve)=>{
        settimeout(()=>{
            resolve(tekst);
        },sek);   
    })
}

delayedgreeting("pozdravvv",3000).then((tekst)=>{
    console.log(tekst);
})

// 2. napravite funkciju checkweather, koja će koristiti promise objekt za
// provjeru vremenskih uvjeta na temelju unesenog grada.
// funkcija treba prihvatiti ime grada kao argument. u ovom zadatku,
// koristit ćemo jednostavnu simulaciju dohvaćanja podataka o vremenskim
// uvjetima iz api-ja. ako je vrijeme sunčano, promise treba biti riješen
// (resolve) s porukom "vrijeme je sunčano u {grad}". u suprotnom, promise
// treba biti odbijen (reject) s porukom "vrijeme nije sunčano u {grad}". 


function checkweather(grad)
{
    return new promise((resolve,reject)=>
    {
        let rn=math.floor(math.random()*10)+1
        console.log("rn je: "+rn)
        if(rn%2==0)
        {
            resolve("sunce je u "+grad)
        }   
        else
        {
            reject("nije sunce u "+grad)
        }
    }
    )
}

checkweather("split",3000)
.then((poruka)=>{
    console.log(poruka)
})
.catch((error)=>{
    console.log(error)
})

callback
function funk1(delay,funk2)
{
    settimeout(()=>{
        funk2()
    },delay)
}

function funk2()
{
    console.log("funk2")
}
funk1(2000,funk2)




// 5. napišite funkciju calculateandprintsum koja prima dva broja a i b.
// funkcija treba koristiti await funkciju calculatesum kako bi asinkrono
// izračunala zbroj brojeva a i b. nakon izračuna, ispišite rezultat zbroja.
// funkcija calculatesum simulira izračun zbroja brojeva s određenim
// vremenskim kašnjenjem. funkcija calculatesum vraća obećanje (promise)
// koje se rješava (resolve) s rezultatom zbroja.

function calculatesum(a,b,delay)
{
    return new promise((resolve)=>{
        settimeout(()=>
        {
            rez=a+b
            resolve(rez)
        },delay)
     
    })
}

async function calculateandprintsum(a,b)
{
    await calculatesum(a,b,3000)
    .then((zbroj)=>
    {
        console.log("zbroj je: "+zbroj)
    }
    )
}

calculateandprintsum(2,3)

// 6. napišite funkciju checknumber koja prima broj kao argument. funkcija
// treba provjeriti je li dani broj paran ili neparan te vratiti odgovarajuću
// poruku.
// koristite obećanje (promise) s callback funkcijama resolve i reject. ako
// je broj paran, obećanje treba biti riješeno s porukom "broj je paran.".
// ako je broj neparan, obećanje treba biti odbijeno s porukom "broj je
// neparan.".
// pozovite funkciju checknumber s proizvoljnim brojem i ispišite rezultat
// korištenjem metoda then za hvatanje riješenog obećanja i metode catch
// za hvatanje odbijenog obećanja.

function checknumber(broj)
{
    return new promise((resolve,reject)=>{
        if(broj%2==0)
        {
            resolve("broj je paran")
        }
        else{
            reject("broj je neparan")
        }
    })
}

checknumber(6)
.then((tekst)=>{
    console.log(tekst)
})
.catch((error)=>{
    console.log(error)
})
