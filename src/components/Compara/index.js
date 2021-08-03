const similar = (n1, n2) => {

	let equivalency = 0;

	const minLength = (n1 > n2) ? n2 : n1,
		maxLength = (n1 < n2) ? n2 : n1;

	for (let i = 0; i < minLength; i++) {
		if (n1[i] === n2[i]) { equivalency++; }
	}

	let weight = equivalency / maxLength;

	return (weight * 100).toFixed(1) + "% de igualdade!";
}

export {
	similar
}