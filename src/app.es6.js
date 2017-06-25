
document.getElementById('valid').addEventListener('click', e=>{
	let prenom =document.getElementById('firstName').value;
	const maj = prenom.charAt(0).toUpperCase() + prenom.substring(1).toLowerCase();
	
	if(maj==""){
		document.getElementById("reponse").innerHTML =`Bonjour Père Noel!`;	
	}
	else{
		document.getElementById("reponse").innerHTML =`Bonjour ${maj}!`;

	}
	let list = document.getElementById("tableau").rows;
	let newList = document.getElementById("tableau").insertRow(-1);
	let textnode = document.createTextNode(` ${maj}`);
	newList.appendChild(textnode);


	document.getElementById('search').addEventListener('click', e=>{
		let saisie =document.getElementById('abc').value;
		
		let debut = maj.substr(0, 3);
		console.log(debut);

	})
});
