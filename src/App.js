import React, {useState} from 'react';
import Title from './components/Title/index';
import Form from './components/Form/index';
import Result from './components/Result/index';
import Button from './components/Button/index';
import { similar } from './components/Compara/index';
import './App.css';

const App = () => {

    const [nome1, setNome1] = useState(""),
        [nome2, setNome2] = useState(""),
    [result, setResult] = useState(false),
    [errorMessage, setErrorMessage] = useState(null),
    [textBtn, setTextBtn] = useState("Comparar");

	const clickBtn = () => {
        let res = similar(nome1?.length, nome2?.length);

		if (nome1 !== "" && nome2 !== "") {
			setResult(res);
            setNome1("");
            setNome2("");
            setTextBtn("Comparar Novamente");
            setErrorMessage(null);
		} else {
			setErrorMessage("campo obrigatório*");
            setTextBtn("Comparar");
            setResult(null);
		}
	}

    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <Title/>
                    <Form {...{nome1, nome2, setNome1, setNome2, errorMessage}}/>
                    <Button textBtn={textBtn} clickBtn={clickBtn}/>
                    <Result>
                        {result}
                    </Result>
                </div>
            </header>
        </div>
    )
}

export default App;