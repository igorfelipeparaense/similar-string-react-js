import React from 'react';
import './index.css';

const Button = (props) => {
	return(
		<button onClick={props.clickBtn}>{props.textBtn}</button>
	);
}
export default Button;