//mettons un intervalle de temps pour attendre 3s avant que le script s'exécute
setTimeout(() => {
    //choix de service offert
    let choix = prompt(`
1.Solde de mon compte
2:Transfert d'argent
3.Paiement de facture
4.Achats: Crédit et Pass
5.Quitter`)
    //solde par defaut
    let solde = 1000000
    function store() {
        localStorage.setItem("solde", parseFloat(solde))

    }
    //fonction permettant d'afficher les données du local dans le document 
    function getValues() {
        let storedValues = localStorage.getItem("solde")
        if (!storedValues) {
            solde
        }
        else {
            solde = storedValues;
        }
    } getValues()
    //si le chois de l'utilisateur se porte sur le 1
    if (choix == 1) {
        alert(`votre solde est de ${solde} FrCFA`)
        store()
        window.location.reload();

        //si le choix se porte sur le 2
    } else if (choix == 2) {

        let somme = prompt("veuillez entrer un montant")
        if (parseFloat(solde) < parseFloat(somme)) {
            alert(`Solde insuffisant`)
            window.location.reload();
        } else if (parseFloat(solde) >= parseFloat(somme)) {
            let numero = prompt("veuillez entrer un numero a qui envoyé ce montant")
            if (numero.length == 9) {
                let newSolde = parseFloat(solde) - parseFloat(somme)
                alert(`vous avez envoyé ${somme} FrCFA à ${numero} avec succés 
                votre solde est maintenant ${newSolde} Frcfa`)
                solde = newSolde
                store()
                window.location.reload();
            } else {
                alert(`Désolé ${somme} FrCFA n'a pas pu être envoyé à ${numero} 
                       veuillez reéssayer`)
                window.location.reload();

            }
        } else {
            alert("merci d'entrer un montant (un nombre)")
        }

        //si le chois se porte sur le 3
    } else if (choix == 3) {

        let facture = prompt(`
    1.Senelec
    2:Seneau
    3.Fibre orange`
        )
        //s'il s'agit de la facture 1(senelec)
        if (facture == 1) {
            let numero = prompt("veuillez entrer le numero de police")
            if (numero.length == 15) {
                let somme = prompt("veuillez entrer le montant")
                if (parseFloat(solde) < parseFloat(somme)) {
                    alert(`Solde insuffisant`)
                    window.location.reload();
                } else if (numero.length == 15 && parseFloat(solde) >= parseFloat(somme)) {
                    let newSolde = parseFloat(solde) - parseFloat(somme)
                    alert(`votre facture a été bien réglé
                    votre solde est maintenant ${newSolde} Frcfa`)
                    solde = newSolde
                    store()
                    window.location.reload();

                } else {
                    alert(`Désolé votre facture n'a pas pu être réglé 
                       veuillez reéssayer`)
                    window.location.reload();
                }
            } else {
                alert("le numéro que vous avez saisi est incorrect merci de réessayer")
            }
            //s'il s'agit de la facture 2(seneau)
        } else if (facture == 2) {
            let numero = prompt("veuillez entrer le numero de police")
            if (numero.length == 15) {
                let somme = prompt("veuillez entrer le montant")
                if (parseFloat(solde) < parseFloat(somme)) {
                    alert(`Solde insuffisant`)
                    window.location.reload();
                } else if (numero.length == 15 && parseFloat(solde) >= parseFloat(somme)) {
                    let newSolde = parseFloat(solde) - parseFloat(somme)
                    alert(`votre facture a été bien réglé
                    votre solde est maintenant ${newSolde} Frcfa`)
                    solde = newSolde
                    store()
                    window.location.reload();

                } else {
                    alert(`Désolé votre facture n'a pas pu être réglé 
                       veuillez reéssayer`)
                    window.location.reload();
                }
            } else {
                alert("le numéro que vous avez saisi est incorrect merci de réessayer")
            }
            //s'il s'agit de la facture 3(fibre orange)
        } else if (facture == 3) {
            let numero = prompt("veuillez entrer le numero de police")
            if (numero.length == 15) {
                let somme = prompt("veuillez entrer le montant")
                if (parseFloat(solde) < parseFloat(somme)) {
                    alert(`Solde insuffisant`)
                    window.location.reload();
                } else if (numero.length == 15 && parseFloat(solde) >= parseFloat(somme)) {
                    let newSolde = parseFloat(solde) - parseFloat(somme)
                    alert(`votre facture a été bien réglé
                    votre solde est maintenant ${newSolde} Frcfa`)
                    solde = newSolde
                    store()
                        window.location.reload();
                    
                } else {
                    alert(`Désolé votre facture n'a pas pu être réglé 
                       veuillez reéssayer`)
                       window.location.reload();
                }
            } else {
                alert("le numéro que vous avez saisi est incorrect merci de réessayer")
                window.location.reload();
            }
        }
        //si le chois de l'utilisateur se porte sur le 4
    } else if (choix == 4) {

        let achat = prompt(`
    1.Illimix
    2:Pass Internet
    3.Crédit Téléphonique`
        )
        //s'il s'agit de l'achat 1 (illimix)
        if (achat == 1) {
            let numero = prompt("veuillez entrer le numero à qui envoyer")
            if (numero.length == 9) {
                let somme = prompt("veuillez entrer le montant à envoyer")
                if (parseFloat(solde) < parseFloat(somme)) {
                    alert(`Solde insuffisant`)
                    window.location.reload();
                } else if (parseFloat(solde) >= parseFloat(somme)) {
                    let newSolde = parseFloat(solde) - parseFloat(somme)
                    alert(`votre achat a été bien effectué
                    votre solde est maintenant ${newSolde} Frcfa`)
                    solde = newSolde
                    store()
                        window.location.reload();
                    
                } else {
                    alert(`Désolé votre achat n'a pas pu être effectué
                       veuillez reéssayer`)
                       window.location.reload();
                }
            } else {
                alert("le numéro que vous avez saisi est incorrect merci de réessayer")
                window.location.reload();
            }
            //s'il s'agit de l'achat 2 (Pass internet)
        } else if (achat == 2) {
            let numero = prompt("veuillez entrer le numero à qui envoyer")
            if (numero.length == 9) {
                let somme = prompt("veuillez entrer le montant à envoyer")
                if (parseFloat(solde) < parseFloat(somme)) {
                    alert(`Solde insuffisant`)
                    window.location.reload();
                } else if (parseFloat(solde) >= parseFloat(somme)) {
                    let newSolde = parseFloat(solde) - parseFloat(somme)
                    alert(`votre achat a été bien effectué
                    votre solde est maintenant ${newSolde} Frcfa`)
                    solde = newSolde
                    store()
                        window.location.reload();
                    
                } else {
                    alert(`Désolé votre achat n'a pas pu être effectué
                       veuillez reéssayer`)
                       window.location.reload();
                }
            } else {
                alert("le numéro que vous avez saisi est incorrect merci de réessayer")
                window.location.reload();
            }
            //s'il s'agit de l'achat 3 (crédit téléphone)
        } else if (achat == 3) {
            let numero = prompt("veuillez entrer le numero à qui envoyer")
            if (numero.length == 9) {
                let somme = prompt("veuillez entrer le montant à envoyer")
                if (parseFloat(solde) < parseFloat(somme)) {
                    alert(`Solde insuffisant`)
                    window.location.reload();
                } else if (parseFloat(solde) >= parseFloat(somme)) {
                    let newSolde = parseFloat(solde) - parseFloat(somme)
                    alert(`votre achat a été bien effectué
                    votre solde est maintenant ${newSolde} Frcfa`)
                    solde = newSolde
                    store()
                        window.location.reload();
                } else {
                    alert(`Désolé votre achat n'a pas pu être effectué
                       veuillez reéssayer`)
                       window.location.reload();
                }
            } else {
                alert("le numéro que vous avez saisi est incorrect merci de réessayer")
                window.location.reload();
            }
        }
        //si le choix se porte sur le 5
    } else if (choix == 5) {

    } else {
        alert("merci d'entrer l'un des chiffres présents sur la boite de dialogue")
        window.location.reload();
    }
}, 1000);



