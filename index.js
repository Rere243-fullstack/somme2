//
//let motTaperOk = true

//if(motTaperOk) {
   // console.log("Bravo, vous avez correctement tapeé le mot")
//} else{
    //console.log("Echec, vous avez mal tapé le mot")
//}
 //
//const motApplication = "Bonjour" //mettre un autre mot ici

//let motUtilisateur = prompt("Entrez le mot : " +motApplication)

//switch (motUtilisateur) {
   // case motApplication:
       // console.log("Bravo !")
      //  break
  //  case "Gredin":
      //  console.log("Restez correct !")
       // break
 //  case "Mécréant":
      //  console.log("Restez correct !")
      //  break
 //   case "Vilain":
     //   console.log("Soyez gentil !")
      //  break
  //  default:
     //   console.log("Vous avez fait une erreur de frappe.")
//}
   

let Score = 0

let choix = prompt("Veillez choisir la liste : mots ou  phrases")
while(choix !=="mots" && choix !=="phrases"){
    choix = prompt("veillez choisir la liste : mots ou phrases")
}

if(choix ==="mots"){
    for (i = 0 ; i< listeMots.length; i++){
        let motUtilisateur = prompt("Entrez un mot :" +listeMots[i])
          if(motUtilisateur === listeMots[i]){
              Score++
          }
       }
       console.log("votre score est de"  + Score + "sur " + listeMots.length);
}else{
    for (i = 0 ; i< listePhrases.length; i++){
        let motUtilisateur = prompt("Entrez un mot :" +listePhrases[i])
          if(motUtilisateur === listePhrases[i]){
              Score++
          }
       }
       console.log("votre score est de"  + Score + "sur " + listePhrases.length); 
}



   //const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
   //console.log(listeMots[0])
   //console.log(listeMots[1])
  // console.log(listeMots[2])
//for(let compteur = 0;compteur < 3; compteur = compteur +1){
   // console.log(compteur)
//}
// boucle : for et while
//for(let i =0;i<3;i=i++){
   // console.log(i)
//}
//let i = 0
//while(i<3){
   // console.log(i)
   // i++
//}

//let motUtilisateur = prompt("liste de mot ou de phrase")
// structure de fonction

lancerJeu(listeMots) {
    // code
}

