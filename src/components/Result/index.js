import React from 'react';
import './index.css';

const Result = (props) => {
	return(
		<div className="result">{props.children}</div>
	);
}
export default Result;