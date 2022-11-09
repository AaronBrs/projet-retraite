function displayPartie2(){
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
    if (divPartie3.style.display === 'none') {
        divPartie3.style.display = 'block';
        btnPartie3.style.display='none';
    } else {
        divPartie3.style.display = 'none';
    }
}

function recupDonnees(){
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const genre = document.querySelector('input[name="genre"]:checked').value;
    const dateNaissance = document.getElementById('dateNaissance').value;
}