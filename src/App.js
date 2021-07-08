import React, {useState} from 'react';
import Title from './components/Title/index';
import Form from './components/Form/index';
import Result from './components/Result/index';
import Button from './components/Button/index';
import { similar } from './components/Compara/index';
import './App.css';

const App = () => {

    const [nome1, setNome1] = useState(''),
        [nome2, setNome2] = useState(''),
    [result, setResult] = useState(false);

	const clickBtn = () => {
        let res = similar(nome1, nome2);

		if (nome1 !== '' && nome2 !== '') {
			setResult(res);
		} else {
			setResult('Preencha os dois campos!');
		}
	}

    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <Title/>
                    <Form {...{setNome1, setNome2}}/>
                    <Button clickBtn={clickBtn}/>
                    <Result>
                        {result}
                    </Result>
                </div>
            </header>
        </div>
    )
}

export default App;