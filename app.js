// EXO 1 : Écrivez une fonction qui prend deux nombres en argument et retourne vrai si le premier est supérieur au deuxieme ou faux dans le cas contraire ⭐

// function verification(nombre1, nombre2) {
//     if (nombre1 > nombre2) {
//         return true
//     }else {
//         return false
//     }
// }

// console.log(verification(53,49));


// EXO 2 : Implémentez une fonction pour inverser une chaîne de caractères. Vous ne devez pas utiliser la méthode reverse ⭐


// function reversUneString(str) {
//     let result = ""

//     for (let i = str.length -1; i >= 0; i--) {
//         result += str[i] 
//     }
//     return result
// }

// console.log(reversUneString("test"));


// EXO 3 : Un palindrome est un mot qui se lit dans les deux sens ("kayak") Écrivez un algorithme pour vérifier si une chaîne de caractères donnée est un palindrome. ⭐

// function verifiePalindrome(str) {
//     let result = ""

//     for (let i = str.length -1; i >= 0; i--) {
//         result += str[i] 
//     }
    
//     if (str == result) {
//         return true
//     }else {
//         return false
//     }
// }

// console.log(verifiePalindrome("test"));


// EXO 4 : Créez une fonction qui retourne le factoriel d'un nombre passé en argument. ⭐

// function factoriel(nbr) {
//     let f = 1;
//     for(let i = 1; i <= nbr; i++){
//         f = f * i;  
//     }  
//     return f;
      

// }

// console.log(factoriel(7));


//  EXO 5 : Implémentez une fonction pour vérifier si un nombre est premier. Un nombre premier est un nombre qui est divisible uniquement par 1 ou par lui même ⭐

// function prime(nbr){
//     for(let i = 2; i < nbr - 1;i++){
//         if(nbr % i === 0){
//             return false
//         }
//     }
//     return true
// }

// console.log(prime(193));


// EXO 6 : Écrire une fonction qui renvoie le plus grand nombre dans un tableau. Vous ne devez pas utiliser de boucle ⭐

// function maxDansTableau(tab) {
//     let result = Math.max(...tab);
//     return result
// }

// console.log(maxDansTableau([50,44,40,70,90]));


// EXO 7 : Écrivez une fonction retourne vrai si deux chaînes de caractères sont des anagrammes l'une de l'autre ou faux dans le cas contraire.⭐

// function verifierAnagramme(str1, str2) {

//     if (str1.length !== str2.length) {
//         return false;
//     }
    
//     let string1 = str1.split('').sort().join('');
//     let string2 = str2.split('').sort().join('');

//     return (string1 === string2);
// }

// console.log(verifierAnagramme('abce','cbaf'));


// EXO 10 : Écrivez une fonction pour calculer la somme de tous les nombres pairs d'un tableau. ⭐

// function trouverLesNbrPairs(tab) {
//     let result = 0
//     for (let i = 0; i <= tab.length; i++) {
//         if (tab[i] % 2 == 0) {
//             result += tab[i]
//         }
//     }
//     return result
// }

// console.log(trouverLesNbrPairs([1, 2, 55, 4]));


// EXO 13 : Écrivez un algorithme pour trouver le nombre de voyelles dans une chaîne de caractères.⭐


// function compterNbrVoyelles(mot) {
//     mot = mot.toLowerCase();
//     const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
//     let nbrVoyelles = 0;
 
//     for (let lettre of mot) {
//         if (voyelles.includes(lettre)) {
//             nbrVoyelles ++;
//         }
//     }
//     return nbrVoyelles;
// }

// console.log(compterNbrVoyelles("voyage"));



// EXO 16 : Implémentez une fonction pour calculer le nombre de chiffres d'un nombre entier. ⭐

// function nombreDeChifre(num) {
//     let myArr = String(num).split("").map((num)=>{
//       return Number(num)
//     })
//     let result = myArr.length
//     return result
// }

// console.log(nombreDeChifre(15879642));