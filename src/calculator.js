import React from 'react';


const calculator = (props) => {
    const options = [
        '+', '-', '*', '/'
    ];
    console.log(props.inputs)

    return (
        <div>
            {props.inputs.map((input, index) => {
                return (
                    <span key={index}>
                        <div className="group">
                          <input type='number'
                                 name={input.name}
                                 value={input.value}
                                 onClick={(event) => props.inputClick(event, index)}
                                 onChange={(event) => props.inputChange(event, index)}/>
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          <label></label>
                        </div>


                        {index < props.inputs.length-1 &&
                            <div className={'select'}>
                                <select className={'select-text'} value={props.equations[index].value}
                                        onChange={(event) => props.equationChange(event, index)}>
                                    {options.map((item, index) => {
                                        return <option key={'option' + index} value={item}>{item}</option>
                                    })}
                                </select>
                                <span className="select-highlight"></span>
                                <span className="select-bar"></span>
                                <label className="select-label"></label>
                            </div>
                        }
                    </span>
                )
            })}
        </div>
    );
};


export default calculator;
