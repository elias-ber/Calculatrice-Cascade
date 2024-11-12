// Déclaration des variants type chaînes de carctères "Res" et "Op" et de variant numérique "ChiffreAvant"
let Res = "";
let Op = "";
let ChiffreAvant = 0;

// Déclaration de la fonction "ajoutChiffre" avec comme parametre "nombre"
function ajoutChiffre(nombre) {
    // Si la valeur dans l'élément d'ID "ecran" est égal à 0 ou -0 Alors on affiche rien
    if (document.getElementById("ecran").value == "0" || document.getElementById("ecran").value == "-0") {
        document.getElementById("ecran").value = "";
    }
    
    // Lorsqu'on ajoute un chiffre, on l'ajoute à la valeur du variant "Res", puis on l'affiche
    Res += nombre;
    document.getElementById("ecran").value = Res;
}

// Déclaration de la fonction "ajoutOperateur" avec comme parametre "operateur"
function ajoutOperateur(operateur) {
    // Si Res est égale à rien et qu'operateur est égale à - Alors on affecte "-" à Res
    if (Res === "" && operateur === '-') {
        Res = "-";
    } 
    // Sinon Si Res est égale à rien Alors on affecte Res à ChiffreAvant, Rien à Res et operateur à Op
    else if (Res !== "") {
        ChiffreAvant = parseFloat(Res);
        Res = "";
        Op = operateur;
    } 
    // Sinon Si Res est égale à 0 Alors on affecte Res à ChiffreAvant et operateur à Op
    else if (Res !== 0) {
        ChiffreAvant = parseFloat(Res);
        Op = operateur;
    }
}

// Déclaration de la fonction "calcul" avec aucun paramètre
function calcul() {
    // Si Op est différent de rien ET que Res est différent de rien
    if (Op !== '' && Res !== '') {
        let Nb = parseFloat(Res);
        // Alors Si Op est égale à "+" Alors on affecte la valeur de (ChiffreAvant+Nb) à Res
        if (Op === '+') {
            Res = ChiffreAvant + Nb;
        // Sinon Si Op est égale à "-" Alors on affecte la valeur de (ChiffreAvant-Nb) à Res
        } else if (Op === '-') {
            Res = ChiffreAvant - Nb;
        // Sinon Si Op est égale à "*" Alors on affecte la valeur de (ChiffreAvant*Nb) à Res
        } else if (Op === '*') {
            Res = ChiffreAvant * Nb;
        // Sinon Si Op est égale à "/" Alors Si Nb est différent de 0 on affecte la valeur de (ChiffreAvant/Nb) à Res
        } else if (Op === '/') {
            if (Nb !== 0) {
                Res = ChiffreAvant / Nb;
            } else {
                document.getElementById("ecran").value = "Erreur: Division par zéro"; // Sinon on affiche l'erreur dans ecran
            }
        }
        document.getElementById("ecran").value = Res; // On affiche ka valeur de Res dans ecran
    } else {
        document.getElementById("ecran").value = "Erreur: Opérateur manquant"; // On affiche l'erreur dans ecran
    }
}

// Déclaration de la fonction "effacer" avec aucun paramètre
function effacer() {
    Res = ""; // On affecte "rien" à Res
    Op = ""; // On affecte "rien" à Op
    ChiffreAvant = 0; // On affecte "0" à ChiffreAvant
    document.getElementById("ecran").value = 0; // On affiche "0" dans l'écran
}

// Déclaration de la fonction "fin" avec aucun paramètre
function fin() {
    document.getElementById('ecran').value = 'Fin du traitement'; // On affiche "0" dans l'écran
    const boutons = document.querySelectorAll('button'); // On déclare et on affecte à la constante boutons la méthode ".querySelectorAll('button')" pour sélectionner tous les éléments de types "buttons"/boutons 
    boutons.forEach(bouton => { 
        bouton.disabled = true; // On désactive chaque button/"bouton" qui fait partie de tous les éléments de la constante boutons
    });
}
