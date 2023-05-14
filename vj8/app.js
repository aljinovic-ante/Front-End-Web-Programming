function prvi(){
    let prednosti=document.getElementById("prednosti");
    prednosti.style.backgroundColor="yellow"
}

function drugi()
{
    let elem=document.getElementsByClassName("odjeljak");
    for(let i=0;i<elem.length;i++)
        elem[i].style.fontSize="20px";
}

function treci()
{
    document.getElementById("prednosti").innerHTML="Ova sekcija je promijenjena korištenjem DOM-a";
}

function cetvrti(){

    const element = document.getElementsByTagName("section");
    for (let i = 0; i < element.length; i++) {
        element[i].style.background = 'aqua';
    }
}

function peti()
{
    document.body.style.backgroundColor = "red";
}

function sesti()
{
    document.getElementById("prvi_paraf").innerHTML="Tararararar";
}

function sedmi()
{
    let pic=document.getElementById("real")
    pic.src="smece.png"
}

function osmi()
{
    const node = document.createElement("p");
    const textnode = document.createTextNode("Ovo je novi paragraf");
    node.appendChild(textnode);
    document.getElementById("osmi_sec").appendChild(node);
}