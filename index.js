
setTimeout(() => {
    let choix = prompt(`
1.Solde de mon compte
2:Transfert d'argent
3.Paiement de facture
4.Achats: Crédit et Pass
5.Quitter`)
    let solde = 1000000
    if (choix == 1) {
        getValues()
        alert(`votre solde est de ${solde} FrCFA`)

    } else if (choix == 2) {
        getValues()
        let somme = prompt("veuillez entrer un montant")
        if (parseFloat(solde) < parseFloat(somme)) {
            alert(`Solde insuffisant`)
        } else if (parseFloat(solde) >= parseFloat(somme)) {
            let numero = prompt("veuillez entrer un numero a qui envoyé ce montant")
            if (numero.length == 9) {
                let newSolde = parseFloat(solde) - parseFloat(somme)
                alert(`vous avez envoyé ${somme} FrCFA à ${numero} avec succés 
                votre solde est maintenant ${newSolde} Frcfa`)
                solde = newSolde
                store()
            } else {
                alert(`Désolé ${somme} FrCFA n'a pas pu être envoyé à ${numero} 
                       veuillez reéssayer`)
            }
        } else {
            alert("merci d'entrer un montant (un nombre)")
        }


    } else if (choix == 3) {
        getValues()
        let facture = prompt(`
    1.Senelec
    2:Seneau
    3.Fibre orange`
        )
        if (facture == 1) {
            let numero = prompt("veuillez entrer le numero de police")
            if (numero.length == 15) {
                let somme = prompt("veuillez entrer le montant")
                if (parseFloat(solde) < parseFloat(somme)) {
                    alert(`Solde insuffisant`)
                } else if (numero.length == 15 && parseFloat(solde) >= parseFloat(somme)) {
                    let newSolde = parseFloat(solde) - parseFloat(somme)
                    alert(`votre facture a été bien réglé
                    votre solde est maintenant ${newSolde} Frcfa`)
                    solde = newSolde
                    store()
                } else {
                    alert(`Désolé votre facture n'a pas pu être réglé 
                       veuillez reéssayer`)
                }
            } else {
                alert("le numéro que vous avez saisi est incorrect merci de réessayer")
            }

        } else if (facture == 2) {
            let numero = prompt("veuillez entrer le numero de police")
            if (numero.length == 15) {
                let somme = prompt("veuillez entrer le montant")
                if (parseFloat(solde) < parseFloat(somme)) {
                    alert(`Solde insuffisant`)
                } else if (numero.length == 15 && parseFloat(solde) >= parseFloat(somme)) {
                    let newSolde = parseFloat(solde) - parseFloat(somme)
                    alert(`votre facture a été bien réglé
                    votre solde est maintenant ${newSolde} Frcfa`)
                    solde = newSolde
                    store()
                } else {
                    alert(`Désolé votre facture n'a pas pu être réglé 
                       veuillez reéssayer`)
                }
            } else {
                alert("le numéro que vous avez saisi est incorrect merci de réessayer")
            }
        } else if (facture == 3) {
            let numero = prompt("veuillez entrer le numero de police")
            if (numero.length == 15) {
                let somme = prompt("veuillez entrer le montant")
                if (parseFloat(solde) < parseFloat(somme)) {
                    alert(`Solde insuffisant`)
                } else if (numero.length == 15 && parseFloat(solde) >= parseFloat(somme)) {
                    let newSolde = parseFloat(solde) - parseFloat(somme)
                    alert(`votre facture a été bien réglé
                    votre solde est maintenant ${newSolde} Frcfa`)
                    solde = newSolde
                    store()
                } else {
                    alert(`Désolé votre facture n'a pas pu être réglé 
                       veuillez reéssayer`)
                }
            } else {
                alert("le numéro que vous avez saisi est incorrect merci de réessayer")
            }
        }
    } else if (choix == 4) {
        getValues()
        let achat = prompt(`
    1.Illimix
    2:Pass Internet
    3.Crédit Téléphonique`
        )
        if (achat == 1) {
            let numero = prompt("veuillez entrer le numero à qui envoyer")
            if (numero.length == 9) {
                let somme = prompt("veuillez entrer le montant à envoyer")
                if (parseFloat(solde) < parseFloat(somme)) {
                    alert(`Solde insuffisant`)
                } else if (parseFloat(solde) >= parseFloat(somme)) {
                    let newSolde = parseFloat(solde) - parseFloat(somme)
                    alert(`votre achat a été bien effectué
                    votre solde est maintenant ${newSolde} Frcfa`)
                    solde = newSolde
                    store()
                } else {
                    alert(`Désolé votre achat n'a pas pu être effectué
                       veuillez reéssayer`)
                }
            } else {
                alert("le numéro que vous avez saisi est incorrect merci de réessayer")
            }

        } else if (achat == 2) {
            let numero = prompt("veuillez entrer le numero à qui envoyer")
            if (numero.length == 9) {
                let somme = prompt("veuillez entrer le montant à envoyer")
                if (parseFloat(solde) < parseFloat(somme)) {
                    alert(`Solde insuffisant`)
                } else if (parseFloat(solde) >= parseFloat(somme)) {
                    let newSolde = parseFloat(solde) - parseFloat(somme)
                    alert(`votre achat a été bien effectué
                    votre solde est maintenant ${newSolde} Frcfa`)
                    solde = newSolde
                    store()
                } else {
                    alert(`Désolé votre achat n'a pas pu être effectué
                       veuillez reéssayer`)
                }
            } else {
                alert("le numéro que vous avez saisi est incorrect merci de réessayer")
            }
        } else if (achat == 3) {
            let numero = prompt("veuillez entrer le numero à qui envoyer")
            if (numero.length == 9) {
                let somme = prompt("veuillez entrer le montant à envoyer")
                if (parseFloat(solde) < parseFloat(somme)) {
                    alert(`Solde insuffisant`)
                } else if (parseFloat(solde) >= parseFloat(somme)) {
                    let newSolde = parseFloat(solde) - parseFloat(somme)
                    alert(`votre achat a été bien effectué
                    votre solde est maintenant ${newSolde} Frcfa`)
                    solde = newSolde
                    store()
                } else {
                    alert(`Désolé votre achat n'a pas pu être effectué
                       veuillez reéssayer`)
                }
            } else {
                alert("le numéro que vous avez saisi est incorrect merci de réessayer")
            }
        }

    } else {

    }
}, 3000);

function store() {
    localStorage.setItem("solde", solde)

}
//fonction permettant d'afficher les données du local dans le document 
function getValues() {
    let storedValues = localStorage.getItem("solde")
    if (!storedValues) {
        solde = 1000000
    }
    else {
        solde = storedValues;
    }
}

