function displayPartie2(){
    const divNbEnfantsNes = document.getElementById('champNbEnfantsNes');
    const genre = document.querySelector('input[name="genre"]:checked').value;
    if (genre=="Femme"){
        divNbEnfantsNes.style.display='block';
    }else{
        divNbEnfantsNes.style.display='none';
    }
    const divPartie2 = document.getElementById('partie2');
    const btnPartie2 = document.getElementById('btnPartie2');
    const btnPartie3 = document.getElementById('btnPartie3');
    if (divPartie2.style.display === 'none') {
        divPartie2.style.display = 'block';
        btnPartie2.style.display='none';
        btnPartie3.style.display='block';
    } else {
        divPartie2.style.display = 'none';
        btnPartie3.style.display = 'none';
    }
}

function displayPartie3(){
    const divPartie3 = document.getElementById('partie3');
    const btnPartie3 = document.getElementById('btnPartie3');
    const btnNouvelleLigne = document.getElementById('btnNouvelleLigne');
    if (divPartie3.style.display === 'none') {
        divPartie3.style.display = 'block';
        btnPartie3.style.display = 'none';
        btnNouvelleLigne.style.display = 'block';
    } else {
        divPartie3.style.display = 'none';
        btnNouvelleLigne.style.display = 'none'
    }
}

function recupDonnees(){
//    const nom = document.getElementById('nom').value;
//    const prenom = document.getElementById('prenom').value;
//    const genre = document.querySelector('input[name="genre"]:checked').value;
//    const dateNaissance = document.getElementById('dateNaissance').value;

//    nbTrimestresValides
//    nbTrimestresValidesAvantAge20
//    nbTrimestresValidesAvantAge16

//    nbEnfantsNes
//    nbEnfantsEleves

//    nbTrimestresHandicap

//    const lesAnnees = document.getElementsByClassName('lesAnnees');
//    const lesSalaires = document.getElementsByClassName('lesSalaires');
//    const lesUnites = document.getElementsByClassName('lesUnites');

    console.log("caca");
}

function nouvelleLigne(){
    var nouvelleLigne = '<tr><td><div class="inputfield"><input type="number" min="1920" max="2025" step="1"  class="lesAnnees input"></div></td><td><div class="inputfield"><input type="number" min="0.00" max="1000000.00" step="0.01" class="lesSalaires input"></div</td><td><div class="inputfield"><div class="custom_select colonneUnite"><select class="lesUnites"><option value="EUR" selected>EUR</option><option value="FRF">FRF</option></select></div></div> </td></tr>';
    var tableau = document.getElementById('aRemplir');
    tableau.insertAdjacentHTML("beforeend",nouvelleLigne);
}

function afficheChampSituationHandicap(){
    var champSituationHandicap = document.getElementById('champNbTrimestresHandicap');
    var situationHandicap = document.querySelector('#situationHandicap').checked;
    if(situationHandicap){
        champSituationHandicap.style.display='block';
    }else{
        champSituationHandicap.style.display='none';
    }
}
