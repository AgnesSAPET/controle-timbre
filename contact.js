function age(){	
	let return="envoyer"
	if (age >= 18) {        
	status = "Majeur";               // executer
	} 
	else {                                
	status = "Mineur";           // ne pas executer
	}
return envoyer
}

function valider(){
  if(document.formSaisie.prenom.value != "") {  
    return true;
  }
  else {
    alert("Saisissez le prénom");
    return false;
  }
}
