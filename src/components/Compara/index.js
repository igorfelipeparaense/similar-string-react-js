const similar = (nome1,nome2) => {
	
	let equivalency = 0;
	const minLength = (nome1.length > nome2.length) ? nome2.length : nome1.length,
		  maxLength = (nome1.length < nome2.length) ? nome2.length : nome1.length;

	for(let i = 0; i < minLength; i++) {
		if(nome1[i] === nome2[i]) { equivalency++; }
	}

	let weight = equivalency / maxLength;

	return (weight * 100).toFixed(1) + "% de igualdade!";
}

export {
	similar
}