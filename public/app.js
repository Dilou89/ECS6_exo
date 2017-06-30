
let tab = [];
let indices = [];
document.getElementById('valid').addEventListener('click', e => {
	let prenom = document.getElementById('firstName').value;
	let maj = prenom.charAt(0).toUpperCase() + prenom.substring(1).toLowerCase();


	if (maj == "") {
		document.getElementById("reponse").innerHTML = `Bonjour Père Noel!`;
	} else {
		document.getElementById("reponse").innerHTML = `Bonjour ${maj}!`;
	}

	tab.push(prenom);

	let list = document.getElementById("tableau").rows;
	let newList = document.getElementById("tableau").insertRow(-1);
	let textnode = document.createTextNode(` ${maj}`);
	newList.appendChild(textnode);

//Ajouter un champ de recherche et un bouton au dessus de l'historique. 
// Lorsque ce bouton est cliqué, n'afficher que les noms commençant 
// par la chaîne de caractères saisie dans ce champ ('case insensitive')

document.getElementById('search').addEventListener('click', e => {
	let saisie = document.getElementById('abc').value;
	let majS = saisie.charAt(0).toUpperCase() + saisie.substring(1).toLowerCase();
	let debut = maj.substr(0, 3);

	let filt = debut.includes(majS);
	if(filt==true){

		indices.push(prenom);
	}
	document.getElementById("tri").innerHTML=`${indices}`;
});
});




