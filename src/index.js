import React from 'react';
import ReactDOM from 'react-dom'


const Hello = (props) => {
    console.log(props.name, props.age);
    return (
        <div>
            <p> Hello {props.name}, you are {props.age} years old </p>
        </div>
    )
};

const PropTest = (props) => {
    return (
        <div>
            <p>Component used as a props {props.name}</p>
        </div>
    )
};



const App = () => {
    const name = 'Peter';
    const age = '10';
    return (
        <>
            <PropTest name="Sud"/>

            <div>
                <Hello  name="Maya" age={26 + 10}/>
                <Hello name={name} age={age} />
            </div>
        </>

    )
};

ReactDOM.render(<App />, document.getElementById('root'));

