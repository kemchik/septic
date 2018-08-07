import ReactDOM from 'react-dom';
import React from 'react';

console.log('hello');
const k = document.getElementById('itsme');
console.log(k);

class Hello extends React.Component{
    render(){
        return <h5>Hello222</h5>
    }

    componentWillMount(){
        console.log('itsme')
    }
}

ReactDOM.render(
    <Hello/>,
    document.getElementById('itsme')
    )


