import React from 'react';
import './index.css';

const Button = (props) => {
	return(
		<button onClick={props.clickBtn}>Resultado</button>
	);
}
export default Button;