import React from 'react';
import './index.css';

const Form = ({setNome1, setNome2}) => {
	return (
		<div>
			<div className="input">
				<label>Primeiro nome:</label>
				<input onChange={(e) => setNome1(e.target.value)} type="text" placeholder="Digite um nome"></input>
			</div>
			<div className="input">
				<label>Segundo nome:</label>
				<input onChange={(e) => setNome2(e.target.value)} type="text" placeholder="Digite um nome"></input>
			</div>
		</div>
	)
};

export default Form;