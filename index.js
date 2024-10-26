/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function  afficherResultat(score, nbMotsproposes){
    console.log("votre score est de"  + score + "sur " + nbMotsproposes); 
}
/**
 * Cette fonction demande à l'utilisateur de choisir entre "mots" et "phrases" et retourne le choix de l'utilisateur
 * @return {string} : le choix de l'utilisateur, ce choix est nécessairement "mots" ou "phrases
 */
function choisirPhrasesOuMots(){
    //tant que l'utilisateur na pas choisi "mots" ou "phrases" redemande
    let choix = prompt('Voulez-vous jouer avec les mots (Entrez "mots") ou phrases (Entrez "phrases?")')
  while(choix !=="mots" && choix !=="phrases"){
    choix = prompt('vous devez choisir entre  "mots" ou "phrases"')
   }
   return choix
}
//**
 /* Cette fonction lance la boucle de jeu, c'est à dire qu'elle demande à l'utilisateur de saisir tous les mots
* contenus dans le tableau listePropositions. A chaque mot saisi, on incrémente le score de l'utilisateur
* 
* @param {array[string]} listePropositions 
* @return {number} : le score de l'utilisateur
*/
 function lancerBoucleDeJeu(listePropositions){
    for (i = 0 ; i< listePropositions.length; i++){
        let motUtilisateur = prompt("Entrez un mot :" +listePropositions[i])
          if(motUtilisateur === listePropositions[i]){
              Score++
          }
       }
        return Score
    }
//Cette fonction lance le jeu
//Elle demande à l'utilisateur de choisir entre "mots" ou  "phrases" et lancer la boucle de jeu correspondante
function  lancerJeu(){
  let choix = choisirPhrasesOuMots()
  let score = 0
  let nbMotsproposes = 0
//On détermine la liste des mots ou des phrases à proposer à l'utilisateur
    if(choix === "mots"){
        score = lancerBoucleDeJeu(listeMots)
        nbMotsproposes = listeMots.length
     }else{
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsproposes = listePhrases.length
     }
     afficherResultat(score, nbMotsproposes)
 }






