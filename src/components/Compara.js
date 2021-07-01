const similar = (val1,val2)=> {
	
	let equivalency = 0;
	const minLength = (val1.length > val2.length) ? val2.length : val1.length,
		  maxLength = (val1.length < val2.length) ? val2.length : val1.length;

	for(let i = 0; i < minLength; i++) {
		if(val1[i] === val2[i]) { equivalency++; }
	}

	let weight = equivalency / maxLength;

	return (weight * 100) + "%";
}

export {
	similar
}