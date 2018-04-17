import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './calculator';

class TodoApp extends Component {
    state = {
        inputs: [
            {name: 'a', value: '0'},
            {name: 'b', value: '0'},
            {name: 'c', value: '0'}
        ],
        equations: [{
            value: '+'
        }, {
            value: '+'
        }],
        result: ''
    };

    countHandler = () => {
        const inputs = [...this.state.inputs];
        const equations = [...this.state.equations];
        let equation = '';

        inputs.map((item, index) => {
            equation += item.value.toString() + (equations[index] ? equations[index].value : '');
        });

        this.setState({result: eval(equation)});
        return;
    };

    handleEquationChange = (event, index) => {
        const currentEquations = [...this.state.equations];

        currentEquations[index].value = event.target.value;

        this.setState({equations: currentEquations});
        this.countHandler();
    };

    handleInputChange = (event, index) => {
        const currentInputs = [
            ...this.state.inputs
        ];

        currentInputs[index].value = event.target.value;
        this.setState(currentInputs)

        this.countHandler();
    };

    handleInputClick = (event, index) => {
        const currentInputs = [
            ...this.state.inputs
        ];

        currentInputs[index].value = '';

        this.setState(currentInputs);
    };

    renderResult = () => {
        return (
            <div className={'result'}>
                {this.state.result}
            </div>
        );
    };

    render() {
        return (
            <div className={'container'}>
                <Calculator
                    inputs={this.state.inputs}
                    equations={this.state.equations}
                    inputChange={this.handleInputChange}
                    inputClick={this.handleInputClick}
                    equationChange={this.handleEquationChange}/>
                {this.renderResult()}
            </div>
        )
    }
}
ReactDOM.render(<TodoApp />, document.querySelector("body"));
