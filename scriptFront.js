function displayPartie2(){
    const divPartie2 = document.getElementById('partie2');
    const btn = document.getElementById('btnPartie2');
    if (divPartie2.style.display === 'none') {

        divPartie2.style.display = 'block';
        btn.style.display='none';
    } else {
        divPartie2.style.display = 'none';
    }

}

function recupDonnees(){
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const genre = document.querySelector('input[name="genre"]:checked').value;
    const dateNaissance = document.getElementById('dateNaissance').value;
}