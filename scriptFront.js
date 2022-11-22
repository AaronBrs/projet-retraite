var erreurPartie1=false
function displayPartie2(){
    validationPartie1()
    if(!erreurPartie1){
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

function nouvelleLigne(){
    var nouvelleLigne = '<tr><td><div class="inputfield"><input type="number" min="1920" max="2025" step="1"  class="lesAnnees input"></div></td><td><div class="inputfield"><input type="number" min="0.00" max="1000000.00" step="0.01" class="lesSalaires input"></div</td><td><div class="inputfield"><div class="custom_select"><select class="lesUnites"><option value="EUR" selected>EUR</option><option value="FRF">FRF</option></select></div></div> </td<td><div class="revenuReel lesSalairesReels"></div></td></tr>';
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


function validationPartie1(){
    validationNom();
    validationPrenom();
    validationGenre();
    validationDateNaissance();
    validationDateRetraite();
}
function validationNom(){
    const nomValue = document.getElementById('nom').value.trim();
    const inputField = document.getElementById('nom').parentElement;
    const small = inputField.querySelector('small');
    const inputNom = inputField.querySelector('#nom')
    if(nomValue===""){
        small.style.display='block';
        small.style.color='red';
        inputNom.style.borderColor='red';
        erreurPartie1=true
    }
    else{
        small.style.display='none';
        inputNom.style.borderColor="#FCBC04";
        erreurPartie1=false
    }
}

function validationPrenom(){
    const prenomValue = document.getElementById('prenom').value.trim();
    const inputField = document.getElementById('prenom').parentElement;
    const small = inputField.querySelector('small');
    const inputPrenom = inputField.querySelector('#prenom')
    if(prenomValue===""){
        small.style.display='block';
        small.style.color='red';
        inputPrenom.style.borderColor='red';
        erreurPartie1=true
    }
    else{
        small.style.display='none';
        inputPrenom.style.borderColor="#FCBC04";
        erreurPartie1=false
    }
}

function validationGenre(){
    const genre = document.querySelector('input[name="genre"]:checked');
    const inputField = document.getElementById('lesGenres').parentElement;
    const small = inputField.querySelector('small');

    if(genre==undefined){
        small.style.display='block';
        small.style.color='red';
        erreurPartie1=true
    }
    else{
        small.style.display='none';
        erreurPartie1=false
    }
}

function validationDateNaissance(){
    const dateNaissanceValue = document.getElementById('dateNaissance').value;
    const inputField = document.getElementById('dateNaissance').parentElement;
    const small = inputField.querySelector('small');
    const inputDateNaissance = inputField.querySelector('#dateNaissance')
    if(dateNaissanceValue==""){
        inputDateNaissance.style.borderColor="red";
        small.style.display='block';
        small.style.color='red';
        erreurPartie1=true
    }
    else{
        inputDateNaissance.style.borderColor="#FCBC04";
        small.style.display='none';
        erreurPartie1=false
    }
}

function validationDateRetraite(){
    const dateRetraiteValue = document.getElementById('dateRetraite').value;
    const inputField = document.getElementById('dateRetraite').parentElement;
    const small = inputField.querySelector('small');
    const inputDateRetraite = inputField.querySelector('#dateRetraite')
    if(dateRetraiteValue==""){
        inputDateRetraite.style.borderColor="red";
        small.style.display='block';
        small.style.color='red';
        erreurPartie1=true
    }
    else{
        inputDateRetraite.style.borderColor="#FCBC04";
        small.style.display='none';
        erreurPartie1=false
    }
}