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
   
const listeMots = ["Cachalot","Petunia","Serviette"]
let Score = 0
let motUtilisateur = prompt("Entrez un mot :" +listeMots[0])

if(motUtilisateur === listeMots[0]){
    Score++
}
 motUtilisateur = prompt("Entrez un mot :" +listeMots[1])

if(motUtilisateur === listeMots[1]){
    Score++
}
 motUtilisateur = prompt("Entrez un mot :" +listeMots[2])

if(motUtilisateur === listeMots[2]){
    Score++
}
console.log(Score);
   //const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
   //console.log(listeMots[0])
   //console.log(listeMots[1])
  // console.log(listeMots[2])
//for(let compteur = 0;compteur < 3; compteur = compteur +1){
   // console.log(compteur)
//}
// boucle : for et while
for(let i =0;i<3;i=i++){
    console.log(i)
}
let i = 0
while(i<3){
    console.log(i)
    i++
}