import React from 'react';
import './index.css';

const Form = ({ nome1, nome2, setNome1, setNome2, errorMessage }) => {
	return (
		<div className="form">
			<label className="label">Primeiro nome:</label>
			<label className="errorMsg">{errorMessage}</label>
			<input 
				className="input" 
				onChange={(e) => setNome1(e.target.value)} 
				type="text" 
				placeholder="Ex: Joao"
				value={nome1}
			/>
			<label className="label">Segundo nome:</label>
			<label className="errorMsg">{errorMessage}</label>
			<input 
				className="input" 
				onChange={(e) => setNome2(e.target.value)} 
				type="text" 
				placeholder="Ex: Joao"
				value={nome2}
			/>
		</div>
	)
};

export default Form;