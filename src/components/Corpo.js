import React, {useRef, useState} from 'react';
import {similar} from './Compara';

const Corpo = () => {

	const refvol1 = useRef(null),
		refvol2 = useRef(null),
		[resultado, setResultado] = useState(false);

		const clicar = () => {
			const val1 = refvol1.current.value, // valor1.value;
				val2 = refvol2.current.value, // valor2.value;
				res = similar(val1, val2);

			setResultado(res);
		}

	return <div className="fundo">
				<h2>SIMILAR STRING</h2>
				<input ref={refvol1} type="text" placeholder="Informe um nome"></input>
				<input ref={refvol2} type="text" placeholder="Informe outro nome"></input>
				<button onClick={clicar}>Valor</button>
				<div id="result">{resultado}</div>
			</div>
	
};

export default Corpo;